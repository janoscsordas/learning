function generatePassword() {
    const hossz = 8
    const betuk = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let jelszo = ""
    for (let i = 0; i < hossz; i++) {
        jelszo += betuk.charAt(Math.floor(Math.random() * betuk.length))
    }
    return jelszo
}

console.log(generatePassword());
