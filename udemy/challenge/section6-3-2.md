# Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

> This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

Time Complexity - O(n)

Space Complexity - O(1)

## 1. Understand the problem

- need to sort array? maybe no..
- for edge case, sum of whole array is less than given number, return 0;
- and if array has a number greater than given number, retrun length of that numbers
- add sum from i = 0; and everytime check equal or greater than given number
- and everytime have sum = given number save arrays and compare their lengths.
- return shortest one.

## 2. Concrete examples

```javascript
function minSubArrayLen(arr, n) {

    let greaterNum = arr.filter((item) => item > n)
    if(greaterNum) return greaterNum.length;

    let subArray = [];
    let subArrays = [];
    let sum = 0;
    let h= 2;

    for(let i = 0; i <= h: i++) {
        sum += arr[i]
        if(sum === n) {
            subArray.push(arr.slice(0, i + 1))
            subArrays.push(subArray)
        }
    }
    h++

    let minLen = Infinity;
    for (let subArray of subArrays) {
        minLen = Math.min(minLen, subArray.length);
    }

    return minLen;
}
```
