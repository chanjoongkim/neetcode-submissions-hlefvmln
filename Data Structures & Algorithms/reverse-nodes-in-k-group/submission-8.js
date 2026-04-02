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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        if (!head) {
            return null;
        }

        const dummy = new ListNode();
        dummy.next = head;
        let prev = dummy;
        let curr = head;

        while (true) {
            const kthNode = this.getKthNode(prev, k);
            // next group is not k-size, so we can end
            if (kthNode === null) {
                break;
            }

            const nextNode = kthNode.next;
            prev.next = null;

            // break kthNode's next so reverse list will end
            kthNode.next = null;

            const [oldHead, newHead] = this.reverseList(curr);

            oldHead.next = nextNode;
            prev.next = newHead;
            prev = oldHead;
            curr = nextNode;
        }

        return dummy.next;
    }

    getKthNode(head, k) {
        let curr = head;
        while (curr != null && k > 0) {
            curr = curr.next;
            k--;
        }

        return curr;
    }

    // reverse list and return [oldHead, newHead]
    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr !== null) {
            const next = curr.next;

            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return [head, prev];
    }
}
