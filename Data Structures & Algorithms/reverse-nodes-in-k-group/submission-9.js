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
            // get the kth node in front of prev (prev is the node right before the "start"/head of our list to reverse)
            const kthNode = this.getKthNode(prev, k);
            // next group is not k-size, so we can end
            if (kthNode === null) {
                break;
            }

            // nextNode is the node after the tail of the list to reverse (so we know which node to set the newTail.next to)
            const nextNode = kthNode.next;

            // break kthNode's next so reverse list will end
            kthNode.next = null;

            // oldHead is the new tail of the reversed this
            const [oldHead, newHead] = this.reverseList(curr);

            // oldHead (new tail) next should be the nextNode immediately following our reversed list
            oldHead.next = nextNode;
            // ensure the prev.next points to the new head of the reversed list
            prev.next = newHead;

            // prev should be the node right before the start of the new reverse list in the next iteration
            // (which is the same as the tail of the list we just reversed)
            prev = oldHead;
            // curr should be the start of the new list to reverse
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
