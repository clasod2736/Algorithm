<h2><a href="https://leetcode.com/problems/two-sum/">1. Two Sum</a></h2><h3>Easy</h3><hr><div><p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>

<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>

<p>You can return the answer in any order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [2,7,11,15], target = 9
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [3,2,4], target = 6
<strong>Output:</strong> [1,2]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> nums = [3,3], target = 6
<strong>Output:</strong> [0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
	<li><strong>Only one valid answer exists.</strong></li>
</ul>

<p>&nbsp;</p>
<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code><font face="monospace">&nbsp;</font>time complexity?</div>

<br><h1>Solution</h1>
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

<strong>All of the codes you can check in the .ts file and also check my thoughts in NOTES.md</strong>

