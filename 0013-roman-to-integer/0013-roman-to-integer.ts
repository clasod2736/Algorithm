function romanToInt(s: string): number {

    //first solution
//     const roman = {
//         "I": 1,
//         "IV": 4,
//         "V": 5,
//         "IX": 9,
//         "X": 10,
//         "XL": 40,
//         "L": 50,
//         "XC": 90,
//         "C": 100,
//         "CD": 400,
//         "D": 500,
//         "CM": 900,
//         "M": 1000
//     }

//     const romanArr = s.split('')

//     let num = 0;
//     let current, next;

//      for (let i = 0; i < romanArr.length; i++) {
//         current = roman[romanArr[i]];
//         next = roman[romanArr[i + 1]];

//         if (next > current) {
//             num -= current;
//         } else {
//             num += current;
//         }
//     }

//     return num;
    
    //second solution: better solution✨
       const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let num = 0;
    let current, next;

     for (let i = 0; i < s.length; i++) {
        current = roman[s[i]];
        next = roman[s[i + 1]];

        if (next > current) {
            num -= current;
        } else {
            num += current;
        }
    }

    return num;
};