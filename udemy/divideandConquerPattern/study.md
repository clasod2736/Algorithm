# Binary search.

> Given a sorted array of integers, write a function called search, that accpets a value and returns the index where the value passed to the function is located.
> If the value is not found, return -1.

> I won't write naive solution 'cause it will be basic search pattern with for loop.
> Which has O(n) but If I implement function with binary search, Big O will change to O(logn)

```javascript
function search(array, val) {

    let min = 0;
    let max = array.length - 1;

    whilte (min <= max) {

        //set mid with Math method.
        let mid = Math.floor((min + max) / 2);
        let current = array[mid];

        if(array[mid] > val) {
            max = mid + 1;
        }
        else if (array[mid] > val) {
            max = mid - 1;
        }
        else return mid;
    }
    return -1;
}
```

## Key Points

- core concept of binary search is divide array into half by "mid", so the way of declare mid value is depneds on input.
- input array has to be sorted.
- improvement of Big O: O(n) => O(logn)
- process is quite easy: divide array into half and prove which one has a target value and save just one of half and keep going same process until found the target value.
