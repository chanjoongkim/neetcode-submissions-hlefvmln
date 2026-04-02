/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists.length == 0) {
            return null;
        }
        if (lists.length == 1) {
            return lists[0];
        }

        Queue<ListNode> queue = new LinkedList<>();

        for (ListNode list : lists) {
            queue.add(list);
        }

        ListNode newHead;
        while (queue.size() > 1) {
            newHead = mergeTwoLists(queue.remove(), queue.remove());
            queue.add(newHead);
        }

        return queue.remove();
    }

    private ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode();
        ListNode curr = dummy;
        while (list1 != null && list2 != null) {
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

        if (list1 != null) {
            curr.next = list1;
        }
        else if (list2 != null) {
            curr.next = list2;
        }

        return dummy.next;
    }
}
