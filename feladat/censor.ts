
function censor(message: string): string {
    const censoredLetters = "aeiou"
    let censoredWord = ""

    for (let letter of message.toLowerCase()) {
        censoredLetters.includes(letter) ? censoredWord += "*" : censoredWord += letter
    }

    return censoredWord
}

console.log(censor("Hello te kis szaros"))
console.log(censor("Eello te kis szaros"))
