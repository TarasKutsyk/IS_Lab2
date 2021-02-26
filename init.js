const fs = require('fs');
const path = require('path');

const alphabet = fs.readFileSync(path.join(__dirname, 'data', 'alphabet.txt'), 'utf8');

const frequencyTableInit = {};
for (let letter of alphabet) {
    frequencyTableInit[letter] = '';
}

fs.writeFileSync(path.join(__dirname, 'data', 'frequency_table.json'), JSON.stringify(frequencyTableInit, null, 2));