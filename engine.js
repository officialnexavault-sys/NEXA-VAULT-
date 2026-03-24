/* NEXA-VAULT CORE LOGIC */
const termsCheck = document.getElementById('termsCheck');
const enterBtn = document.getElementById('enterBtn');
const uidInput = document.getElementById('uidInput');
const nickInput = document.getElementById('nickInput');

function validateInputs() {
    // अगर टिक लगा है और UID 8 अंक से ज्यादा है और नाम खाली नहीं है
    if(termsCheck.checked && uidInput.value.length >= 8 && nickInput.value.trim() !== "") {
        enterBtn.disabled = false;
    } else {
        enterBtn.disabled = true;
    }
}

// हर बार इनपुट बदलने पर चेक करो
termsCheck.addEventListener('change', validateInputs);
uidInput.addEventListener('input', validateInputs);
nickInput.addEventListener('input', validateInputs);

enterBtn.onclick = () => {
    enterBtn.innerText = "SYNCHRONIZING SECURE VAULT...";
    enterBtn.disabled = true;
    
    setTimeout(() => {
        // यहाँ से हम अगले 'Dashboard' पेज पर भेजेंगे जिसे हम कल बनाएंगे
        alert("Verification Success. Welcome to Nexa-Vault.");
        window.location.href = "dashboard.html"; 
    }, 2500);
};

