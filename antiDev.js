/**
 * DevTools Protection Script
 * - Blocks devtools access on desktop/laptop browsers
 * - Completely disabled on mobile/touch devices (no interference with long-press, paste, etc.)
 */

// ─── Mobile Detection ────────────────────────────────────────────────────────
// Check for touch capability AND mobile user agent.
// Both must be true to consider it a phone/tablet and skip protection.
const isMobileDevice = (
  ('ontouchstart' in window || navigator.maxTouchPoints > 0) &&
  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
);

// Exit immediately — do nothing on mobile devices
if (!isMobileDevice) {

  // ─── Config ────────────────────────────────────────────────────────────────
  const CONFIG = {
    title: 'Developer Tools Access Prohibited',
    body: 'This action is not allowed on our platform.<br><br>Our security policies strictly prohibit the use of developer tools, element inspection, or viewing source code.',
    buttonText: 'I Understand – Close Developer Tools',
    checkInterval: 300,   // ms between periodic checks
    threshold: 140,       // px difference that suggests devtools is open
    maxChecksBeforeOverlay: 3  // consecutive detections before showing overlay
  };

  let protectionActive = false;

  // ─── Overlay ───────────────────────────────────────────────────────────────
  function showOverlay() {
    if (protectionActive) return;
    protectionActive = true;

    const overlay = document.createElement('div');
    overlay.id = 'devtools-protection-overlay';
    overlay.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.98); color: #fff; z-index: 2147483647;
      display: flex; align-items: center; justify-content: center;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      text-align: center; overflow: hidden;
    `;
    overlay.innerHTML = `
      <div style="max-width: 640px; padding: 40px 30px;">
        <h1 style="color: #ff4d4d; font-size: 2.3rem; margin-bottom: 24px;">
          ${CONFIG.title}
        </h1>
        <p style="font-size: 1.22rem; line-height: 1.75; margin-bottom: 35px;">
          ${CONFIG.body}
        </p>
        <button onclick="window.retryProtectionCheck()"
          style="background:#ff4d4d; color:#fff; border:none; padding:16px 36px;
                 font-size:1.15rem; border-radius:8px; cursor:pointer; font-weight:600;">
          ${CONFIG.buttonText}
        </button>
        <p style="margin-top: 35px; color:#aaa; font-size:0.95rem;">
          Please fully close the Developer Tools panel to continue using the application.
        </p>
      </div>
    `;
    document.body.appendChild(overlay);

    // Hide the main page content behind the overlay
    if (document.documentElement) {
      document.documentElement.style.visibility = 'hidden';
    }
  }

  // ─── Detection ─────────────────────────────────────────────────────────────
  function isDevToolsLikelyOpen() {
    const widthDiff  = Math.abs(window.outerWidth  - window.innerWidth)  > CONFIG.threshold;
    const heightDiff = Math.abs(window.outerHeight - window.innerHeight) > CONFIG.threshold;
    return widthDiff || heightDiff;
  }

  // ─── Monitoring ────────────────────────────────────────────────────────────
  function startMonitoring() {
    let consecutiveDetections = 0;

    const check = () => {
      if (protectionActive) return;
      if (isDevToolsLikelyOpen()) {
        consecutiveDetections++;
        if (consecutiveDetections >= CONFIG.maxChecksBeforeOverlay) {
          showOverlay();
        }
      } else {
        consecutiveDetections = 0;
      }
    };

    // Run checks at various points to catch devtools opened before/during load
    check();
    setTimeout(check, 50);
    setTimeout(check, 150);
    setTimeout(check, 400);
    setInterval(check, CONFIG.checkInterval);
  }

  // ─── Keyboard Shortcuts ────────────────────────────────────────────────────
  // Block F12, Ctrl/Cmd+Shift+I/J/C (devtools), Ctrl/Cmd+U (view source)
  document.addEventListener('keydown', (e) => {
    const key = e.key?.toUpperCase();
    const devToolsShortcut =
      e.key === 'F12' ||
      ((e.ctrlKey || e.metaKey) && e.shiftKey && ['I','J','C'].includes(key)) ||
      ((e.ctrlKey || e.metaKey) && ['U'].includes(key));

    if (devToolsShortcut) {
      e.preventDefault();
      showOverlay();
      return false;
    }
  });

  // ─── Right-click / Context Menu ────────────────────────────────────────────
  // Only blocked on desktop (mobile is already excluded at the top)
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showOverlay();
    return false;
  });

  
  window.retryProtectionCheck = function () {
    if (isDevToolsLikelyOpen()) return; // devtools still open, do nothing

    const overlay = document.getElementById('devtools-protection-overlay');
    if (overlay) {
      overlay.remove();
      protectionActive = false;
      if (document.documentElement) {
        document.documentElement.style.visibility = 'visible';
      }
    }
  };

  
  startMonitoring();


  window.addEventListener('load', () => {
    setTimeout(() => {
      if (!protectionActive && isDevToolsLikelyOpen()) showOverlay();
    }, 800);
  });

} 
