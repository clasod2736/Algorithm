function isPalindrome(x: number): boolean {

    // first solution: the problem is "reverse" method 'cause reverse method duplicate array and this is unneccesary work(just bit more usage of memory).
    // Big O: O(n)
    let numString = x.toString();
    let numStringArray = numString.split('')
    let reverseNumStringArray = numStringArray.slice().reverse();
    const result = numStringArray.every((value, index) => value === reverseNumStringArray[index])
    return result

    // secod solution: I used typical Two Pointers algorithm. Looks more intuitive than first one(just bit better time complexity)
    // Big O: O(n)
    // if (x < 0) {
    //     return false;
    // }

    // const numStringArray = x.toString().split('');
    // let start = 0;
    // let end = numStringArray.length - 1;

    // while (start < end) {
    //     if (numStringArray[start] !== numStringArray[end]) {
    //         return false;
    //     }
    //     start++;
    //     end--;
    // }

    // return true;

    // most simple solution (from leetcode solution list.): I'ts extremely simple and short but for me, readability is not really good and also performance is not really different with others.
    // Big O: O(n)
    //return parseInt(x.toString().split("").reverse().join('')) === x
};