function isValid(s: string): boolean {
  //create object for mapping pair of paretheses in key and value.
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  // emtpy stack when detect closing parentheses add them in to this.
  let stack = [];

  //take out open parentheses for comparing.
  let vals = Object.values(map);

  //looping input string and check there are closing parentheses.
  for (let i = 0; i < s.length; i++) {
    const current = s[i];

    if (vals.includes(current)) {
      stack.push(current);
    } else if (stack.pop() !== map[current]) return false;
  }

  return !stack.length;
}

// New data structure "Stack"
// Follow simple rule that LIFO(last in frst out) with push() and pop().
// Its suitable for this problem because parentheses always have a pair and in given logical order, we only need to check last element.

//Big O: O(n)
