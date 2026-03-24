/* NEXA-VAULT CORE ENGINE | VERSION 2.0 - LIVE LOGIC */

// 1. डेटा स्टोर करने का सिस्टम (Local Database)
let userBalance = parseFloat(localStorage.getItem('nexa_bal')) || 0.00;
let referralCount = parseInt(localStorage.getItem('nexa_ref')) || 0;

// 2. वॉलेट को अपडेट करने वाला फंक्शन
function updateWalletUI() {
    const balDisplay = document.querySelector('.balance-amount');
    if(balDisplay) {
        balDisplay.innerText = "₹" + userBalance.toFixed(2);
    }
    const progText = document.getElementById('prog-text');
    if(progText) {
        progText.innerText = referralCount + "/300 Referrals";
        // प्रोग्रेस बार को बढ़ाना
        const fill = document.querySelector('.p-fill');
        if(fill) fill.style.width = (referralCount / 300 * 100) + "%";
    }
}

// 3. AD-LOOP ENGINE (पैसे कमाने की मशीन)
function startAdLoop() {
    let adsWatched = 0;
    const btn = event.target;
    btn.disabled = true;
    btn.innerText = "WATCHING AD 1/5...";

    const loop = setInterval(() => {
        adsWatched++;
        btn.innerText = `WATCHING AD ${adsWatched}/5...`;
        
        if(adsWatched >= 5) {
            clearInterval(loop);
            userBalance += 1.00; // 5 एड देखने पर ₹1 मिला
            localStorage.setItem('nexa_bal', userBalance);
            updateWalletUI();
            btn.disabled = false;
            btn.innerText = "AD LOOP COMPLETE (+₹1)";
            alert("बधाई हो! आपके वॉलेट में ₹1 जोड़ दिया गया है।");
        }
    }, 5000); // हर एड 5 सेकंड का (आप इसे बढ़ा सकते हैं)
}

// 4. REFERRAL SYSTEM (₹400 लॉजिक)
function generateRefLink() {
    const uid = localStorage.getItem('nexa_uid') || "USER";
    const refLink = `https://nexa-vault.github.io/?ref=${uid}`;
    // इसे यूजर कॉपी कर पाएगा
    return refLink;
}

// 5. पेज लोड होते ही डेटा दिखाना
window.onload = () => {
    updateWalletUI();
    
    // अगर हम डैशबोर्ड पर हैं, तो वहां की चीजें सेट करें
    const ffBtn = document.querySelector('.game-item button');
    if(ffBtn && ffBtn.innerText === "ENTER") {
        ffBtn.onclick = startAdLoop; // फ्री फायर वाले बटन को एड-लूप बना दिया
    }
};

/* --- वेरिफिकेशन लॉजिक (Index Page के लिए) --- */
const startBtn = document.getElementById('enterBtn');
if(startBtn) {
    startBtn.onclick = () => {
        const uid = document.getElementById('uidInput').value;
        const nick = document.getElementById('nickInput').value;
        localStorage.setItem('nexa_uid', uid);
        localStorage.setItem('nexa_nick', nick);
        
        startBtn.innerText = "VAULT CONNECTING...";
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 2000);
    };
}
