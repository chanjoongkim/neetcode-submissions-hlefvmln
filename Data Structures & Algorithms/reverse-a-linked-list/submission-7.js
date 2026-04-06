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
     * @return {ListNode}
     */
    reverseList(head) {
        let curr = head;
        let follow = null;

        while (curr !== null) {
            const next = curr.next;

            curr.next = follow;
            follow = curr;
            curr = next;
        }

        return follow;
    }
}
