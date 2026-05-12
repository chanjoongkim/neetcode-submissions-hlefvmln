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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        if (left === right) {
            return head;
        }

        const dummy = new ListNode(0, head);

        let index = 1;
        let prev = dummy;
        let curr = head;

        // left will be the node BEFORE the start of the reversed list
        let leftNode = null;
        // right wil be the LAST NODE in the reversed list
        let rightNode = null;
        while (curr !== null) {
            if (index === left) {
                leftNode = prev;
            }
            else if (index === right) {
                rightNode = curr;
            }
            const temp = curr.next;
            prev = curr;
            curr = temp;
            index++;
        }

        const listToReverse = leftNode.next;
        leftNode.next = null;
        const rightEdge = rightNode.next;
        rightNode.next = null;

        const [reverseHead, reverseTail] = this.reverseList(listToReverse);

        leftNode.next = reverseHead;
        reverseTail.next = rightEdge;

        return dummy.next;
    }

    reverseList(head) {
        const oldHead = head;
        let prev = null;
        let curr = head;

        while (curr !== null) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        return [prev, oldHead];
    }
}
