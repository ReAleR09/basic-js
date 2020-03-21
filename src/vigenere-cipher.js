const ALPHABET_LENGTH = 26;
const ALPHABET_CHAR_CODE_OFFSET = 65;

_transformMessage = function (message, key, encrypt, isDirect) {
    message = message.toUpperCase();
    key = key.toUpperCase();

    let resultMessage = '';
    const charArr = message.split('');
    let transformedLetterNumber = -1;
    for(const i in charArr) {
        const letter = charArr[i];
        if(letter > 'Z' || letter < 'A') {
            resultMessage += letter;
            continue;
        }
        transformedLetterNumber++;

        const keyLetterIndex = Number.parseInt(transformedLetterNumber) % key.length;
        const encodingLetter = key[keyLetterIndex];

        const Mi = letter.charCodeAt(0) - ALPHABET_CHAR_CODE_OFFSET;
        const KiModM = encodingLetter.charCodeAt(0) - ALPHABET_CHAR_CODE_OFFSET;

        let base = 0;
        if(encrypt) {
            base = Mi + KiModM;
        } else {
            base = Mi - KiModM;
            if(base < 0) {
                base = ALPHABET_LENGTH + base;
            }
        }

        const newLetterPos = base % ALPHABET_LENGTH;

        const encodedLetter = String.fromCharCode(ALPHABET_CHAR_CODE_OFFSET + newLetterPos);
        
        resultMessage += encodedLetter;
    }
    if(!isDirect) {
        resultMessage = resultMessage.split('').reverse().join('');
    }
    return resultMessage;
}

class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect !== false;
    }
    
    encrypt(message, key) {
        if(message === undefined || key === undefined) {
            throw Error('All params are mandatory');
        }

        return _transformMessage(message, key, true, this.isDirect);
    }

    decrypt(encryptedMessage, key) {
        if(encryptedMessage === undefined || key === undefined) {
            throw Error('All params are mandatory');
        }

        return _transformMessage(encryptedMessage, key, false, this.isDirect);
    }

}

module.exports = VigenereCipheringMachine;
