function romanToInt(s: string): number {

    const roman = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000
    }

    const romanArr = s.split('')

    let num = 0;
    let current, next;

     for (let i = 0; i < romanArr.length; i++) {
        current = roman[romanArr[i]];
        next = roman[romanArr[i + 1]];

        if (next > current) {
            num -= current;
        } else {
            num += current;
        }
    }

    return num;
};