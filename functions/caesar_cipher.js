function caesarCipher(str, shift) {
    if (shift < 0) {
        return caesarCipher(str, shift + 26);
    }

    let cipherStr = '';
    for (let i = 0; i < str.length; i += 1) {
        let char = str[i];

        if (char.match(/[a-z]/i)) {
            const code = str.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        cipherStr += char;
    }
    return cipherStr;
}

export default caesarCipher;
