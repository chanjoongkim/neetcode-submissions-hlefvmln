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
        this.addTwoNumbersRecursive(l1, l2, 0, dummy);

        return dummy.next;

        // let curr = dummy;

        // let carry = 0;

        // while (l1 != null || l2 != null || carry > 0) {
        //     const v1 = l1 === null ? 0 : l1.val;
        //     const v2 = l2 === null ? 0 : l2.val;
        //     let val = v1 + v2 + carry;
        //     carry = Math.trunc(val / 10);
        //     val = val % 10;

        //     curr.next = new ListNode(val);
        //     curr = curr.next;

        //     l1 = l1 === null ? null : l1.next;
        //     l2 = l2 === null ? null : l2.next;
        // }

        // return dummy.next;
    }

    addTwoNumbersRecursive(l1, l2, carry, curr) {
        if (l1 === null && l2 === null) {
            if (carry > 0) {
                const newNode = new ListNode(1);
                curr.next = newNode;

                return newNode;
            } else {
                return null;
            }
        }

        const v1 = l1 === null ? 0 : l1.val;
        const v2 = l2 === null ? 0 : l2.val;
        let val = v1 + v2 + carry;
        carry = Math.trunc(val / 10);
        val = val % 10;

        const newNode = new ListNode(val);
        curr.next = newNode

        newNode.next = this.addTwoNumbersRecursive(l1 === null ? null : l1.next, l2 === null ? null : l2.next, carry, newNode);

        return newNode;
    }
}
