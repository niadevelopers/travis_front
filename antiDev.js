// =====================================================
// PROFESSIONAL DEVTOOLS PROTECTION v2.0 (2026)
// Detects even if DevTools is opened BEFORE page load
// =====================================================

const CONFIG = {
    title: "Developer Tools Access Prohibited",
    body: "This action is not allowed on our platform.<br><br>Our security policies strictly prohibit the use of developer tools, element inspection, or viewing source code.",
    buttonText: "I have closed Developer Tools",
    redirectAfterSeconds: null, // Set to a number (e.g. 10) if you want auto-redirect
    redirectUrl: null          // e.g. "/access-denied" or leave null
};

let protectionActive = false;

function showProfessionalOverlay() {
    if (protectionActive) return;
    protectionActive = true;

    const overlay = document.createElement("div");
    overlay.id = "devtools-protection-overlay";
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0, 0, 0, 0.97); color: #fff; z-index: 2147483647;
        display: flex; align-items: center; justify-content: center;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        text-align: center; overflow: hidden;
    `;

    overlay.innerHTML = `
        <div style="max-width: 620px; padding: 40px 30px;">
            <h1 style="color: #ff4d4d; font-size: 2.2rem; margin-bottom: 24px; letter-spacing: -0.5px;">
                ⚠️ ${CONFIG.title}
            </h1>
            <p style="font-size: 1.25rem; line-height: 1.7; margin-bottom: 32px;">
                ${CONFIG.body}
            </p>
            <button onclick="retryProtectionCheck()" 
                    style="background:#ff4d4d; color:#fff; border:none; padding:14px 32px; font-size:1.1rem; 
                           border-radius:8px; cursor:pointer; font-weight:600;">
                ${CONFIG.buttonText}
            </button>
            <p style="margin-top:30px; color:#888; font-size:0.95rem;">
                Please close all Developer Tools windows to continue.
            </p>
        </div>
    `;

    // Hide the actual page content
    if (document.body) document.body.style.visibility = "hidden";
    document.documentElement.appendChild(overlay);

    // Optional auto-redirect after delay
    if (CONFIG.redirectUrl && CONFIG.redirectAfterSeconds) {
        setTimeout(() => {
            window.location.href = CONFIG.redirectUrl;
        }, CONFIG.redirectAfterSeconds * 1000);
    }
}

// Core detection (catches pre-opened DevTools)
function isDevToolsOpen() {
    const threshold = 160; // pixels - reliable for docked panels
    const widthDiff = window.outerWidth - window.innerWidth > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;

    return widthDiff || heightDiff;
}

// Extra layer: Image getter trick (catches some console-based bypass attempts)
function extraDetectionLayer() {
    const testElement = new Image();
    Object.defineProperty(testElement, "id", {
        get: function () {
            showProfessionalOverlay();
            return "devtools-detected";
        }
    });
    console.log("%cSecurity check", "color:transparent", testElement);
}

// Block right-click
document.addEventListener("contextmenu", e => {
    e.preventDefault();
    showProfessionalOverlay();
    return false;
});

// Block all common devtools shortcuts
document.addEventListener("keydown", e => {
    const isWindows = e.ctrlKey;
    const isMac = e.metaKey;

    if (
        e.key === "F12" ||
        (isWindows && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (isMac && e.altKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (isWindows && e.key === "u") || (isMac && e.key === "u") || // View Source
        (isWindows && e.shiftKey && e.key === "K") // Firefox console
    ) {
        e.preventDefault();
        showProfessionalOverlay();
        return false;
    }
});

// Continuous monitoring (runs every 400ms)
function startContinuousCheck() {
    setInterval(() => {
        if (!protectionActive && isDevToolsOpen()) {
            showProfessionalOverlay();
        }
    }, 400);
}

// Retry button handler (user claims they closed it)
window.retryProtectionCheck = function () {
    // Re-check immediately
    if (isDevToolsOpen()) {
        return; // Still open → do nothing
    }
    // If really closed, remove overlay
    const overlay = document.getElementById("devtools-protection-overlay");
    if (overlay) {
        overlay.remove();
        protectionActive = false;
        if (document.body) document.body.style.visibility = "visible";
    }
};

// Initialize everything as early as possible
function initProtection() {
    // Immediate check on script load
    if (isDevToolsOpen()) {
        showProfessionalOverlay();
    }

    // Extra layer
    extraDetectionLayer();

    // Start continuous check
    startContinuousCheck();

    // Final check once page is fully loaded
    window.addEventListener("load", () => {
        setTimeout(() => {
            if (!protectionActive && isDevToolsOpen()) {
                showProfessionalOverlay();
            }
        }, 600);
    });

    console.log("%c🔒 Professional security protection enabled", "color:#ff4d4d; font-weight:bold");
}

// Launch immediately
initProtection();
