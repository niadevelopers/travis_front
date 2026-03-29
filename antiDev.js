

const CONFIG = {
    title: "Developer Tools Access Prohibited",
    body: "This action is not allowed on our platform.<br><br>Our security policies strictly prohibit the use of developer tools, element inspection, or viewing source code.",
    buttonText: "I have closed Developer Tools",
    redirectAfterSeconds: null, 
    redirectUrl: null  
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

    if (document.body) document.body.style.visibility = "hidden";
    document.documentElement.appendChild(overlay);

    if (CONFIG.redirectUrl && CONFIG.redirectAfterSeconds) {
        setTimeout(() => {
            window.location.href = CONFIG.redirectUrl;
        }, CONFIG.redirectAfterSeconds * 1000);
    }
}

function isDevToolsOpen() {
    const threshold = 160; 
    const widthDiff = window.outerWidth - window.innerWidth > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;

    return widthDiff || heightDiff;
}

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

document.addEventListener("contextmenu", e => {
    e.preventDefault();
    showProfessionalOverlay();
    return false;
});

document.addEventListener("keydown", e => {
    const isWindows = e.ctrlKey;
    const isMac = e.metaKey;

    if (
        e.key === "F12" ||
        (isWindows && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (isMac && e.altKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (isWindows && e.key === "u") || (isMac && e.key === "u") ||
        (isWindows && e.shiftKey && e.key === "K")
    ) {
        e.preventDefault();
        showProfessionalOverlay();
        return false;
    }
});

function startContinuousCheck() {
    setInterval(() => {
        if (!protectionActive && isDevToolsOpen()) {
            showProfessionalOverlay();
        }
    }, 400);
}

window.retryProtectionCheck = function () {
    if (isDevToolsOpen()) {
        return; 
    }
    const overlay = document.getElementById("devtools-protection-overlay");
    if (overlay) {
        overlay.remove();
        protectionActive = false;
        if (document.body) document.body.style.visibility = "visible";
    }
};

function initProtection() {
    if (isDevToolsOpen()) {
        showProfessionalOverlay();
    }

    extraDetectionLayer();

    startContinuousCheck();

    window.addEventListener("load", () => {
        setTimeout(() => {
            if (!protectionActive && isDevToolsOpen()) {
                showProfessionalOverlay();
            }
        }, 600);
    });

}

initProtection();
</script>
