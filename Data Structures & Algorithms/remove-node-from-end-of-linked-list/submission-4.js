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
        const dummy = new ListNode(0, head);
        let prev = dummy;
        let end = head;

        for (let i = 0; i < n; i++) {
            end = end.next;
        }

        while (end !== null) {
            end = end.next;
            prev = prev.next;
        }

        prev.next = prev.next.next;

        return dummy.next;
    }
}
