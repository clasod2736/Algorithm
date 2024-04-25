function isValid(s: string): boolean {
 
 //create object for mapping pair of paretheses in key and value.
 const map = {
    ')': '(',
    ']': '[',
    '}': '{'
 }

 // emtpy stack when detect closing parentheses add them in to this.
 let stack = []

 //take out open parentheses for comparing.
 let vals = Object.values(map)

 //looping input string and check there are closing parentheses.
 for(let i = 0; i <  s.length; i++) {
    const current = s[i]

    if(vals.includes(current)) {
        stack.push(current)
    } else if (stack.pop() !== map[current]) return false
 }

 return !stack.length;

};

// Stack data structure.
// Stack is simple data structure follow "last in first out"