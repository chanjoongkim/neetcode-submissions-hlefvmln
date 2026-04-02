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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int carry = 0;
        ListNode dummy = new ListNode();
        ListNode prev = dummy;
        while (l1 != null || l2 != null || carry != 0)  {
            int v1 = l1 == null ? 0 : l1.val;
            int v2 = l2 == null ? 0 : l2.val;

            int val = v1 + v2 + carry;
            carry = val / 10;
            val = val % 10;

            ListNode newNode = new ListNode(val);
            prev.next = newNode;

            l1 = l1 == null ? null : l1.next;
            l2 = l2 == null ? null : l2.next;
            
            prev = newNode;
        }

        return dummy.next;
    }
}
