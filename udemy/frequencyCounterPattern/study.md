# Problem solving approach

## 1. Understand problem

The problem is comparing two input strings are in anagram.

- check right value(str).
- length of strings.
- does matter Uppercase?
- does matter space in between strings?
- does matter with oreder of strings?

## 2. Concrete examples

- make 3 arrays for each input and for return then compare them with nested for loop?

* split the input strings and put in array
* looping each letter and get one quantity for each letter, if get two return false.

- or make objects?

* make objects for each input that has letter as a key and quantity as a value with for loop.
* compare them with if method.

### closest solution(I guess)

- compare each input's length. If different, return false.
- make 2 of empty arrays 2 for inputs.
- make 2 of object(let's say initial obj) with for loop to get each letter's quantity as key and value and for result.
- split the input strings into arrays.
- comparing each letters for both arrs with nested for loop, get letter's quantities and put into result array.
- compare result arr and initial arr with for loop.(order is doesn't matter.)

## 3. Break it down

```javascript
function anagram(str1, str2) {
  //compare input's length maybe..
  if (str1.length !== str2.length) return false;

  //declare arr and obj.
  let arr1 = [];
  let arr2 = [];
  let result = {};
  let init = {};

  //create arr that has quantities of each letter.
  for (let i = 0; i < str1.length; i++) {
    if (init[str1[i]]) {
      init[str1[i]]++;
    } else init[str1[i]] = 1;
  }

  //expected init
  //{"h":1, "e":1, ....}

  //allocate letters in to array with map and split method.
  arr1 = str1.split("").map((char) => char);
  arr2 = str2.split("").map((char) => char);

  //compare them each letter's value and quantity with nested for loop.
  //make first for loop set i to letters from first arr and compare to second arr
  for (i = 0; i <= arr1.length; i++) {
    for (j = 0; j <= arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result[i]++;
      } else result[i] = 1;
    }
  }
  //expected result and init are same.

  //compare result and init
  for (let key of init.length) {
    if (init[key] !== result[key]) {
      return false;
    }
  }
  return true;
}

anagram("hello", "lolhe");
```

## 4. solve or simplify

```javascript
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let arr1 = [];
  let arr2 = [];
  let result = {};
  let init = {};

  arr1 = str1.split("").map((char) => char);
  arr2 = str2.split("").map((char) => char);

  for (let i = 0; i < str1.length; i++) {
    if (init[str1[i]]) {
      init[str1[i]]++;
    } else init[str1[i]] = 1;
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (result[char]) {
        result[char]++;
      } else {
        result[char] = 1;
      }
      break;
    }
  }

  for (let key in init) {
    if (init[key] !== result[key]) {
      return false;
    }
  }
  return true;
}
```

### Answer!

```javascript
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram("anagrams", "nagaramm");
```

# Key points

- using obj instead of arr.
- value as a key and frequency as a value in obj.
- need to understand how to access to obj key and value: obj[key] = value;
- set empty obj, calculate frequency for each input, compare them at last and return.
