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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let prev = null;
        let curr = head;

        let end = head;
        for (let i = 0; i < n; i++) {
            end = end.next;
        }

        while (end !== null) {
            prev = curr;
            curr = curr.next;
            end = end.next;
        }

        if (prev === null) {
            return head.next;
        }

        prev.next = prev.next.next;

        return head;
    }
}
