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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0, head);
        ListNode prev = dummy;

        // move end over by N places
        ListNode end = head;
        for (int i = 0; i < n; i++) {
            end = end.next;
        }

        // move end until we reached the end (null)
        // prev will be the element before the "nth" node to remove
        while (end != null) {
            prev = prev.next;
            end = end.next;
        }

        prev.next = prev.next.next;
        return dummy.next;
    }
}
