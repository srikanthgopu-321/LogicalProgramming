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

    },
    secondLargestNumber(n1,n2,n3) {

        sL = n1>n2&&n1>n3 ? n2>n3?n2:n3 : n2>n1&&n2>n3 ? n1>n3?n1:n3 : n1>n2?n1:n2;
        return sL;
    },
    isAnagram(str1, str2) {
        let sorted1 = str1.split(' ').sort().join(' ').toLowerCase();
        let sorted2 = str2.split(' ').sort().join(' ').toLowerCase();
        return (sorted1 === sorted2);
    }
}