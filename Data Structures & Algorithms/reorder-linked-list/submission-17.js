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

        let fast = head.next;
        let slow = head;

        do {
            fast = fast.next.next;
            slow = slow.next;
        } while (fast !== null && fast.next !== null);

        const l2Head = slow.next;
        slow.next = null;

        const newL2Head = this.reverseList(l2Head);
        return this.mergeList(head, newL2Head);
    }

    reverseList(head) {
        if (!head) {
            return null;
        }

        let dummy = null;
        let curr = head;

        while (curr !== null) {
            const nextCurr = curr.next;
            curr.next = dummy;

            dummy = curr;
            curr = nextCurr;
        }

        return dummy;
    }

    mergeList(list1, list2) {
        if (list1 === null || list2 === null) {
            return list1 === null ? list2 : list1;
        }

        const head = list1;

        while (list1 !== null && list2 !== null) {
            const nextL1 = list1.next;
            list1.next = list2;

            const nextL2 = list2.next;
            list2.next = nextL1;

            list1 = nextL1;
            list2 = nextL2;
        }

        return head;
    }
}
