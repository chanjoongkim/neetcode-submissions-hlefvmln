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
        ListNode prev = null;
        ListNode curr = head;

        // move end over by N places
        ListNode end = head;
        for (int i = 0; i < n; i++) {
            end = end.next;
        }

        // move end until we reached the end (null)
        // prev will be the element before the "nth" node to remove
        while (end != null) {
            prev = curr;
            curr = curr.next;
            end = end.next;
        }

        // edge case where we are removing the first node
        if (prev == null) {
            return head.next;
        }

        prev.next = prev.next.next;
        return head;
    }
}
