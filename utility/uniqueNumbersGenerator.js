function UniqueNumberGenerator(maxNumber, minNumber) {
    this.numbersUsed = [];

    this.next = () => {
        const nextNumber = Math.round(minNumber + Math.random() * (maxNumber - minNumber));

        if(this.numbersUsed.some(value => value === nextNumber)) {
            return this.next();
        }

        else {
            this.numbersUsed.push(nextNumber);
            return nextNumber;
        }
    }
}

module.exports = UniqueNumberGenerator;