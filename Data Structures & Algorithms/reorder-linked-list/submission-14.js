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
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // move slow over by 1 if odd length list
        if (fast !== null) {
            slow = slow.next;
        }

        // slow will now be new "head" of reversed second list
        slow = this.reverseList(slow);

        this.mergeLists(head, slow);
    }

    mergeLists(list1, list2) {
        const newHead = list1;


        while (list1 !== null && list2 !== null) {
            const newList1 = list1.next;
            const newList2 = list2.next;

            list1.next = list2;
            list2.next = newList1;

            list1 = newList1;
            list2 = newList2;
        }

        if (list1 !== null) {
            list1.next = null;
        }

        return newHead;
    }

    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr != null) {
            const next = curr.next;

            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }
}
