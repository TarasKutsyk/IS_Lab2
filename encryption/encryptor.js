const path = require('path');

const filesService = require(path.join(process.cwd(), 'utility', 'filesService'));
const tablesService = require(path.join(process.cwd(), 'utility', 'tablesService'));

function encryptData(data) {
    const substitutionTable = tablesService.getSubstitutionTable();

    let encryptedData = [];
    let currentCodesArray, randomCodeIndex;

    for (const char of data) {
        currentCodesArray = substitutionTable[char];
        randomCodeIndex = Math.floor(Math.random() * currentCodesArray.length);

        encryptedData.push(currentCodesArray[randomCodeIndex]);
    }

    return encryptedData.join('');
}

dataToEncrypt = filesService.getInputText();
encryptedData = encryptData(dataToEncrypt);

filesService.writeEncryptedData(encryptedData);