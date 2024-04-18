# Multiple Pointers - averagePair

> Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false

## 1. Understand the problem

- Get twiced value of target average and compared with sum from values from array.
- set if statement for edge case.
- for loop and if statement.

## 2. Concrete Examples

```javascript
function averagePair(arr, val) {
  if (arr.length < 1) return false;

  let target = val * 2;

  for (let i = 0; i < arr.length - 1; i++) {
    let j = arr.length - 1;
    if (arr[i] + arr[j] !== target) {
      i++;
    } else if (arr[i] + arr[j] === target) return true;
    j--;
  }
  return false;
}
```

## 4. Solve and Simplify

```javascript
function averagePair(arr, val) {
  if (arr.length < 1) return false;

  let target = val * 2;
  let j = arr.length - 1;

  for (let i = 0; i < j; ) {
    if (arr[i] + arr[j] === target) return true;
    else if (arr[i] + arr[j] < target) {
      i++;
    } else j--;
  }
  return false;
}
```
