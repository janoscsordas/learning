const resultElement = document.getElementById("result")
const inputField = document.getElementById("number")

function generatePassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&?"
    let password = ""
    for (let i = 0; i < inputField.value; i++) {
        password += chars[Math.floor(Math.random() * chars.length)]
    }
    resultElement.innerHTML = password
}
