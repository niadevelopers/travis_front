const CONFIG = {
    title: "Developer Tools Access Prohibited",
    body: "This action is not allowed on our platform.<br><br>Our security policies strictly prohibit the use of developer tools, element inspection, or viewing source code.",
    buttonText: "I Understand – Close Developer Tools",
    checkInterval: 300,       
    threshold: 140,           
    maxChecksBeforeOverlay: 3  
};

let protectionActive = false;
let detectionCount = 0;

function showProfessionalOverlay() {
    if (protectionActive) return;
    protectionActive = true;

    const overlay = document.createElement("div");
    overlay.id = "devtools-protection-overlay";
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0, 0, 0, 0.98); color: #fff; z-index: 2147483647;
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

    document.documentElement.appendChild(overlay);
    if (document.body) document.body.style.visibility = "hidden";
}

function isDevToolsLikelyOpen() {
    const threshold = CONFIG.threshold;
    const widthDiff = Math.abs(window.outerWidth - window.innerWidth) > threshold;
    const heightDiff = Math.abs(window.outerHeight - window.innerHeight) > threshold;
    return widthDiff || heightDiff;
}

function startDevToolsMonitoring() {
    let consecutiveDetections = 0;

    const check = () => {
        if (protectionActive) return;

        if (isDevToolsLikelyOpen()) {
            consecutiveDetections++;
            if (consecutiveDetections >= CONFIG.maxChecksBeforeOverlay) {
                showProfessionalOverlay();
            }
        } else {
            consecutiveDetections = 0; 
        }
    };

    check(); 
    setInterval(check, CONFIG.checkInterval);

    setTimeout(check, 50);
    setTimeout(check, 150);
    setTimeout(check, 400);
}

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    showProfessionalOverlay();
    return false;
});

document.addEventListener("keydown", (e) => {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
        (e.metaKey && e.altKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && ["u", "U"].includes(e.key)) ||
        (e.metaKey && ["u", "U"].includes(e.key))
    ) {
        e.preventDefault();
        showProfessionalOverlay();
        return false;
    }
});

window.retryProtectionCheck = function () {
    if (isDevToolsLikelyOpen()) {
        return;
    }

    const overlay = document.getElementById("devtools-protection-overlay");
    if (overlay) {
        overlay.remove();
        protectionActive = false;
        if (document.body) document.body.style.visibility = "visible";
    }
    detectionCount = 0;
};

function init() {
    startDevToolsMonitoring();

    window.addEventListener("load", () => {
        setTimeout(() => {
            if (!protectionActive && isDevToolsLikelyOpen()) {
                showProfessionalOverlay();
            }
        }, 800);
    });
}

init();
