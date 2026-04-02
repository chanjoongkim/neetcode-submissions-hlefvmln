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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode();
        let curr = dummy;

        let carry = 0;

        while (l1 != null || l2 != null || carry > 0) {
            const v1 = l1 === null ? 0 : l1.val;
            const v2 = l2 === null ? 0 : l2.val;
            let val = v1 + v2 + carry;
            carry = Math.trunc(val / 10);
            val = val % 10;

            curr.next = new ListNode(val);
            curr = curr.next;

            l1 = l1 === null ? null : l1.next;
            l2 = l2 === null ? null : l2.next;
        }

        return dummy.next;
    }
}
