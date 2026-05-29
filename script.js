const captchaText = document.getElementById("captcha");
const refreshBtn = document.getElementById("refresh");
const submitBtn = document.getElementById("submitBtn");
const userInput = document.getElementById("userInput");
const message = document.getElementById("message");

let captcha = "";

function generateCaptcha() {
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    captcha = "";

    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        captcha += chars[randomIndex];
    }

    captchaText.textContent = captcha;
}

refreshBtn.addEventListener("click", generateCaptcha);

submitBtn.addEventListener("click", () => {
    if (userInput.value === captcha) {
        message.textContent = "Captcha Matched ✅";
        message.style.color = "green";
    } else {
        message.textContent = "Invalid Captcha ❌";
        message.style.color = "red";
    }

    userInput.value = "";
    generateCaptcha();
});

generateCaptcha();