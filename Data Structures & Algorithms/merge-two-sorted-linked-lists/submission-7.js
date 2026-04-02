/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        return this.mergeTwoListsRecursive(list1, list2);
        let dummy = new ListNode();
        let tail = dummy;

        while (list1 !== null && list2 !== null) {
            if (list1.val < list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }

        if (list1 === null) {
            tail.next = list2;
        } else {
            tail.next = list1;
        }

        return dummy.next;
    }

    mergeTwoListsRecursive(list1, list2) {
        if (list1 === null) {
            return list2;
        } else if (list2 === null) {
            return list1;
        }

        if (list1.val < list2.val) {
            list1.next = this.mergeTwoLists(list1.next, list2);
            // return list1 as the "head" since it's the smaller of list1 and list2
            return list1;
        } else {
            list2.next = this.mergeTwoLists(list1, list2.next);
            return list2;
        }
    }
}
