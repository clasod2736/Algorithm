# 1. Understand Problem

- need to get how many numbers in the array, not length.
- need to use multiple pointers
- declare just one obj for result
- in this case array is sorted, but we could use this patter for unsorted array as well.

# 2. Concrete example

- using While method
- make two point left and right from start and start+1 and compare them
- I think comparing left and right and if they are different add result value.
- set one as initial value for result obj.
- if input is empty, return 0

# 3. Break it down

```javascript
function countUniqueValues(arr) {
  //declare result value
  let result = 1;

  //if arr in empty return 0;
  if (arr.length === 0) {
    result = 0;
    return result;
  }

  //declare left and right
  let left = 0;
  let right = left + 1;

  //implement while method
  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      result++;
    }
    right++;
  }

  //return value.
  return result;
}
```

# 4. solve and simplify

above solution has a two problem them, first I didn't put left++ inside of while method,
I thought it would work left is stay at first index and only right move to last step by step.
But it wasn't some of cases it didn't work, so I made left and right move together from start to end of arr.

and second, it is crucial, I thought comparing pointers that are moving consecutive.
So after comparing the pair of values, then move pointers are to the next.
What I missed in this process I needed to do something to first pointer if pointers are different.
because logic of above solution, if input is [1,2,1,2,1,2,1,2] like this, then my function will return 7.
Whichis not expected, so after compare, if pointers are different then change first pointer's value as a second pointer's value.
Therefore I could prevent re-adding result from same comparison.

```javascript
function countUniqueValues(arr) {
  let result = 0;

  if (arr.length === 0) return result;

  let left = 0;
  let right = left + 1;

  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      result++;
      arr[left] = arr[right];
    } else if (arr[left] === arr[right]) {
      arr[left] = arr[right];
    }
    right++;
  }

  return result + 1;
}
```

# 5. Look Back and Refactor

```javascript
The given answer from instructor.

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])
```

There is a tiny difference between my one and given answer.
In my solution, if pointers are diff, add result value and make first pointer value as same as second.
And first pointer is "stay in the index of 0" until end of array.
But in given solution first pointers follow to second one when they are diff.

## Keypoint

- using while method: while method looping until the given statement is true.
- place pointers well: there are two ways, start pointers from both edge sides or make them consecutive.
- be aware array is always need to be sorted.
