# Sliding window pattern

This patter involves creating a window which can either be an array or number from one position to another.
Depending on a certain condition, the window either increases or closes (and a new window is created)
Very useful for keeping track of a subset of data an array / string etc.

### maxSubarraySum

write a function called maxSubarraySum which accepts an array of integers and a number called n.
the function should calculate the maximum sum of n consecutive elements in the array.

## 1. Understand the Problem

- this function need to get return biggest sum of n consecutive values in array.
- array is okay to be unsorted.
- if arr or n is 0 return false, if legth of array is less than n also return false.

## 2. Concrete examples

```javascript
function maxSubarraySum(arr, n) {

//if arr.length = 0 || n = 0 || arr.length < n return false

//declare two values, max and temp

//naively consider make nestedloop, first loop moving n of index boundary from index of n - 1 to arr.length - n,
another loop get sum and add to temp, compare max and temp.
but if max is less then temp, set max = temp. If max is bigger then temp, return max.

- return max.
}

## 3. Break it down

function maxSubarraySum(arr, n) {

//for edge cases
if(arr.length == 0 || n == 0 || arr.length < n) return false.

//declare max and temp
//but if all of  numbers are negative in the array?
let max = 0;
let temp = 0;

//nested loop
for(let i = n - 1; i <= arr.length - n; i++) {
    //this for statement n - 1 <= j <= arr.length is not supported in javascript.
    I could use i = n instead of  arr.length - n and get rid of n - 1.
    for(j = n; n - 1 <= j <= arr.length - n; j++) {
        temp += arr[j]
        // do I need to move "i" really?? no
        i++
    }
    //compare them and change max oly max is lesser than temp.
    if(max < temp) {
        max = temp
    }
}

//return
return max;
}
```

## 4. Solve and Simplify

#### Big O = 0(n^2)

#### Nested loop.

```javascript
function maxSubarraySum(arr, n) {

if(arr.length == 0 || n == 0 || arr.length < n) return false.

//changed max for negative numbers.
let max = -infinity;
let temp = 0;

for(let i = n - 1; i <= arr.length - n; i++) {
    for(let j = i; j < i + n; j++) {
        temp += arr[j]
    }
    if(max < temp) {
        max = temp
    }
}
return max;
}
```

## 5. Lookback and Refactor

First, Big O is not desirable.
Second, I didn't use slding window pattern.

Mathematically when get sum of n, we just need to subtract first index of n and add a index after with previous sum.
Then we don't need to make nested loop, set max sum with the initial n and remove and add for both side and set temp and compare them.

### My solution

#### Big O is (n)

```javascript
function maxSubarraySum(arr, n) {

    if(arr.length == 0 || n == 0 || arr.length < n) return false.

    let max = -Infinity;
    let temp = 0;
    let h = arr.length - n;

    for(let i = 0; i <= h; i++) {
        temp += arr[i];
    }
    h++;

    for(let j = n; j <= arr.length - 1; j++) {
        if(max < temp) {
            max = temp
        } else return max
        temp = temp - arr[i] + arr[j]
    }
    return max;
}
```

//it's work, let's compare with answer

```javascript
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```

> its more simpler and readable, but functions are exactly same.

## Key Points.

- When you have nested loop, think about you can make unnested n loop instead of nested loop its crucial.

\*/
