# Sliding Window - maxSubarraySum

> Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
>
> Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null

Constraints:

Time Complexity - O(N)

Space Complexity - O(1)

## 1. Understand the problem.

- get max sum with given legth of consecutive number.
- if given length is beigger than length of array, return null.
- array is not sorted.
- need to compare every sum of numbers.

## 2. Concrete examples.

```javascript
function maxSubarraySum(arr, num) {
  //if statement for edge case
  // decalre variables
  //for loop
}
```

## 3. Break it down

```javascript
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let max = 0;
  let h = arr.length - num;
  let sum = 0;

  for (let i = 0; i <= h; i++) {
    sum += arr[i];
  }
  h++;
  for (let j = num; j < arr.length; j++) {
    if (sum > max) max = sum;
    else return max;
    sum = sum - arr[i] + arr[j];
  }
  return max;
}
```

## 4. Solve and simplify

```javascript
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let max = 0;
  let sum = 0;

  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }

  max = sum;
  for (let j = num; j < arr.length; j++) {
    sum = sum - arr[j - num] + arr[j];
    max = Math.max(max, sum);
  }
  return max;
}
```
