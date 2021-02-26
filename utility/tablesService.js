const fs = require('fs');
const path = require('path');

const constants = require('./constants');
const UniqueNumbersGenerator = require('./uniqueNumbersGenerator');

const codesGenerator = new UniqueNumbersGenerator(constants.maxCodeNumber, constants.minCodeNumber);

module.exports = {
    getFrequencyTable() {
        const frequencyTable_raw = fs.readFileSync(path.join(process.cwd(), 'data', 'frequency_table.json'));
        return JSON.parse(frequencyTable_raw);
    },

    formSubstitutionTable(frequencyTable) {
        const substitutionTablePath = path.join(process.cwd(), 'data', 'substitution_table.json');
        let substitutionObj = {},
            currentNumberOfCodes = 0,
            codesArray = [];

        for (const letter in frequencyTable) {
            currentNumberOfCodes = Math.ceil(+frequencyTable[letter] / constants.maxLetterFrequency * constants.maxNumberOfLetterCodes);
            for (let i = 1; i <= currentNumberOfCodes; i++) {
                codesArray.push(codesGenerator.next());
            }

            substitutionObj[letter] = codesArray;
            codesArray = [];
        }

        fs.writeFileSync(substitutionTablePath, JSON.stringify(substitutionObj));
    }
}