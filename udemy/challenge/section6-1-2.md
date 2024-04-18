# Frequency Counter / Multiple Pointers - areThereDuplicates

> Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
> You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true
Restrictions:

Time - O(n)

Space - O(n)

Time - O(n log n)

Space - O(1)

## 1. Understand the Problem

- function need to find doubled variable in arrgument array.
- make arr with args
- return false if arg is empty
- I'll use frequency couter

## 2. Concrete examples

```javascript
function areThereDuplicates(arr) {
  //make arr with args
  //declare empty object
  //make for loop add freq val to empty obj
  //another for loop exam val have freq more than 1.
}
```

## 3. Break it down

```javascript
function areThereDuplicates(...arg) {
  //make arr with args
  let arr = [...arg];

  //declare empty object
  let counter = {};

  //for loop for counting freq
  for (let i of arr) {
    counter[i] = (counter[i] || 0) + 1;
  }

  //for loop for exam freq val
  for (let j of arr)
    if (counter[j] >= 2) {
      return true;
    }
  return false;
}
```

## 4. Solve and simplify

```javascript
function areThereDuplicates(...arg) {
  //make arr with args
  let arr = [...arg];

  //declare empty object
  let counter = {};

  //for loop for counting freq
  for (let i of arr) {
    counter[i] = (counter[i] || 0) + 1;
  }

  //for loop for exam freq val
  for (let j of arr)
    if (counter[j] >= 2) {
      return true;
    }
  return false;
}
```

I tried to solve this problem with multiple pointer, but I couldn't find the way to solve it with that.
with O(n^2) possible, but couldn't improve to O(n).

## 5. Lookback and Refactor

```javascript
//areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
```

Key was a sorted array... oh my god... answer was so simple.
