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

        let fast = head;
        let slow = head;

        do {
          if (fast === null || fast.next === null) {
            return false;
          }

          fast = fast.next.next;
          slow = slow.next;
        } while (fast !== slow)

        return true;
    }
}
