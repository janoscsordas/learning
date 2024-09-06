
function multiplyCharacters(text: string): string {
    let result = ""
    for (let i = 0; i < text.length; i++) {
        result += text[i].repeat(i + 1)
    }

    return result
}

console.log(multiplyCharacters("Szia"))
