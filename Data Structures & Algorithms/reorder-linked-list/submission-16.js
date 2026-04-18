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
     * @return {void}
     */
    reorderList(head) {
        if (!head || head.next === null) {
            return head;
        }

        // get start of "second half" of linked list
        let fast = head;
        let slow = head;

        do {
            fast = fast.next.next;
            slow = slow.next;
        } while (fast !== null && fast.next !== null);

        if (fast !== null) {
            slow = slow.next;
        }

        // slow should be the start of the second half
        const secondHalf = [];
        while (slow !== null) {
            secondHalf.push(slow);
            slow = slow.next;
        }

        console.log(secondHalf);

        let curr = head;
        // rebuild list, starting with head, then last element of secondHalf, and iterate until the secondHalf stack is empty.
        while (secondHalf.length !== 0) {
            const l2 = secondHalf.pop();
            const nextL1 = curr.next;

            curr.next = l2;
            l2.next = nextL1;

            curr = nextL1;
        }

        if (curr !== null) {
            curr.next = null;
        }

        return head;
    }
}
