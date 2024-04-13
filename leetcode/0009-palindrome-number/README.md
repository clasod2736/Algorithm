<h2><a href="https://leetcode.com/problems/palindrome-number/">9. Palindrome Number</a></h2><h3>Easy</h3><hr><div><p>Given an integer <code>x</code>, return <code>true</code><em> if </em><code>x</code><em> is a </em><span data-keyword="palindrome-integer"><em><strong>palindrome</strong></em></span><em>, and </em><code>false</code><em> otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> x = 121
<strong>Output:</strong> true
<strong>Explanation:</strong> 121 reads as 121 from left to right and from right to left.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> x = -121
<strong>Output:</strong> false
<strong>Explanation:</strong> From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> x = 10
<strong>Output:</strong> false
<strong>Explanation:</strong> Reads 01 from right to left. Therefore it is not a palindrome.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>-2<sup>31</sup>&nbsp;&lt;= x &lt;= 2<sup>31</sup>&nbsp;- 1</code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you solve it without converting the integer to a string?</div>

<br><br>

<h2>Solution</h2>

Palindrome's core method is how to compare all the numbers if giver number is reversed.   
   
**There were 2 ways to do that   

<code>1. First one is make another array that has reversed index and compare them.</code>   
<code>2. Second one make two pointer start compare from both edge side until the reach to middle.</code>
   
```
function isPalindrome(x: number): boolean {

    // first solution: the problem is "reverse" method 'cause reverse method duplicate array and this is unneccesary work(just bit more usage of memory).
    // Big O: O(n)

    let numString = x.toString();
    let numStringArray = numString.split('')
    let reverseNumStringArray = numStringArray.slice().reverse();
    const result = numStringArray.every((value, index) => value === reverseNumStringArray[index])
    return result

-------------------------------------------------------------------------------------------------------------------------------------------

    // second solution: I used typical "Two Pointers" algorithm. Looks more intuitive than first one(just bit better time complexity)
    // Big O: O(n)

    if (x < 0) {
        return false;
    }

    const numStringArray = x.toString().split('');
    let start = 0;
    let end = numStringArray.length - 1;

    while (start < end) {
        if (numStringArray[start] !== numStringArray[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;

-------------------------------------------------------------------------------------------------------------------------------------------

    // most simple solution (from leetcode solution list.): I'ts extremely simple and short but for me, readability is not really good and also performance is not drastically different with others.
    // Big O: O(n)

    return parseInt(x.toString().split("").reverse().join('')) === x
};
```

**All of the codes you can check in the .ts file and also check my thoughts in NOTES.md**
