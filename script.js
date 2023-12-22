
function generateCaptcha() {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const captchaLength = 6;
    let captchaCode = "";
    for (let i = 0; i < captchaLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captchaCode += characters.charAt(randomIndex);
    }
    document.getElementById("captchaOutput").textContent = captchaCode;
    document.getElementById("captchaInput").value = "";
    document.getElementById("result").textContent = "";
}

function checkCaptcha() {
    // Get the entered code and the generated CAPTCHA code
    const enteredCode = document.getElementById("captchaInput").value;
    const generatedCode =
        document.getElementById("captchaOutput").textContent;

    // Check if the entered code is correct
    if (enteredCode === generatedCode) {
        document.getElementById("result").textContent =
            "Correct! Code is valid.";
    } else {
        document.getElementById("result").textContent =
            "Incorrect! Code is not valid. Please try again.";
    }
}


generateCaptcha();
