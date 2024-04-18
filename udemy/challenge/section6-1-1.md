# Frequency Counter - sameFrequency

> Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

## 1. Understand the problem.

- get frequencies for each inputs.
- don't worry about negative numbers.
- need to change number to array with split method.
- set if statement for edge cases must both inputs have length more than 0.
- both inputs must have same keys, doesn't matter with order.
- get frequency for each input, compare keys first, then compare frequencies.

## 2. Concrete examples.

```javascript
function sameFrequency(num1, num2) {

    //change num to array
    let arr1 = num1.split("")
    let arr2 = num2.split("")

    // check length of both input with if statement
    if(num1.length < 1 || num2.lengh < 1 || num1.length !== num2.length){
        return false
    }

    //declare empty object
    let counter1 = {};
    let counter2 = {};

    //calculate frequency for each input
    fonr(let val of arr1)

    //compare them
}
```

## 3. Break it down.

```javascript
function sameFrequency(num1, num2) {
  //change num to array
  let arr1 = num1.split("");
  let arr2 = num2.split("");

  // check length of both input with if statement
  if (arr1.length < 1 || arr2.lengh < 1 || arr1.length !== arr2.length) {
    return false;
  }

  //declare empty object
  let counter1 = {};
  let counter2 = {};

  //calculate frequency for each input
  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }

      //compare them
  for (let val of arr1) {
    if (counter1[val] === counter2[val]) {
        return true;
    } else retrun false
  }
}
```

## 4. Solve and Simplify

```javascript
function sameFrequency(num1, num2) {
  //change num to array
  //need to add toString(), cause theses are numbers
  let arr1 = num1.toString().split("");
  let arr2 = num2.toString().split("");

  // check length of both input with if statement
  if (arr1.length < 1 || arr2.length < 1 || arr1.length !== arr2.length) {
    return false;
  }

  //declare empty object
  let counter1 = {};
  let counter2 = {};

  //calculate frequency for each input
  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }

      //compare them with !==
  for (let val of arr1) {
    if (counter1[val] 1== counter2[val]) {
        return false;
    }
  }
  reuturn true
}
```

## 5. Look back and refactor

```javascript
//I thought it was ok If I don't put toString() for inputs.
//javascript automatically transfer types from num to string, but guess it is bad habbit.
```
