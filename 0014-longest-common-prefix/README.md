<h2><a href="https://leetcode.com/problems/longest-common-prefix/">14. Longest Common Prefix</a></h2><h3>Easy</h3><hr><div><p>Write a function to find the longest common prefix string amongst an array of strings.</p>

<p>If there is no common prefix, return an empty string <code>""</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> strs = ["flower","flow","flight"]
<strong>Output:</strong> "fl"
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> strs = ["dog","racecar","car"]
<strong>Output:</strong> ""
<strong>Explanation:</strong> There is no common prefix among the input strings.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= strs.length &lt;= 200</code></li>
	<li><code>0 &lt;= strs[i].length &lt;= 200</code></li>
	<li><code>strs[i]</code> consists of only lowercase English letters.</li>
</ul>
</div>
<br>

## Solution
Similar to "Roman-to-integer" problem.
Using for loop and while method to compare each string value to find common prefix, Easy.

```
function longestCommonPrefix(strs: string[]): string {

    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 0; i < strs.length; i++) {
            while(strs[i].indexOf(prefix) !== 0) {
                prefix = prefix.substring(0, prefix.length - 1)
            }
    }

    return prefix
};
```
