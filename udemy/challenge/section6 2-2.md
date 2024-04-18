# Multiple Pointers - isSubsequence

> Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)

## 1. Understand the problem

- make arrays from strs.
- exam arr2 has all of elements of arr1.
- test from first letter of arr1 with first letter of arr2.
- if they are not matching move the arr2 pointer to the next index.
- then if they are matching move to next letter in arr1.
- do above process again.
- if arr2 pointer couldn't find same element with corresponding element from arr1, return false.(order examing step.)

## 2. Concrete Examples

```javascript
function isSubsequence(str1, str2) {
  //make arrays
  //exam arr2 includes same elements of arr1.
  //for loop for check order
  //return
}
```

## 3. Break it down

```javascript
function isSubsequence(str1, str2) {
  //empty variable for counting
  let result = 0;
  //make arrays
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  //exam arr2 inlcludes same elements of arr1
  if (arr1.every((item) => arr2.includes(item))) {
    let j = 0;

    //for loop check order and add counting to result
    for (let i = 0; i < arr1.length; ) {
      if (arr1[i] === arr2[j]) {
        i++;
        result++;
      } else if (arr1[i] !== arr2[j]) {
        j++;
      }
    }
  } else return false;
  //return result
  if (result === arr1.length) return true;
  else return false;
}
```

## 4. Solve and Simplify

```javascript
function isSubsequence(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  let result = 0;

  if (arr1.every((item) => arr2.includes(item))) {
    let i = 0;
    let j = 0;

    while (i < arr1.length) {
      if (arr1[i] === arr2[j]) {
        i++;
        result++;
      } else if (arr1[i] !== arr2[j]) {
        j++;
      }
    }
  } else return false;

  if (result === arr1.length) return true;
  else return false;
}
```
