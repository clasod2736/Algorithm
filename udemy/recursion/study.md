# Recursion

> What is Recursion?
> A process (a function in our case) that calls itself.

## Objectives

- Define what recursion is and how it can be used.
- Understand the two essential components of a recursive function
- Visualise the call stack to better debug and inderstand recursive functions.
- Use helper method recursion and pure recursion to solve more difficult problems.

### Call Stack

- Yes, that "Call Stack" in Javascript, and it also actually data structure as "stack".
- Any time a function is invoked it is placed _(pushed)_ on the top of the call stack.
- When javascript sees the _return_ keyword or when the function ends, the compiler will remove _(pop)_.
- Always Last In First Out _(LIFO)_

### Base Case

- In recursive function, stating when and how to end the function is very important.
- We need to have a codes for stopping function in somewhat case or condition, we calling that _"Base Case"_.
- example

```javascript
function countDown(num) {
  // Base Case!
  if (num <= 0) {
    console.log("All done!");
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}
```

## Common Pitfalls

- No base case = Stack overflow.
- Returning wrong value: put "return" somewhere wrong place.
- Be aware of time and space complexity: stacking in callstack until reach to base case, using more memory thant common loop method.

### Basic examples of Recursive function.

The difference is recursioning function itself or having a inner recursive function inside of outer function.

##### Helper method function.

```javascript
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}
```

##### Pure function.

```javascript
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
```
