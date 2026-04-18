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
    }

    mergeTwoListsRecursive(list1, list2) {
        if (list1 === null && list2 === null) {
            return null;
        } else if (list1 === null) {
            return list2;
        } else if (list2 === null) {
            return list1;
        }

        const head = list1.val > list2.val ? list2 : list1;

        if (list1.val > list2.val) {
            const nextL2 = list2.next;

            list2.next = this.mergeTwoListsRecursive(list1, nextL2);
        } else {
            const nextL1 = list1.next;

            list1.next = this.mergeTwoListsRecursive(nextL1, list2);
        }

        return head;
    }
}
