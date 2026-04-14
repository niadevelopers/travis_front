(function injectStyles() {
    if (document.getElementById("travis-ripple-styles")) return;
    const style = document.createElement("style");
    style.id = "travis-ripple-styles";
    style.textContent = `
        .travis-ripple { display: flex; gap: 6px; align-items: center; padding: 8px 0; }
        .ripple-ball { width: 8px; height: 8px; border-radius: 50%; animation: travis-ripple 1.4s infinite ease-in-out; }
        .ball-r { background: #ff4d4d; animation-delay: -0.32s; }
        .ball-g { background: #2ecc71; animation-delay: -0.16s; }
        .ball-b { background: #3498db; }
        @keyframes travis-ripple { 0%, 80%, 100% { transform: scale(0); opacity: 0.3; } 40% { transform: scale(1); opacity: 1; } }
    `;
    document.head.appendChild(style);
})();

const BACKEND_URL = 'https://travis-j1w9.onrender.com';

const WEALTH_TIERS = {
    DESTITUTE: {
        minDailyCap: 0,
        maxDailyCap: 100,
        label: "DESTITUTE",
        displayName: "Emergency",
        color: "#C42B1C",
        adviceStyle: "survival",
        humanDescription: "You are in a financial emergency. Every shilling counts.",
        priority: "Food, water, shelter only. Nothing else.",
        dailyCapHuman: (cap) => `You have about ${Math.floor(cap)} shillings per day. That's less than a loaf of bread.`,
        bufferHuman: (buf, days) => `You have ${buf} shillings to last ${days} days. That's very little.`
    },
    SURVIVAL: {
        minDailyCap: 101,
        maxDailyCap: 300,
        label: "SURVIVAL",
        displayName: "Survival",
        color: "#E67E22",
        adviceStyle: "survival",
        humanDescription: "You can barely meet your basic needs each day.",
        priority: "Food, rent, transport to work. Nothing extra.",
        dailyCapHuman: (cap) => `You have about ${Math.floor(cap)} shillings per day. Enough for basic food but nothing more.`,
        bufferHuman: (buf, days) => `You have ${buf} shillings to stretch over ${days} days. Be very careful.`
    },
    STRUGGLING: {
        minDailyCap: 301,
        maxDailyCap: 800,
        label: "STRUGGLING",
        displayName: "Leveling",
        color: "#F39C12",
        adviceStyle: "conservative",
        humanDescription: "You can meet basic needs but have little left over.",
        priority: "Essentials first. Small treats occasionally.",
        dailyCapHuman: (cap) => `You have about ${Math.floor(cap)} shillings per day. You can cover essentials and maybe a small treat.`,
        bufferHuman: (buf, days) => `You have ${buf} shillings for ${days} days. You're getting by but not thriving.`
    },
    STABLE: {
        minDailyCap: 801,
        maxDailyCap: 3000,
        label: "STABLE",
        displayName: "Stable",
        color: "#27AE60",
        adviceStyle: "balanced",
        humanDescription: "You can meet your needs and save a little each month.",
        priority: "Budget, save, invest small amounts.",
        dailyCapHuman: (cap) => `You have about ${Math.floor(cap)} shillings per day. You're comfortable.`,
        bufferHuman: (buf, days) => `You have ${buf} shillings saved up for the next ${days} days. Good position.`
    },
    AFFLUENT: {
        minDailyCap: 3001,
        maxDailyCap: 15000,
        label: "AFFLUENT",
        displayName: "💰 Affluent",
        color: "#2ECC71",
        adviceStyle: "growth",
        humanDescription: "You have significant disposable income.",
        priority: "Grow wealth, invest, diversify.",
        dailyCapHuman: (cap) => `You have about ${Math.floor(cap)} shillings per day to spend or invest.`,
        bufferHuman: (buf, days) => `You have ${buf} shillings in reserve. Strong financial position.`
    },
    WEALTHY: {
        minDailyCap: 15001,
        maxDailyCap: 50000,
        label: "WEALTHY",
        displayName: "💎 Wealthy",
        color: "#1ABC9C",
        adviceStyle: "preservation",
        humanDescription: "You have substantial wealth.",
        priority: "Preserve capital, optimize taxes, plan legacy.",
        dailyCapHuman: (cap) => `You have ${Math.floor(cap)} shillings per day of spending power.`,
        bufferHuman: (buf, days) => `You have ${buf} shillings in liquid assets. Wealth is preserved.`
    },
    ELITE: {
        minDailyCap: 50001,
        maxDailyCap: Infinity,
        label: "ELITE",
        displayName: "👑 Elite",
        color: "#9B59B6",
        adviceStyle: "optimization",
        humanDescription: "You are in the top tier of wealth in Kenya.",
        priority: "Asset allocation, wealth transfer, impact investing.",
        dailyCapHuman: (cap) => `Your daily spending capacity exceeds ${Math.floor(cap).toLocaleString()} shillings.`,
        bufferHuman: (buf, days) => `Your liquid reserves are ${buf.toLocaleString()} shillings. Elite level.`
    }
};

const KNBS_BENCHMARKS = {
    minimumWage: {
        urban: 16114,
        rural: 13500,
        agricultural: 12000,
        domestic: 10000
    },
    povertyLine: {
        foodPoor: 3148,
        overallPoor: 5463,
        extremePoor: 2345
    },
    livingWage: {
        urbanSingle: 25000,
        urbanFamily: 45000,
        ruralSingle: 18000,
        ruralFamily: 32000
    },
    foodBasket: {
        dailyMinimum: 150,
        monthlyMinimum: 4500,
        description: "Basic food basket (unga, sukuma, onions, tomatoes)"
    }
};

let conversationState = {
    pendingClarification: null, 
    lastResponse: null,
    conversationHistory: [],
    currentTopic: null
};

function setPendingClarification(intent, originalQuestion, expectedType) {
    conversationState.pendingClarification = {
        originalIntent: intent,
        originalQuestion: originalQuestion,
        expectedType: expectedType,
        timestamp: Date.now()
    };
}

function clearPendingClarification() {
    conversationState.pendingClarification = null;
}

function hasPendingClarification() {
    return conversationState.pendingClarification !== null;
}

function getUserWealthTier(dailyCap, buffer) {
    if (buffer < 0) {
        return { 
            name: "DESTITUTE", 
            ...WEALTH_TIERS.DESTITUTE,
            displayName: " IN DEBT",
            humanDescription: `You owe ${Math.abs(buffer).toLocaleString()} shillings. No spending until debt is cleared.`
        };
    }
    
    for (const [tierName, tier] of Object.entries(WEALTH_TIERS)) {
        if (dailyCap >= tier.minDailyCap && dailyCap <= tier.maxDailyCap) {
            return { name: tierName, ...tier };
        }
    }
    return { name: "STRUGGLING", ...WEALTH_TIERS.STRUGGLING };
}


function humanReadableStatus(buffer, dailyCap, daysLeft, wealthTier) {
    if (wealthTier.adviceStyle === 'survival') {
        if (dailyCap < 100) {
            return `EMERGENCY: You have only ${buffer} shillings left for ${daysLeft} days. That's about ${Math.floor(dailyCap)} shillings per day. You cannot afford anything beyond basic food.`;
        } else if (dailyCap < 300) {
            return `VERY TIGHT: ${buffer} shillings must last ${daysLeft} days. That's ${Math.floor(dailyCap)} shillings per day. Enough for unga and sukuma, but nothing extra.`;
        } else {
            return `TIGHT BUT POSSIBLE: ${buffer} shillings for ${daysLeft} days. About ${Math.floor(dailyCap)} shillings per day. You can eat basic meals but watch every shilling.`;
        }
    } else if (wealthTier.adviceStyle === 'conservative') {
        return ` You have ${buffer} shillings to last ${daysLeft} days. That's about ${Math.floor(dailyCap)} shillings per day. You're getting by but not thriving.`;
    } else if (wealthTier.adviceStyle === 'balanced') {
        return `You have ${buffer} shillings for ${daysLeft} days. About ${Math.floor(dailyCap)} shillings per day. You're in a stable position.`;
    } else {
        return `💎 You have ${buffer.toLocaleString()} shillings in reserve. Your daily spending capacity is about ${Math.floor(dailyCap).toLocaleString()} shillings. Strong financial position.`;
    }
}

function humanReadableAdvice(wealthTier, action, amount, buffer, dailyCap, daysLeft) {
    const style = wealthTier.adviceStyle;
    
    if (action === 'spend') {
        if (style === 'survival') {
            if (amount > buffer) {
                return ` You cannot afford this. You only have ${buffer} shillings total. This would leave you with nothing.`;
            } else if (amount > dailyCap) {
                const daysToWait = Math.ceil(amount / dailyCap);
                return `This costs ${amount} shillings. You only have ${Math.floor(dailyCap)} shillings per day. Save for ${daysToWait} days first.`;
            } else {
                const remainingAfter = buffer - amount;
                const newDailyCap = remainingAfter / daysLeft;
                return `You can afford this. After buying, you'll have ${remainingAfter} shillings left for ${daysLeft} days. That's about ${Math.floor(newDailyCap)} shillings per day.`;
            }
        } else if (style === 'conservative') {
            const percentOfBuffer = Math.round((amount / buffer) * 100);
            if (percentOfBuffer > 30) {
                return `This costs ${amount} shillings, which is ${percentOfBuffer}% of your savings. That's a big chunk. Can you wait a few days?`;
            } else {
                return `This costs ${amount} shillings. That's reasonable for your situation. Go ahead but track it.`;
            }
        } else if (style === 'balanced') {
            const percentOfBuffer = Math.round((amount / buffer) * 100);
            if (percentOfBuffer > 50) {
                return ` This costs ${amount} shillings (${percentOfBuffer}% of your savings). Consider if this is the best use of your money right now.`;
            } else {
                return `This fits your budget comfortably. Enjoy.`;
            }
        } else {
            return `💎 At your wealth level, ${amount} shillings is manageable. The question is: does this purchase align with your goals?`;
        }
    }
    
    if (action === 'loan') {
        if (style === 'survival') {
            return ` Do not take any loan right now. You cannot afford repayments. Focus on increasing your income first.`;
        } else if (style === 'conservative') {
            const monthlyRepayment = Math.round(amount * 0.15);
            return ` A ${amount} shilling loan would cost about ${monthlyRepayment} shillings per month in interest. Only borrow if absolutely necessary.`;
        } else {
            return `💎 At your wealth level, you have better options than consumer loans. Consider using your assets as collateral for lower rates.`;
        }
    }
    
    if (action === 'hire') {
        if (style === 'survival') {
            return ` You cannot afford to hire anyone right now. Focus on building your own income first.`;
        } else if (style === 'conservative') {
            const safeWage = Math.floor(buffer * 0.25);
            return ` Based on your savings, a safe wage is about ${safeWage} shillings per month. Can you pay that?`;
        } else {
            return `💎 At your level, hiring should be about ROI. Will this person generate at least 3x their salary in value?`;
        }
    }
    
    return null;
}


function updateClock() {
    const now = new Date();
    document.getElementById('clock-time').textContent = now.toLocaleTimeString('en-KE',{hour:'2-digit',minute:'2-digit'});
    document.getElementById('clock-date').textContent = now.toLocaleDateString('en-KE',{weekday:'short',day:'numeric',month:'short'});
}
setInterval(updateClock, 1000); updateClock();

function toggleMobileSidebar() {
    const s = document.getElementById('nav-sidebar');
    s.classList.toggle('mobile-open');
}

function showCustomAlert(message, callback = null) {
    const alertBox = document.getElementById('custom-alert');
    const messageEl = document.getElementById('custom-alert-message');
    const okBtn = document.getElementById('custom-alert-ok');
    messageEl.innerHTML = message;
    alertBox.style.display = 'flex';
    const newOkBtn = okBtn.cloneNode(true);
    okBtn.parentNode.replaceChild(newOkBtn, okBtn);
    newOkBtn.addEventListener('click', () => {
        alertBox.style.display = 'none';
        if (callback) callback();
    });
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(err => {
            document.getElementById('install-status').innerText = 'Service worker failed – install may not work';
        });
    });
}

let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); deferredPrompt = e;
    document.getElementById('install-btn').disabled = false;
    document.getElementById('install-status').innerText = 'Ready to install';
});
window.addEventListener('appinstalled', () => { setTimeout(showPhoneModal, 600); });

function generateFingerprint() {
    let saved = localStorage.getItem('fp');
    if (saved && saved.length === 32) return saved;
    const canvas = (function() {
        try {
            const c = document.createElement('canvas'); c.width=256;c.height=60;
            const ctx = c.getContext('2d'); ctx.textBaseline="top"; ctx.font="14px 'Arial'";
            ctx.fillStyle="#f60"; ctx.fillRect(125,1,62,20); ctx.fillStyle="#069";
            ctx.fillText("TravisGuardian • 2026",2,15); ctx.fillStyle="rgba(102,204,0,0.7)";
            ctx.fillText("TravisGuardian • 2026",4,17); return c.toDataURL();
        } catch(e){return 'canvas-fail';}
    })();
    const signals = [navigator.userAgent||'UA-unknown',navigator.language||'xx-XX',navigator.hardwareConcurrency||'0',screen.width+'×'+screen.height+'×'+(screen.colorDepth||0),screen.availWidth+'×'+screen.availHeight,new Date().getTimezoneOffset(),Intl.DateTimeFormat().resolvedOptions().timeZone||'tz-unknown',canvas.substring(0,200)].join('|||');
    let hash=5381;
    for(let i=0;i<signals.length;i++){hash=((hash<<5)+hash+signals.charCodeAt(i))|0;}
    let fp='';
    while(fp.length<32){hash=(hash*31+0x9E3779B9)|0;fp+=(Math.abs(hash)%36).toString(36).toUpperCase();}
    fp=fp.substring(0,32); localStorage.setItem('fp',fp); return fp;
}
function encryptFingerprint(fp){const key="TRAVIS-GUARDIAN-SECURE-2026-x7k9";let e='';for(let i=0;i<fp.length;i++){e+=String.fromCharCode(fp.charCodeAt(i)^key.charCodeAt(i%key.length));}return btoa(e);}

function showPhoneModal() {
    if (document.getElementById('phone-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'phone-modal';
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:10000;';

    modal.innerHTML = `
        <div style="background:white;padding:28px;border-radius:16px;max-width:400px;width:90%;">
            <h3 style="color:var(--win-accent-light);margin:0 0 16px;font-size:16px;">Link Device Fingerprint</h3>
            <input id="modal-phone" type="tel" placeholder="254712345678" class="win-input" style="width:100%;margin-bottom:16px;font-size:16px;">
            <button id="submit-phone-btn" class="btn-accent" style="width:100%;padding:13px;">Submit Phone</button>
        </div>`;

    document.body.appendChild(modal);

    const button = document.getElementById('submit-phone-btn');

    button.onclick = function () {
        if (button.disabled) return;
        const originalText = button.textContent;
        button.disabled = true;
        button.style.opacity = "0.7";
        button.style.cursor = "not-allowed";
        button.textContent = "Processing...";
        submitPhoneAndFP();
        setTimeout(() => {
            if (button.disabled) {
                button.disabled = false;
                button.style.opacity = "1";
                button.style.cursor = "pointer";
                button.textContent = originalText;
            }
        }, 8000);
    };
}

async function submitPhoneAndFP() {
    const phone = document.getElementById('modal-phone').value.trim();
    if(!phone){alert("Phone number is required.");return;}
    const fp=generateFingerprint(); const encrypted=encryptFingerprint(fp);
    try {
        await fetch(`${BACKEND_URL}/store-fingerprint`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({encrypted,phone,ts:Date.now()})});
        alert("Phone + Fingerprint sent successfully!"); document.getElementById('phone-modal').remove();
    } catch(err){alert("Failed to send data. Check connection.");}
}

async function triggerInstall() {
    if(!deferredPrompt){alert("Install not ready. Refresh the page.");return;}
    try{await deferredPrompt.prompt();const{outcome}=await deferredPrompt.userChoice;deferredPrompt=null;}catch(e){console.error(e);}
}

async function attemptActivation() {
    const entered=document.getElementById('act-code').value.trim().toUpperCase().replace(/[^0-9A-Z-]/g,'');
    const fp=localStorage.getItem('fp');
    if(!fp||fp.length!==32){showCustomAlert("No valid device fingerprint found.<br><br>Please restart installation process.");return;}
    const next8=fp.slice(3,11); const expected=`TRV-KE-${next8}-5634`;
    if(entered===expected){
        let meta=await getData("meta","config")||{};
        await saveData("meta",{...meta,id:"config",activated:true,fingerprint:fp,activatedAt:Date.now()});
        document.getElementById('activation-overlay').classList.add('hidden'); location.reload();
    } else {
        showCustomAlert("Invalid activation code."); document.getElementById('act-code').value=''; document.getElementById('act-code').focus();
    }
}

let db;
let backupDirHandle=null;
let state={user:null,transactions:[],obligations:[]};
const BACKUP_FILE="travis-finance-backup.enc";

async function deriveKey(password,salt){const enc=new TextEncoder();const km=await crypto.subtle.importKey("raw",enc.encode(password),"PBKDF2",false,["deriveBits","deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt,iterations:600000,hash:"SHA-256"},km,{name:"AES-GCM",length:256},false,["encrypt","decrypt"]);}
async function encryptData(data,password){const enc=new TextEncoder();const js=JSON.stringify(data);const iv=crypto.getRandomValues(new Uint8Array(12));const salt=crypto.getRandomValues(new Uint8Array(16));const key=await deriveKey(password,salt);const encrypted=await crypto.subtle.encrypt({name:"AES-GCM",iv},key,enc.encode(js));const result=new Uint8Array(salt.length+iv.length+encrypted.byteLength);result.set(salt,0);result.set(iv,salt.length);result.set(new Uint8Array(encrypted),salt.length+iv.length);return result;}
async function decryptData(encryptedBytes,password){const salt=encryptedBytes.slice(0,16);const iv=encryptedBytes.slice(16,28);const ciphertext=encryptedBytes.slice(28);const key=await deriveKey(password,salt);const decrypted=await crypto.subtle.decrypt({name:"AES-GCM",iv},key,ciphertext);return JSON.parse(new TextDecoder().decode(decrypted));}

async function getData(storeName,id){if(!db)return null;try{const tx=db.transaction(storeName,"readonly");const store=tx.objectStore(storeName);return new Promise(res=>{const r=store.get(id);r.onsuccess=()=>res(r.result);r.onerror=()=>res(null);});}catch(e){return null;}}
async function getAllData(storeName){if(!db)return[];try{const tx=db.transaction(storeName,"readonly");const store=tx.objectStore(storeName);return new Promise(res=>{const r=store.getAll();r.onsuccess=()=>res(r.result);r.onerror=()=>res([]);});}catch(e){return[];}}
async function saveData(s,d){const t=db.transaction(s,"readwrite");t.objectStore(s).put(d);return new Promise(res=>t.oncomplete=res);}

async function backupUIAssets(){if(!backupDirHandle)return;const criticalFiles=[{name:"index.html"}];for(const file of criticalFiles){try{const response=await fetch(file.name);if(!response.ok)continue;const blob=await response.blob();const fileHandle=await backupDirHandle.getFileHandle(file.name,{create:true});const writable=await fileHandle.createWritable();await writable.write(blob);await writable.close();}catch(e){}}}
async function rebuildUIFromDevice(){if(!backupDirHandle)return false;try{const uiFiles=["index.html"];const cache=await caches.open("travis-ui-cache-v1");for(const filename of uiFiles){const fileHandle=await backupDirHandle.getFileHandle(filename);const file=await fileHandle.getFile();const buffer=await file.arrayBuffer();await cache.put(`/${filename}`,new Response(buffer,{headers:{"Content-Type":filename.endsWith(".css")?"text/css":filename.endsWith(".js")?"text/javascript":"text/html"}}));}return true;}catch(e){return false;}}
async function saveBackup(){if(!backupDirHandle||!db)return;try{const backupData={};for(const storeName of["meta","tx"]){const t=db.transaction(storeName,"readonly");const store=t.objectStore(storeName);backupData[storeName]=await new Promise(res=>{const r=store.getAll();r.onsuccess=()=>res(r.result);r.onerror=()=>res([]);});}const PASSWORD="Travisguardian";const encryptedBytes=await encryptData(backupData,PASSWORD);const fileHandle=await backupDirHandle.getFileHandle(BACKUP_FILE,{create:true});const writable=await fileHandle.createWritable();await writable.write(encryptedBytes);await writable.close();}catch(e){}}
async function readBackupContent(){try{if(!window.tempBackupFileHandle)return{data:null,error:"No file handle"};const file=await window.tempBackupFileHandle.getFile();const arrayBuffer=await file.arrayBuffer();const encryptedBytes=new Uint8Array(arrayBuffer);const password=prompt("Enter the backup password to decrypt your data:");if(!password)return{data:null,error:"Password required"};const data=await decryptData(encryptedBytes,password);return{data,error:null};}catch(e){return{data:null,error:e.name==="OperationError"?"Wrong password or corrupted file":"Failed to read/decrypt backup file"};}}
async function restoreFromBackup(){const{data:backup,error:readError}=await readBackupContent();if(readError)return{success:false,error:`Could not read the backup file: ${readError}`};if(!backup)return{success:false,error:"Backup file was empty or invalid"};try{for(const storeName of["meta","tx"]){if(!backup[storeName]||!Array.isArray(backup[storeName]))continue;const tx=db.transaction(storeName,"readwrite");const store=tx.objectStore(storeName);await new Promise((res,rej)=>{const clearReq=store.clear();clearReq.onsuccess=res;clearReq.onerror=()=>rej(clearReq.error);});for(const item of backup[storeName]){await new Promise((res,rej)=>{const putReq=store.put(item);putReq.onsuccess=res;putReq.onerror=()=>rej(putReq.error);});}await new Promise(res=>{tx.oncomplete=res;});}let fp=null;const config=await getData("meta","config");if(config?.fingerprint){fp=config.fingerprint;}else if(backup.meta){const cfgItem=backup.meta.find(item=>item&&item.id==="config");fp=cfgItem?.fingerprint||null;}if(fp)localStorage.setItem("fp",fp);return{success:true,error:null};}catch(e){return{success:false,error:`Failed to write data to database: ${e.message||String(e)}`};}}
async function setupBackupFolder(){if('showDirectoryPicker' in window){try{backupDirHandle=await window.showDirectoryPicker({mode:"readwrite",startIn:"documents"});const tx=db.transaction("meta","readwrite");await tx.objectStore("meta").put({id:"backupHandle",value:backupDirHandle});await tx.done;await backupUIAssets();return true;}catch(err){return false;}}return false;}
async function manualRestoreFlow(){try{let fileHandle;if('showOpenFilePicker' in window){const[handle]=await window.showOpenFilePicker({types:[{description:"Travis Finance Backup",accept:{"application/octet-stream":[".enc"]}}],multiple:false});fileHandle=handle;}else{alert("Your browser does not support file selection.");return{success:false,error:"File picker not supported"};}window.tempBackupFileHandle=fileHandle;const result=await restoreFromBackup();delete window.tempBackupFileHandle;if(result.success){await rebuildUIFromDevice();await backupUIAssets();return{success:true};}return{success:false,error:"Restore failed"};}catch(err){return{success:false,error:"User cancelled or error occurred"};}}

async function runRecoveryOnStart(){const overlay=document.getElementById("recovery-overlay");if(!overlay)return;overlay.style.display='none';
try{const result=await getData("meta","backupHandle");if(result?.value)backupDirHandle=result.value;}catch(e){}
const hasConfig=!!(await getData("meta","config")); const hasFp=!!localStorage.getItem("fp");
if(hasConfig&&hasFp)return;
if(backupDirHandle)await rebuildUIFromDevice();
overlay.style.display='flex';
overlay.innerHTML=`<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);backdrop-filter:blur(12px);display:flex;align-items:center;justify-content:center;z-index:9999;font-family:inherit;"><div style="background:white;border-radius:16px;max-width:460px;width:92%;box-shadow:0 25px 70px rgba(0,0,0,0.3);overflow:hidden;"><div style="background:linear-gradient(135deg,#0078D4,#005A9E);color:white;padding:24px;text-align:center;"><h2 style="margin:0 0 6px;font-size:1.3rem;">🔒 Travis Guardian</h2><p style="margin:0;opacity:0.85;font-size:13px;">Your Personal Financial Advisor</p></div><div style="padding:28px;text-align:center;"><div style="width:60px;height:60px;background:#f0f7ff;color:#0078D4;font-size:28px;border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;">📁</div><h3 style="margin:0 0 12px;font-size:1.1rem;color:#1a1a1a;">Restore Your Data?</h3><p style="color:#5a5a5a;line-height:1.6;margin-bottom:24px;font-size:13px;">Browser data was cleared.<br>Select your backup file to restore financial records.</p><div style="display:flex;flex-direction:column;gap:10px;"><button id="restore-btn" style="background:#0078D4;color:white;border:none;padding:13px;font-size:13px;font-weight:600;border-radius:8px;cursor:pointer;">📂 Select Backup File & Restore</button><button id="skip-btn" style="background:transparent;color:#5a5a5a;border:1px solid #ddd;padding:12px;font-size:13px;border-radius:8px;cursor:pointer;">Continue as New User</button></div><p style="margin:12px 0 0;font-size:11px;color:#8a8a8a;">First-time users: choose "Continue as New User"</p></div></div></div>`;
document.getElementById("restore-btn").onclick=async()=>{const btn=document.getElementById("restore-btn");btn.disabled=true;btn.textContent="Restoring…";const result=await manualRestoreFlow();if(result.success){overlay.innerHTML=`<div style="padding:40px;text-align:center;background:white;border-radius:16px;max-width:360px;"><p style="color:green;font-size:16px;"> Everything restored! Reloading…</p></div>`;setTimeout(()=>location.reload(),1200);}else{overlay.innerHTML=`<div style="padding:28px;text-align:center;color:red;background:white;border-radius:16px;"><p>${result.error||"Restore failed"}</p><button onclick="location.reload()" style="margin-top:12px;padding:10px 20px;border-radius:8px;border:none;background:#0078D4;color:white;cursor:pointer;">Try Again</button></div>`;}};
document.getElementById("skip-btn").onclick=()=>overlay.style.display='none';}

async function startFingerprintBackgroundProbe(){const tryRestoreFP=async()=>{if(localStorage.getItem("fp"))return true;const config=await getData("meta","config");if(config?.fingerprint){localStorage.setItem("fp",config.fingerprint);return true;}return false;};setTimeout(()=>tryRestoreFP(),80);let attempts=0;const interval=setInterval(async()=>{attempts++;if(await tryRestoreFP()||attempts>12)clearInterval(interval);},5000);}

async function initDB(){return new Promise(resolve=>{const req=indexedDB.open("TravisGuardian_v1.0",1);req.onupgradeneeded=e=>{const d=e.target.result;if(!d.objectStoreNames.contains("meta"))d.createObjectStore("meta",{keyPath:"id"});if(!d.objectStoreNames.contains("tx"))d.createObjectStore("tx",{keyPath:"id"});};req.onsuccess=async e=>{db=e.target.result;startFingerprintBackgroundProbe();await runRecoveryOnStart();resolve();};req.onerror=()=>resolve();});}


let travisMemory = {
    conversationCount: 0,
    lastQuestion: "",
    lastPurpose: "",
    lastVerdict: "",
    chatContext: { pendingClarification: null, lastTopic: null, providedData: {} }
};

function isObligation(spendDesc) {
    if (!state.obligations || state.obligations.length === 0) return false;
    return state.obligations.some(o => spendDesc.toLowerCase().includes(o.label.toLowerCase()));
}

function getStatusSummary() {
    const fin = getFin();
    const wealthTier = getUserWealthTier(fin.daily, fin.safeCash);
    
    let displayTier = wealthTier;
    if (fin.safeCash < 0) {
        displayTier = {
            ...wealthTier,
            displayName: "IN DEBT",
            color: "#C42B1C",
            adviceStyle: "survival",
            humanDescription: `You are in debt by ${Math.abs(fin.safeCash).toLocaleString()} shillings.`
        };
    }
    
    return {
        cash: Math.round(fin.safeCash),
        dailyCap: Math.floor(fin.daily),
        daysRem: fin.daysRem,
        wealthTier: displayTier,
        humanStatus: fin.safeCash < 0 
            ? `EMERGENCY: You are in debt by ${Math.abs(fin.safeCash).toLocaleString()} shillings. You cannot spend any money until you earn enough to clear this debt.`
            : humanReadableStatus(fin.safeCash, fin.daily, fin.daysRem, wealthTier)
    };
}

function updateLiveHud() {
    const amount = parseFloat(document.getElementById('tx-amount').value) || 0;
    const credit = document.getElementById('tx-credit').value;
    const fin = getFin();
    const projectedSafe = isLiquid(credit) ? fin.safeCash - amount : fin.safeCash;
    const newCap = projectedSafe / fin.daysRem;
    document.getElementById('hud-cap').innerText = `KSh ${newCap.toFixed(0)}`;
    document.getElementById('hud-cover').innerText = `KSh ${fin.pending.toLocaleString()} Reserved`;
    const warn = document.getElementById('hud-warning');
    if (isLiquid(credit) && amount > fin.daily) { warn.style.display = 'block'; } else { warn.style.display = 'none'; }
}

function getFin() {
    const now = new Date();
    const daysRem = Math.max(1, new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate() - now.getDate());
    let liquid = 0;
    const liquidAssets = ["Cash", "M-Pesa", "Bank Account", "Savings", "Bank / M-Pesa", "Petty Cash", "Accounts Receivable"];
    liquidAssets.forEach(acc => { liquid += getBalance(acc); });
    const obsStatus = state.obligations.map(o => {
        let paid = 0;
        state.transactions.forEach(t => {
            const tDate = new Date(t.id);
            if (tDate.getMonth() === now.getMonth() && (t.desc.toLowerCase().includes(o.label.toLowerCase()) || t.credit === o.label)) {
                paid += t.amount;
            }
        });
        return { ...o, paid, pending: Math.max(0, o.amount - paid), variance: paid - o.amount };
    });
    const pending = obsStatus.reduce((a, b) => a + b.pending, 0);
    const safeCash = liquid - pending;
    return { liquid, pending, safeCash, daysRem, obsStatus, daily: safeCash / daysRem };
}

function isLiquid(acc) {
    if (!acc) return false;
    const liquidAssetNames = ["Cash", "M-Pesa", "Bank Account", "Savings", "Bank / M-Pesa", "Petty Cash", "Accounts Receivable"];
    return liquidAssetNames.includes(acc);
}

function getBalance(acc) {
    let balance = 0;
    state.transactions.forEach(t => {
        if (t.debit === acc) balance += t.amount;
        if (t.credit === acc) balance -= t.amount;
    });
    const assetTypes = ["Cash", "M-Pesa", "Bank Account", "Savings", "Bank / M-Pesa", "Petty Cash", "Accounts Receivable", "Inventory", "Fixed Assets"];
    return assetTypes.includes(acc) ? balance : -balance;
}

function navClick(view) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const el = document.getElementById('nav-' + view);
    if (el) el.classList.add('active');
    document.querySelectorAll('.taskbar-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('nav-sidebar').classList.remove('mobile-open');
    nav(view);
}

function nav(view) {
    const port = document.getElementById('view-port');
    const fin = getFin();
    updateHeader(fin);

    if (view === 'dash') {
        const wealthTier = getUserWealthTier(fin.daily, fin.safeCash);
        const leaks = fin.obsStatus.filter(o => o.variance > 0);
        
        port.innerHTML = `
        <div style="display:grid;grid-template-columns:300px 1fr;gap:16px;align-items:start;">
            <div style="display:flex;flex-direction:column;gap:12px;">
                <div class="win-card">
                    <div class="win-card-header">
                        <div class="win-card-title">Your Financial Health</div>
                        <span class="chip" style="background:${wealthTier.color}20;color:${wealthTier.color};">${wealthTier.displayName}</span>
                    </div>
                    <div class="win-card-body">
                        <div style="font-size:13px;margin-bottom:12px;">${wealthTier.humanDescription}</div>
                        <div style="font-size:11px;color:var(--win-text-3);">${wealthTier.priority}</div>
                    </div>
                </div>
                <div class="win-card">
                    <div class="win-card-header">
                        <div class="win-card-title">Leak Finder</div>
                        ${leaks.length > 0 ? `<span class="chip chip-red">${leaks.length} leak${leaks.length > 1 ? 's' : ''}</span>` : '<span class="chip chip-green">Clean</span>'}
                    </div>
                    <div class="win-card-body" style="padding-top:0;">
                        ${leaks.length > 0 ? leaks.map(l => `
                            <div class="leak-item">
                                <div>
                                    <div style="font-size:13px;font-weight:500;">${l.label}</div>
                                    <div style="font-size:11px;color:var(--win-text-3);">Budget: KSh ${l.amount.toLocaleString()}</div>
                                </div>
                                <div style="text-align:right;">
                                    <div style="color:var(--win-red);font-size:13px;font-weight:700;">+KSh ${l.variance.toLocaleString()}</div>
                                    <div style="font-size:10px;color:var(--win-red);">Over budget</div>
                                </div>
                            </div>`).join('') : `<div style="padding:8px 0;text-align:center;color:var(--win-text-3);font-size:13px;">No budget variances detected. Good job!</div>`}
                    </div>
                </div>
                <div class="win-card">
                    <div class="win-card-header"><div class="win-card-title">What This Means For You</div></div>
                    <div class="win-card-body">
                        <div style="font-size:14px;font-weight:500;margin-bottom:8px;">${wealthTier.displayName}</div>
                        <div style="font-size:13px;line-height:1.6;">${humanReadableStatus(fin.safeCash, fin.daily, fin.daysRem, wealthTier)}</div>
                    </div>
                </div>
            </div>
            <div class="win-card" style="min-height:340px;">
                <div class="win-card-header">
                    <div class="win-card-title">Your Spending Trend</div>
                    <div style="font-size:11px;color:var(--win-text-3);">Last 7 days</div>
                </div>
                <div class="win-card-body" style="height:300px;">
                    <canvas id="analyticsChart"></canvas>
                </div>
            </div>
        </div>`;
        if (window.innerWidth < 900) { port.querySelector('div').style.gridTemplateColumns = '1fr'; }
        setTimeout(() => renderChart(), 100);
    }

    if (view === 'obs') {
        let rows = fin.obsStatus.map(o => `
            <div class="obs-row">
                <div>
                    <div style="font-size:13px;font-weight:600;">${o.label}</div>
                    <div style="font-size:11px;color:var(--win-text-3);">Budget: KSh ${o.amount.toLocaleString()} · Spent: KSh ${o.paid.toLocaleString()}</div>
                    <div style="margin-top:6px;">
                        <div class="progress-track" style="height:4px;width:120px;">
                            <div class="progress-fill" style="width:${Math.min(100, (o.paid / o.amount) * 100)}%;background:${o.pending <= 0 ? '#107C10' : '#0078D4'};"></div>
                        </div>
                    </div>
                </div>
                <div style="text-align:right;">
                    ${o.pending <= 0 ? `<span class="chip chip-green">✓ Settled</span>` : `<div style="font-size:14px;font-weight:700;color:var(--win-yellow);">KSh ${o.pending.toLocaleString()}</div><div style="font-size:10px;color:var(--win-text-3);">remaining</div>`}
                    ${o.variance > 0 ? `<div style="font-size:10px;color:var(--win-red);font-weight:700;margin-top:2px;">+${o.variance.toLocaleString()} over</div>` : ''}
                </div>
            </div>`).join('');
        port.innerHTML = `<div class="win-card">
            <div class="win-card-header">
                <div class="win-card-title">Your Monthly Bills</div>
                <button onclick="document.getElementById('setup-overlay').classList.remove('hidden')" class="btn-secondary" style="font-size:11px;padding:5px 10px;">Edit List</button>
            </div>
            <div>${rows || '<div style="padding:24px;text-align:center;color:var(--win-text-3);">No bills configured. Add rent, school fees, loans, etc.</div>'}</div>
            <div style="padding:16px;border-top:1px solid var(--win-border);">
                <button onclick="factoryReset()" style="font-size:11px;color:var(--win-red);background:none;border:none;cursor:pointer;font-family:inherit;">Reset All Data</button>
            </div>
        </div>`;
    }

    if (view === 'ask') {
        port.innerHTML = `<div class="win-card" style="height:520px;display:flex;flex-direction:column;">
            <div class="win-card-header" style="flex-shrink:0;">
                <div style="display:flex;align-items:center;gap:10px;">
                    <div style="width:32px;height:32px;background:linear-gradient(135deg,#0078D4,#005A9E);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;">🤖</div>
                    <div>
                        <div class="win-card-title">Travis - Your Financial Advisor</div>
                        <div class="win-card-sub">Powered by KNBS Kenya Data</div>
                    </div>
                </div>
                <span class="chip chip-green" style="font-size:10px;">● Online</span>
            </div>
            <div id="chat-box" style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:var(--win-bg);">
                <div class="travis-label"><span>🤖</span> Travis</div>
                <div class="chat-bubble-ai" style="font-size:13px;">Habari. I'm Travis. I analyze your finances and give you straight talk. Ask me anything about your money.</div>
            </div>
            <div style="padding:10px 14px;border-top:1px solid var(--win-border);background:white;display:flex;gap:8px;align-items:center;">
                <input id="chat-input" type="text" placeholder="Ask me anything... e.g., 'Can I buy meat?' or 'How am I doing?'" class="win-input" style="flex:1;">
                <button onclick="handleAsk()" class="btn-accent" style="padding:9px 18px;font-size:13px;">Send ↗</button>
            </div>
        </div>`;
        document.getElementById('chat-input').addEventListener('keypress', e => { if (e.key === 'Enter') handleAsk(); });
    }

     if(view==='book'){
        let rows=state.transactions.map(t=>`
            <tr>
                <td style="font-family:monospace;font-size:11px;color:var(--win-text-3);white-space:nowrap;">${new Date(t.id).toLocaleDateString('en-KE')}</td>
                <td>
                    <div style="font-size:13px;font-weight:500;">${t.desc}</div>
                    <div style="display:flex;gap:6px;margin-top:4px;">
                        <span class="chip chip-green" style="font-size:10px;">${t.debit}</span>
                        <span style="color:var(--win-text-3);font-size:10px;">→</span>
                        <span class="chip chip-red" style="font-size:10px;">${t.credit}</span>
                    </div>
                </td>
                <td style="text-align:right;font-family:monospace;color:var(--win-green);font-weight:600;white-space:nowrap;">+${t.amount.toLocaleString()}</td>
                <td style="text-align:right;font-family:monospace;color:var(--win-red);font-weight:600;white-space:nowrap;">-${t.amount.toLocaleString()}</td>
            </tr>`).join('');

        port.innerHTML=`<div class="win-card">
            <div class="win-card-header">
                <div class="win-card-title">General Ledger</div>
                <div style="font-size:11px;color:var(--win-text-3);">${state.transactions.length} entries</div>
            </div>
            <div style="overflow-x:auto;">
                <table class="win-table" style="min-width:600px;">
                    <thead><tr><th>Date</th><th>Transaction</th><th style="text-align:right;">Debit (+)</th><th style="text-align:right;">Credit (-)</th></tr></thead>
                    <tbody>${rows||'<tr><td colspan="4" style="padding:32px;text-align:center;color:var(--win-text-3);">No transactions recorded yet.</td></tr>'}</tbody>
                </table>
            </div>
        </div>`;
    }


    if (view === 'settings') {
        const wealthTier = getUserWealthTier(fin.daily, fin.safeCash);
        port.innerHTML = `<div class="win-card">
            <div class="win-card-header"><div class="win-card-title">Settings</div></div>
            <div class="win-card-body" style="display:grid;gap:12px;">
                <div class="setup-step">
                    <div class="setup-step-title">👤 Your Profile</div>
                    <div style="font-size:13px;color:var(--win-text-2);">Name: <strong>${state.user?.name || '—'}</strong></div>
                    <div style="font-size:13px;color:var(--win-text-2);margin-top:4px;">Type: <strong style="text-transform:capitalize;">${state.user?.type || '—'}</strong></div>
                    <div style="font-size:13px;color:var(--win-text-2);margin-top:4px;">Wealth Level: <strong style="color:${wealthTier.color};">${wealthTier.displayName}</strong></div>
                </div>
                <div class="setup-step">
                    <div class="setup-step-title">🗂 Backup & Data</div>
                    <div style="display:flex;flex-wrap:wrap;gap:8px;">
                        <button onclick="setupBackupFolder()" class="btn-primary">Setup Backup Folder</button>
                        <button onclick="saveBackup()" class="btn-secondary">Save Backup Now</button>
                        <button onclick="factoryReset()" class="btn-secondary" style="color:var(--win-red);border-color:rgba(196,43,28,0.3);">Factory Reset</button>
                    </div>
                </div>
                <div class="setup-step">
                    <div class="setup-step-title">📊 Monthly Report</div>
                    <div style="font-size:13px;color:var(--win-text-2);margin-bottom:8px;">Auto-generates at month end. You can also generate manually.</div>
                    <button onclick="window.travisAudit && window.travisAudit.showNow()" class="btn-primary">Generate Report Now</button>
                </div>
            </div>
        </div>`;
    }
}

function renderChart() {
    const ctx = document.getElementById('analyticsChart')?.getContext('2d');
    if (!ctx) return;
    const fin = getFin();
    const now = new Date();
    let labels = [], spendData = [], revData = [], capData = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(now.getDate() - i);
        labels.push(d.toLocaleDateString('en-KE', { weekday: 'short' }));
        let ds = 0, dr = 0;
        state.transactions.forEach(t => {
            if (new Date(t.id).toDateString() === d.toDateString()) {
                if (isLiquid(t.credit)) ds += t.amount;
                if (isLiquid(t.debit)) dr += t.amount;
            }
        });
        spendData.push(ds);
        revData.push(dr);
        capData.push(fin.daily);
    }
    if (window.travisChart) window.travisChart.destroy();
    window.travisChart = new Chart(ctx, {
        type: 'line', data: { labels, datasets: [
            { label: 'Your Daily Limit', data: capData, borderColor: '#0078D4', borderDash: [6, 3], pointRadius: 0, fill: false, borderWidth: 2 },
            { label: 'What You Spent', data: spendData, borderColor: '#C42B1C', backgroundColor: 'rgba(196,43,28,0.08)', fill: true, tension: 0.4, borderWidth: 2, pointBackgroundColor: '#C42B1C', pointRadius: 3 },
            { label: 'What You Earned', data: revData, borderColor: '#107C10', backgroundColor: 'rgba(16,124,16,0.08)', fill: true, tension: 0.4, borderWidth: 2, pointBackgroundColor: '#107C10', pointRadius: 3 }
        ] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#5a5a5a', font: { size: 11, family: 'Segoe UI' }, boxWidth: 20 } } }, scales: { x: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { color: '#8a8a8a', font: { size: 10 } } }, y: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { color: '#8a8a8a', font: { size: 10 } }, beginAtZero: true } } }
    });
}

function updateHeader(fin) {
    const grid = document.getElementById('dashboard-grid');
    const wealthTier = getUserWealthTier(fin.daily, fin.safeCash);
    const metrics = [
        { label: 'Total Money You Have', value: 'KSh ' + fin.liquid.toLocaleString(), color: '#0078D4', icon: '💰' },
        { label: 'Bills You Must Pay', value: 'KSh ' + fin.pending.toLocaleString(), color: '#C42B1C', icon: '📋' },
        { label: 'Days Until Month End', value: fin.daysRem + ' days', color: '#107C10', icon: '📅' },
        { label: 'Your Daily Budget', value: 'KSh ' + Math.max(0, fin.daily).toFixed(0), color: wealthTier.color, icon: '📊' },
    ];
    grid.style.gridTemplateColumns = 'repeat(4,1fr)';
    if (window.innerWidth < 600) { grid.style.gridTemplateColumns = 'repeat(2,1fr)'; }
    if (window.innerWidth < 400) { grid.style.gridTemplateColumns = '1fr'; }
    grid.innerHTML = metrics.map(m => `<div class="metric-card"><div class="metric-accent" style="background:${m.color};"></div><div class="metric-label">${m.icon} ${m.label}</div><div class="metric-value">${m.value}</div></div>`).join('');
    const badge = document.getElementById('header-verdict-badge');
    if (fin.safeCash < 0) { badge.className = 'chip chip-red'; badge.textContent = '⚠ You are in debt'; }
    else if (fin.daily < 100) { badge.className = 'chip chip-red'; badge.textContent = 'Emergency'; }
    else if (fin.daily < 300) { badge.className = 'chip chip-red'; badge.textContent = '⚠ Very Tight'; }
    else if (fin.daily < 800) { badge.className = 'chip chip-yellow'; badge.textContent = 'Leveling'; }
    else { badge.className = 'chip chip-green'; badge.textContent = 'Stable'; }
}

function showTxModal() {
    const d = document.getElementById('tx-debit'); const c = document.getElementById('tx-credit');
    d.innerHTML = c.innerHTML = "";
    const isPersonal = state.user.type === 'personal';
    const createColoredOptgroup = (label, color, accounts) => { const og = document.createElement('optgroup'); og.label = '● ' + label; og.style.color = color; accounts.forEach(acc => { og.appendChild(new Option(acc, acc)); }); return og; };
    if (isPersonal) {
        const ps = (select) => { select.appendChild(createColoredOptgroup("ASSETS", "#107C10", ["Cash", "M-Pesa", "Bank Account", "Savings"])); select.appendChild(createColoredOptgroup("INCOME", "#107C10", ["Salary", "Side Hustle", "Allowance", "Dividends", "Other Income"])); select.appendChild(createColoredOptgroup("NECESSARY EXPENSES", "#9D5D00", ["Food & Groceries", "Rent", "Bills", "Transport", "Medical", "School"])); select.appendChild(createColoredOptgroup("DISCRETIONARY", "#C42B1C", ["Entertainment", "Clothes", "Travel", "Other Fun Spending"])); select.appendChild(createColoredOptgroup("LIABILITIES", "#0078D4", ["Loan Repayment", "Credit"])); };
        ps(d); ps(c);
    } else {
        const bs = (select) => { select.appendChild(createColoredOptgroup("ASSETS", "#107C10", ["Bank / M-Pesa", "Petty Cash", "Accounts Receivable", "Inventory", "Fixed Assets"])); select.appendChild(createColoredOptgroup("REVENUE", "#107C10", ["Sales Revenue", "Service Revenue", "Other Revenue"])); select.appendChild(createColoredOptgroup("OPERATING EXPENSES", "#9D5D00", ["Rent", "Payroll", "Utilities", "Cost of Goods Sold", "Tax", "Office Supplies"])); select.appendChild(createColoredOptgroup("DISCRETIONARY EXPENSES", "#C42B1C", ["Marketing", "Travel & Entertainment", "Professional Fees"])); select.appendChild(createColoredOptgroup("LIABILITIES", "#0078D4", ["Accounts Payable", "Loans Payable"])); };
        bs(d); bs(c);
    }
    document.getElementById('tx-modal').classList.add('show');
    updateLiveHud();
}

async function commitTransaction() {
    const amt = parseFloat(document.getElementById('tx-amount').value);
    const debitAcc = document.getElementById('tx-debit').value;
    const creditAcc = document.getElementById('tx-credit').value;
    const description = document.getElementById('tx-desc').value || "Market Exchange";
    if (debitAcc === creditAcc || isNaN(amt) || amt <= 0) { return showCustomAlert("Error: Transaction must move money between two different accounts."); }
    const tx = { id: Date.now(), debit: debitAcc, credit: creditAcc, amount: amt, desc: description };
    state.transactions.unshift(tx); await saveData("tx", tx);
    if (typeof travisNotif !== 'undefined') travisNotif.markTodayRecorded();
    if (typeof saveBackup === "function") { await saveBackup(); if (!backupDirHandle) await setupBackupFolder(); }
    closeTxModal(); nav('dash');
}

function closeTxModal() { document.getElementById('tx-modal').classList.remove('show'); document.getElementById('tx-amount').value = ""; }

function addObligationRow(label = "", val = "") {
    const div = document.createElement('div');
    div.style.cssText = 'display:flex;gap:8px;align-items:center;';
    div.innerHTML = `<input type="text" placeholder="e.g. Rent" value="${label}" class="win-input" style="flex:1;"><input type="number" placeholder="Amount" value="${val}" class="win-input" style="width:110px;"><button onclick="this.parentElement.remove()" style="width:28px;height:28px;border-radius:50%;border:1px solid rgba(196,43,28,0.3);background:rgba(196,43,28,0.05);color:var(--win-red);cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;">×</button>`;
    document.getElementById('obligation-list').appendChild(div);
}

function setUserType(t) {
    state.tempType = t;
    document.getElementById('btn-p').className = 'seg-btn' + (t === 'personal' ? ' active' : '');
    document.getElementById('btn-b').className = 'seg-btn' + (t === 'business' ? ' active' : '');
}

async function finalizeSetup() {
    const name = document.getElementById('user-name').value;
    const obs = Array.from(document.querySelectorAll('#obligation-list > div')).map(row => ({ label: row.querySelectorAll('input')[0].value, amount: parseFloat(row.querySelectorAll('input')[1].value) || 0 })).filter(o => o.label);
    if (!name || !state.tempType) return showCustomAlert("Please enter your name and select profile type.");
    state.user = { name, type: state.tempType }; state.obligations = obs;
    await saveData("meta", { id: "config", user: state.user, obligations: state.obligations });
    if (typeof saveBackup === "function") await saveBackup();
    location.reload();
}

async function factoryReset() { if (confirm("WARNING: This will delete ALL your financial data. Cannot undo. Continue?")) { indexedDB.deleteDatabase("TravisGuardian_v1.0"); location.reload(); } }

function showHelpModal() { const m = document.getElementById('help-modal'); m.style.display = 'flex'; }
function closeHelpModal() { const m = document.getElementById('help-modal'); m.style.display = 'none'; }


async function handleAsk() {
    const input = document.getElementById('chat-input');
    const box = document.getElementById('chat-box');
    const rawQ = input.value.trim();
    if (!rawQ) return;

    box.innerHTML += `<div style="text-align:right;"><div class="chat-bubble-user">${escapeHtml(rawQ)}</div></div>`;
    input.value = '';
    box.scrollTop = box.scrollHeight;

    const thinkingBubble = document.createElement('div');
    thinkingBubble.innerHTML = `<div class="travis-label"><span>🤖</span> Travis</div><div class="chat-bubble-ai" id="thinking-bubble"><div class="travis-ripple"><div class="ripple-ball ball-r"></div><div class="ripple-ball ball-g"></div><div class="ripple-ball ball-b"></div></div></div>`;
    box.appendChild(thinkingBubble);
    box.scrollTop = box.scrollHeight;

    await new Promise(r => setTimeout(r, 600 + Math.random() * 500));
    thinkingBubble.remove();
    
    if (hasPendingClarification()) {
        const pending = conversationState.pendingClarification;
        const amountMatch = rawQ.match(/(\d+(?:,\d+)?(?:\s*k|\s*thousand|\s*million)?)/i);
        let amount = 0;
        if (amountMatch) {
            let rawAmount = amountMatch[1].replace(/,/g, '');
            if (rawAmount.toLowerCase().includes('k')) rawAmount = parseFloat(rawAmount) * 1000;
            else if (rawAmount.toLowerCase().includes('million')) rawAmount = parseFloat(rawAmount) * 1000000;
            amount = parseFloat(rawAmount);
        }
        
        if (!isNaN(amount) && amount > 0) {
            const fin = getFin();
            const status = getStatusSummary();
            const wealthTier = status.wealthTier;
            const buffer = status.cash;
            const dailyCap = status.dailyCap;
            const daysLeft = status.daysRem;
            
            let adviceText = '';
            let verdictText = '';
            
            if (pending.originalIntent === 'spend') {
                if (wealthTier.adviceStyle === 'survival') {
                    if (amount > buffer) {
                        adviceText = `You asked about spending ${amount} shillings on ${pending.originalQuestion}. But you only have ${buffer} shillings TOTAL for the next ${daysLeft} days. You cannot afford this.`;
                        verdictText = `Do not buy this. Focus only on food and rent.`;
                    } else if (amount > dailyCap) {
                        const daysToWait = Math.ceil(amount / dailyCap);
                        adviceText = `${pending.originalQuestion} costs ${amount} shillings. You only have ${Math.floor(dailyCap)} shillings per day.`;
                        verdictText = `Save for ${daysToWait} day${daysToWait > 1 ? 's' : ''} first. Don't buy today.`;
                    } else {
                        const remaining = buffer - amount;
                        const newDaily = remaining / daysLeft;
                        adviceText = ` ${pending.originalQuestion} costs ${amount} shillings. After buying, you'll have ${remaining} shillings left for ${daysLeft} days.`;
                        verdictText = `That's about ${Math.floor(newDaily)} shillings per day. You can buy it, but be careful with the rest of the week.`;
                    }
                } else if (wealthTier.adviceStyle === 'conservative') {
                    const percentOfBuffer = Math.round((amount / buffer) * 100);
                    if (percentOfBuffer > 30) {
                        adviceText = `⚠️ ${pending.originalQuestion} costs ${amount} shillings, which is ${percentOfBuffer}% of your savings.`;
                        verdictText = `That's a big chunk. Can you wait a few days or find a cheaper option?`;
                    } else {
                        adviceText = ` ${pending.originalQuestion} costs ${amount} shillings. That's reasonable for your situation.`;
                        verdictText = `Go ahead but track it. Every shilling counts.`;
                    }
                } else {
                    adviceText = `💎 ${pending.originalQuestion} costs ${amount} shillings. At your wealth level, affordability isn't the question.`;
                    verdictText = `Does this purchase align with your goals and bring you value? If yes, enjoy.`;
                }
            } else if (pending.originalIntent === 'loan') {
                if (wealthTier.adviceStyle === 'survival') {
                    adviceText = ` You asked about a ${amount} shilling loan. With your current situation, any loan is dangerous.`;
                    verdictText = `Do not borrow. Focus on increasing your income first.`;
                } else {
                    const monthlyRepayment = Math.round(amount * 0.15);
                    adviceText = ` A ${amount} shilling loan would cost about ${monthlyRepayment} shillings per month in interest.`;
                    verdictText = `Only borrow if this money will earn you more than ${monthlyRepayment} shillings per month.`;
                }
            }
            
            const finalResponse = `${adviceText}<br><br><strong>My advice:</strong> ${verdictText}`;
            const html = buildSimpleResponse(finalResponse, wealthTier, dailyCap, buffer, daysLeft);
            box.innerHTML += `<div><div class="travis-label"><span>🤖</span> Travis</div><div class="chat-bubble-ai">${html}</div></div>`;
            box.scrollTop = box.scrollHeight;
            clearPendingClarification();
            return;
        } else {
            const response = `I need the amount to give you accurate advice. How many shillings are we talking about?`;
            const html = buildSimpleResponse(response, getStatusSummary().wealthTier, 0, 0, 0);
            box.innerHTML += `<div><div class="travis-label"><span>🤖</span> Travis</div><div class="chat-bubble-ai">${html}</div></div>`;
            box.scrollTop = box.scrollHeight;
            return;
        }
    }
    
    const q = rawQ.toLowerCase().trim();
    const fin = getFin();
    const status = getStatusSummary();
    const isBiz = state.user?.type === 'business';
    const wealthTier = status.wealthTier;
    const buffer = status.cash;
    const dailyCap = status.dailyCap;
    const daysLeft = status.daysRem;
    
    let amount = 0;
    const cleaned = q.replace(/,/g, '');
    const numMatch = cleaned.match(/(\d+(?:\.\d+)?)\s*(k|thousand|ksh|shillings|bob|million)?/i);
    if (numMatch) {
        amount = parseFloat(numMatch[1]);
        if (numMatch[2] && /k|thousand/i.test(numMatch[2])) amount *= 1000;
        if (numMatch[2] && /million/i.test(numMatch[2])) amount *= 1000000;
    }
    
    const has = (...words) => words.some(w => q.includes(w));
    const intent = {
        spend: has('buy', 'spend', 'rent','afford', 'get', 'purchase', 'meat', 'unga', 'eggs', 'sugar', 'rice', 'bread', 'milk', 'soap', 'chocolate', 'soda', 'beer', 'champagne'),
        loan: has('loan', 'borrow', 'zenka', 'fuliza', 'mshwari', 'credit', 'tala', 'branch'),
        status: has('how am i', 'status', 'days time', 'situation', 'doing', 'how is', 'tell me about', 'summary', 'overview'),
        hiring: has('hire', 'employee', 'staff', 'worker', 'pay', 'salary', 'wage'),
        saving: has('save', 'saving', 'emergency', 'future', 'set aside'),
        profit: has('profit', 'make money', 'increase', 'allowance', 'gift', 'grow', 'more money'),
        habit: has('habit', 'spending habit', 'where does my money go')
    };
    
    function buildSimpleResponse(text, tier, cap, buf, days) {
        const riskColor = tier.color;
        const riskLabel = tier.displayName;
        const capDisplay = cap > 0 ? `KSh ${Math.floor(cap).toLocaleString()}` : 'calculating...';
        const bufDisplay = buf > 0 ? `KSh ${buf.toLocaleString()}` : 'KSh 0';
        const riskBar = `<div style="display:flex;flex-wrap:wrap;align-items:center;gap:6px 10px;padding:10px 12px;background:var(--color-background-secondary);border-radius:var(--border-radius-md);margin-bottom:14px;font-size:13px;">
            <div style="display:flex;align-items:center;gap:5px;"><span style="color:var(--color-text-secondary);">Status</span><span style="font-weight:500;color:${riskColor};">${riskLabel}</span></div>
            <span style="color:var(--color-border-secondary);">·</span>
            <div style="display:flex;align-items:center;gap:5px;"><span style="color:var(--color-text-secondary);">Daily</span><span style="font-weight:500;">${capDisplay}</span></div>
            <span style="color:var(--color-border-secondary);">·</span>
            <div style="display:flex;align-items:center;gap:5px;"><span style="color:var(--color-text-secondary);">Savings</span><span style="font-weight:500;">${bufDisplay}</span></div>
            ${days > 0 ? `<span style="color:var(--color-border-secondary);">·</span><div style="display:flex;align-items:center;gap:5px;"><span style="color:var(--color-text-secondary);">Days left</span><span style="font-weight:500;">${days}</span></div>` : ''}
        </div>`;
        const conclusionBlock = `<div style="margin-top:16px;padding:12px 14px;border-left:3px solid ${riskColor};background:var(--color-background-secondary);border-radius:0 var(--border-radius-md) var(--border-radius-md) 0;"><div style="font-size:11px;font-weight:500;color:var(--color-text-secondary);text-transform:uppercase;margin-bottom:4px;">Travis Says</div><div style="font-size:15px;line-height:1.6;">${text}</div></div>`;
        return `${riskBar}${conclusionBlock}`;
    }
    
    let responseText = '';
    
    if (intent.status) {
        responseText = humanReadableStatus(buffer, dailyCap, daysLeft, wealthTier);
        if (wealthTier.adviceStyle === 'survival') {
            responseText += `<br><br><strong>What you should do:</strong> ${wealthTier.priority}`;
        } else if (wealthTier.adviceStyle === 'conservative') {
            responseText += `<br><br><strong>Next step:</strong> Look at your biggest expense this week. Can you reduce it by 10%?`;
        } else {
            responseText += `<br><br><strong>Suggestion:</strong> Consider saving ${Math.floor(buffer * 0.1).toLocaleString()} shillings this month for emergencies.`;
        }
        const html = buildSimpleResponse(responseText, wealthTier, dailyCap, buffer, daysLeft);
        box.innerHTML += `<div><div class="travis-label"><span>🤖</span> Travis</div><div class="chat-bubble-ai">${html}</div></div>`;
        box.scrollTop = box.scrollHeight;
        return;
    }
    
if (intent.spend) {
    if (amount === 0) {
        const itemMatch = q.match(/(?:buy|get|spend on|purchase)\s+([a-z\s]+)/i);
        const item = itemMatch ? itemMatch[1].trim() : 'this item';
        setPendingClarification('spend', item, 'amount');
        responseText = `To give you straight advice, I need to know: How many shillings does ${item} cost in your area?`;
        const html = buildSimpleResponse(responseText, wealthTier, dailyCap, buffer, daysLeft);
        box.innerHTML += `<div><div class="travis-label"><span>🤖</span> Travis</div><div class="chat-bubble-ai">${html}</div></div>`;
        box.scrollTop = box.scrollHeight;
        return;
    }
    
    if (buffer < 0) {
        responseText = `You are already in debt by ${Math.abs(buffer).toLocaleString()} shillings. You cannot afford to spend ANY money right now - not even ${amount} shillings. Your only priority is to earn money to get out of debt.`;
        const html = buildSimpleResponse(responseText, wealthTier, dailyCap, buffer, daysLeft);
        box.innerHTML += `<div><div class="travis-label"><span>🤖</span> Travis</div><div class="chat-bubble-ai">${html}</div></div>`;
        box.scrollTop = box.scrollHeight;
        return;
    }
    
    if (wealthTier.adviceStyle === 'survival') {
        if (amount > buffer) {
            responseText = `You want to spend ${amount} shillings, but you only have ${buffer} shillings TOTAL for the next ${daysLeft} days. You cannot afford this.`;
        } else if (amount > dailyCap) {
            const daysToWait = Math.ceil(amount / dailyCap);
            responseText = `⚠️ This costs ${amount} shillings. You only have about ${Math.floor(dailyCap)} shillings per day. Save for ${daysToWait} day${daysToWait > 1 ? 's' : ''} first.`;
        } else {
            const remaining = buffer - amount;
            const newDaily = remaining / daysLeft;
            responseText = `You can afford this. After buying, you'll have ${remaining} shillings left for ${daysLeft} days. That's about ${Math.floor(newDaily)} shillings per day. Be careful.`;
        }
    } else if (wealthTier.adviceStyle === 'conservative') {
        const percentOfBuffer = Math.round((amount / buffer) * 100);
        if (percentOfBuffer > 30) {
            responseText = `⚠️ This costs ${amount} shillings, which is ${percentOfBuffer}% of your savings. That's significant. Can you wait a few days?`;
        } else {
            responseText = ` ${amount} shillings is reasonable for your situation. Go ahead but track it.`;
        }
    } else if (wealthTier.adviceStyle === 'balanced') {
        const percentOfBuffer = Math.round((amount / buffer) * 100);
        if (percentOfBuffer > 50) {
            responseText = `This costs ${amount} shillings (${percentOfBuffer}% of your savings). Consider if this is the best use of your money right now.`;
        } else {
            responseText = `This fits your budget comfortably. Enjoy.`;
        }
    } else {
        responseText = `💎 At your wealth level, ${amount} shillings is manageable. The real question: does this purchase align with your goals and bring you value?`;
    }
    
    const html = buildSimpleResponse(responseText, wealthTier, dailyCap, buffer, daysLeft);
    box.innerHTML += `<div><div class="travis-label"><span>🤖</span> Travis</div><div class="chat-bubble-ai">${html}</div></div>`;
    box.scrollTop = box.scrollHeight;
    return;
}
    
    if (intent.loan) {
        if (amount === 0) {
            setPendingClarification('loan', 'loan', 'amount');
            responseText = `How many shillings are you thinking of borrowing?`;
            const html = buildSimpleResponse(responseText, wealthTier, dailyCap, buffer, daysLeft);
            box.innerHTML += `<div><div class="travis-label"><span>🤖</span> Travis</div><div class="chat-bubble-ai">${html}</div></div>`;
            box.scrollTop = box.scrollHeight;
            return;
        }
        
        if (wealthTier.adviceStyle === 'survival') {
            responseText = `Do not borrow ${amount} shillings. You cannot afford loan repayments right now. Focus on increasing your income first.`;
        } else if (wealthTier.adviceStyle === 'conservative') {
            const monthlyRepayment = Math.round(amount * 0.15);
            responseText = `⚠️ A ${amount} shilling loan would cost about ${monthlyRepayment} shillings per month in interest. Only borrow if absolutely necessary.`;
        } else {
            const monthlyRepayment = Math.round(amount * 0.12);
            responseText = `💎 A ${amount} shilling loan at typical rates costs ${monthlyRepayment} shillings monthly. Will this loan generate more than that in value? If yes, consider it. If not, avoid it.`;
        }
        const html = buildSimpleResponse(responseText, wealthTier, dailyCap, buffer, daysLeft);
        box.innerHTML += `<div><div class="travis-label"><span>🤖</span> Travis</div><div class="chat-bubble-ai">${html}</div></div>`;
        box.scrollTop = box.scrollHeight;
        return;
    }
    
    if (intent.hiring) {
        if (wealthTier.adviceStyle === 'survival') {
            responseText = `You cannot afford to hire anyone right now. Your priority is building your own income first. Get your daily budget above 800 shillings per day before considering staff.`;
        } else if (wealthTier.adviceStyle === 'conservative') {
            const safeWage = Math.floor(buffer * 0.25);
            responseText = ` Based on your savings, a safe monthly wage is about ${safeWage.toLocaleString()} shillings. Can you pay that consistently? If yes, consider a part-time person first.`;
        } else {
            responseText = `💎 At your wealth level, hiring decisions should be about ROI. A good hire should generate at least 3x their salary in value. What role are you considering?`;
        }
        const html = buildSimpleResponse(responseText, wealthTier, dailyCap, buffer, daysLeft);
        box.innerHTML += `<div><div class="travis-label"><span>🤖</span> Travis</div><div class="chat-bubble-ai">${html}</div></div>`;
        box.scrollTop = box.scrollHeight;
        return;
    }
    
    if (intent.saving) {
        if (wealthTier.adviceStyle === 'survival') {
            responseText = `⚠️ Right now, focus on survival. Once your daily budget is above 300 shillings per day, then start saving 5% of anything extra.`;
        } else if (wealthTier.adviceStyle === 'conservative') {
            const recommendedSave = Math.floor(buffer * 0.07);
            responseText = `Try to save ${recommendedSave.toLocaleString()} shillings this month. Start with a simple savings group or MMF. Even small amounts add up.`;
        } else {
            const recommendedSave = Math.floor(buffer * 0.15);
            responseText = `💎 At your level, aim to save ${recommendedSave.toLocaleString()} shillings monthly. Diversify: SACCO, MMF, and maybe stocks. Build a 6-month emergency fund first.`;
        }
        const html = buildSimpleResponse(responseText, wealthTier, dailyCap, buffer, daysLeft);
        box.innerHTML += `<div><div class="travis-label"><span>🤖</span> Travis</div><div class="chat-bubble-ai">${html}</div></div>`;
        box.scrollTop = box.scrollHeight;
        return;
    }
    
    if (intent.profit || intent.habit) {
        const leaks = fin.obsStatus.filter(o => o.variance > 0);
        if (leaks.length > 0) {
            const topLeak = leaks[0];
            responseText = ` I found a leak: You spent ${topLeak.variance.toLocaleString()} shillings more than your budget on ${topLeak.label}. That's money leaving without you noticing.`;
        } else {
            responseText = `Your biggest expense this month is ${fin.obsStatus.sort((a,b) => b.paid - a.paid)[0]?.label || 'something'} at ${Math.max(...fin.obsStatus.map(o => o.paid)).toLocaleString()} shillings. Can you reduce that by 10%?`;
        }
        const html = buildSimpleResponse(responseText, wealthTier, dailyCap, buffer, daysLeft);
        box.innerHTML += `<div><div class="travis-label"><span>🤖</span> Travis</div><div class="chat-bubble-ai">${html}</div></div>`;
        box.scrollTop = box.scrollHeight;
        return;
    }
    
    responseText = `I'm here to help with your money decisions. Ask me:
• "Can I buy meat for 500?"
• "How am I doing financially?"
• "Should I take a loan?"
• "How can I save more?"
Just tell me what you're thinking about spending or saving.`;
    const html = buildSimpleResponse(responseText, wealthTier, dailyCap, buffer, daysLeft);
    box.innerHTML += `<div><div class="travis-label"><span>🤖</span> Travis</div><div class="chat-bubble-ai">${html}</div></div>`;
    box.scrollTop = box.scrollHeight;
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

window.addEventListener('resize', () => {
    const grid = document.getElementById('dashboard-grid');
    if (!grid) return;
    if (window.innerWidth < 600) { grid.style.gridTemplateColumns = 'repeat(2,1fr)'; }
    else if (window.innerWidth < 900) { grid.style.gridTemplateColumns = 'repeat(2,1fr)'; }
    else { grid.style.gridTemplateColumns = 'repeat(4,1fr)'; }
});

async function boot() {
    await initDB();
    let meta = await getData("meta", "config") || { activated: false };
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
    await new Promise(r => setTimeout(r, 400));
    if (!meta.activated) {
        if (isStandalone) { document.getElementById('activation-overlay').classList.remove('hidden'); document.getElementById('install-overlay').style.display = 'none'; }
        else { document.getElementById('install-overlay').style.display = 'flex'; }
        return;
    }
    if (!meta.user) { document.getElementById('setup-overlay').classList.remove('hidden'); document.getElementById('install-overlay').style.display = 'none'; return; }
    state.user = meta.user; state.obligations = meta.obligations || [];
    state.transactions = (await getAllData("tx")).sort((a, b) => b.id - a.id);
    document.getElementById('display-name').innerText = state.user.name;
    document.getElementById('display-mode').innerText = state.user.type.toUpperCase() + ' ADVISOR';
    document.getElementById('sidebar-name').innerText = state.user.name;
    document.getElementById('sidebar-type').innerText = state.user.type.charAt(0).toUpperCase() + state.user.type.slice(1);
    document.getElementById('sidebar-avatar').innerText = state.user.name.charAt(0).toUpperCase();
    document.getElementById('install-overlay').style.display = 'none';
    nav('dash');
    if (typeof travisNotif !== 'undefined') travisNotif.init();
}

document.getElementById('install-btn')?.addEventListener('click', triggerInstall);
window.onload = boot;
