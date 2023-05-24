const emailInput = document.getElementById("emailInput")
const validateButton = document.getElementById("validateButton")
const validateText = document.getElementById("validateText")

function validateEmail(inputText) {
    const email = emailInput.value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        validateText.innerText = ""
    } else {
        validateText.innerText = "Please enter a valid email address"
    }
}

validateButton.addEventListener("click", validateEmail)