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
    public ListNode reverseList(ListNode head) {
        return reverseListRecursion(head, null);
        // if (head == null) {
        //     return null;
        // }

        // ListNode current = head;
        // ListNode prev = null;

        // while (current != null) {
        //     ListNode next = current.next;
        //     current.next = prev;

        //     prev = current;
        //     current = next;
        // }

        // return prev;
    }

    private ListNode reverseListRecursion(ListNode current, ListNode prev) {
        if (current == null) {
            return prev;
        }

        ListNode next = current.next;
        current.next = prev;

        return reverseListRecursion(next, current);
    }
}
