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

        // return the smaller of the two elements
        const head = list1.val > list2.val ? list2 : list1;

        if (list1.val > list2.val) {
            const nextL2 = list2.next;

            // since list2 is smaller, recursively set list2.next to the next smallest element (that is returned from our recursive call)
            list2.next = this.mergeTwoListsRecursive(list1, nextL2);
        } else {
            const nextL1 = list1.next;

            // since list1 is smaller, recursively set list1.next to the next smallest element (that is returned from our recursive call)
            list1.next = this.mergeTwoListsRecursive(nextL1, list2);
        }

        return head;
    }
}
