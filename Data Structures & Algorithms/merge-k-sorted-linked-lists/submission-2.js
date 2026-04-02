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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists) {
            return null;
        }
        if (lists.length === 1) {
            return lists[0];
        }

        const queue = new Queue();
        lists.forEach(list => queue.enqueue(list));

        while(queue.size() > 1) {
            const newHead = this.mergeTwoLists(queue.dequeue(), queue.dequeue());
            queue.enqueue(newHead);
        }

        return queue.dequeue();
    }

    mergeTwoLists(list1, list2) {
        const dummy = new ListNode();
        let curr = dummy;

        while (list1 !== null && list2 !== null) {
            if (list1.val < list2.val) {
                curr.next = list1;
                curr = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                curr = list2;
                list2 = list2.next;
            }
        }

        if (list1 !== null) {
            curr.next = list1;
        }
        else if (list2 !== null) {
            curr.next = list2;
        }

        return dummy.next;
    }
}
