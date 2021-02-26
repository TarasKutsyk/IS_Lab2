const fs = require('fs');
const path = require('path');

module.exports = {
    getInputText() {
        const text = fs.readFileSync(path.join(process.cwd(), 'data', 'textToEncrypt.txt'), 'utf-8');
        return text.toLocaleLowerCase('ua');
    },

    writeEncryptedData(data) {
        const outputFilePath = path.join(process.cwd(), 'data', 'encrypted.txt');
        fs.writeFileSync(outputFilePath, data);
    }
}