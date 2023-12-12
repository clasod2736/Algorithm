​<br><h2>Solution</h2>
<div>
<p>My first solution was <code>Brute Force</code> with <strong>nested for loop</strong></p>
<p>Which is fair enough for beginner's first algorithm, without considering <code>Big O</code></p>
<p>But it even tooks 2 hour with Brute Force and I beat only 50% of solvers.</p>
<p>And I looked at other solution and I got 2 more most common and better algorithm for <code>Two Some</code>.</p>
	<br>
<code>Two Pointers</code> and <code>Hash Table</code>
<br><br>

	// 1.Brute Force: Big O: O(n^2) / Runtime = 80ms
     	for (let i = 0; i < nums.length; i++) {
         for (let j = i + 1; j < nums.length; j++) {
             if (nums[i] + nums[j] === target) {
                 return [i, j];
             }
         }
     }
     return
     

    // 2.Two Pointer: BIg O: O(n log n) / Runtime: 50ms
     const newArray = nums.map((num, index) => [num, index]); // create the copy
     newArray.sort((a, b) => a[0] - b[0])
    
         let start = 0;
         let end = newArray.length -1;

         while(start < end) {
             const sum = newArray[start][0] + newArray[end][0]

             if(sum === target) {
                 return [newArray[start][1], newArray[end][1]];
             } else if (sum < target) {
                 start++;
             } else end--;
         }
     return [];
     

    // 3.Hash Table: Big O: O(n) / Runtime: 30ms
    const map = new Map();

    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        const diff = target - num;

        if (map.has(diff)) {
            return [map.get(diff), i]
        }
        map.set(num, i)
    }

</div>
<strong>All the code also can check in the typescript code file.</strong>

