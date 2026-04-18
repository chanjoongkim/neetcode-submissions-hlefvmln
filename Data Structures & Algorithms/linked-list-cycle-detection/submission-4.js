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
     * @return {boolean}
     */
    hasCycle(head) {
        if (head === null || head.next === null) {
            return false;
        }

        let fast = head.next;
        let slow = head;

        while (fast !== slow) {
            if (fast === null || fast.next === null) {
                return false;
            }

            fast = fast.next.next;
            slow = slow.next;
        }

        return true;
    }
}
