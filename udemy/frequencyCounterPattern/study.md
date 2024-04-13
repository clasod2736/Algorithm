## Naive approach

#### Big O: O(n)

```javascript
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
const result = same([1, 2, 3], [1, 4, 9]);

// Refactored below!
// Objects instead of arrays.
// Big O: O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key * 2] !== frequencyCounter1[key]) {
      return false;
    }
    return true;
  }
}
same([1, 2, 3], [1, 3, 9]);
```

## Summary

> In second approach, used objects instead of arrays.
> Declared eampty object for each array first,
> then set values from arr to object's key, and frequancies to object's value.
> First, compared keys for each objects with operator
> and compared values for ferequancies.
> Not implemented "Nested Loop", just listed for loops for each steps
> and that makes better Big O from O(n^2) to O(n).

## Features

### Object

object is much more easier to access to inside of them than arrays.
and key and value is more handy to solving problems and comparing values from different inputs.

### Whole process start with declare empty object.

In this approach, actually lots of algorithm problems starting with declaring empty arrays or objects,
and restructuring them to calculating, comparing...etc and make them return.
As a starter, its really interesting that doing destructuring inputs first,
Before start to solve problem, listed each steps to make expected result and find solutions.

### for..in & for..of

- "for..in" loop using access to objects key and values.

```javascript
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key); // Prints 'a', 'b', 'c'
  console.log(obj[key]); // Access the corresponding value: 1, 2, 3
}
```

- "for..of" loop using access to array's iterables values.
  const arr = [1, 2, 3];

```javascript
for (const value of arr) {
  console.log(value); // Prints 1, 2, 3
}
```
