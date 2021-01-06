module.exports = {
    digitalsum(number) {

        let sum = 0;

        while(number > 0 ) {
        reminder = number%10;
        sum = sum + reminder;
        number = Math.floor(number/10);
        }
        return sum;

    },
    firstandLastSum(number) {

        lastDigit = number%10;
        firstDigit = number;
        while(firstDigit >= 10) {
            firstDigit = Math.floor(firstDigit/10);
        }
        sum = lastDigit + firstDigit;

        return sum;

    }
}