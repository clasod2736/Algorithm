/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

let mergeTwoLists = function(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    if (list1 === null) { return list2 }
    if (list2 === null) { return list1 }

    if(list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1;
    }
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;

};

//What is lienkd list data structure???
//linked list is a collection of nodes, each node has a data and memory address for next node in same collection.
//Then how manipulate them?
//I've found a few properties, but before that do I need to change linked lists to array?
//the solution is using .next property for linked list.
//exam what value is least with if statement and change the "next" property in each nodes.
//and using "recursion" instead of using loop method, it means using recursion is cost same time complexity as loop method.

// BIg O = O(n + m)