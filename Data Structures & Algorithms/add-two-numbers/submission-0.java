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
        boolean carry = false;
        ListNode dummy = new ListNode();
        
        ListNode prev = dummy;
        while (l1 != null && l2 != null) {
            int val = l1.val + l2.val;
            if (carry) {
                val++;
            }

            carry = val >= 10 ? true : false;

            ListNode newNode = new ListNode(val % 10);
            prev.next = newNode;

            l1 = l1.next;
            l2 = l2.next;
            
            prev = newNode;
        }


        // we've reached the end of l2
        while (l1 != null) {
            int val = l1.val;
            if (carry) {
                val++;
            }

            carry = val >= 10 ? true : false;

            ListNode newNode = new ListNode(val % 10);
            prev.next = newNode;

            l1 = l1.next;
            prev = newNode;
        }

        // we've reached the end of l1.
        // at most only one of the while loops will execute
        while (l2 != null) {
            int val = l2.val;
            if (carry) {
                val++;
            }

            carry = val >= 10 ? true : false;

            ListNode newNode = new ListNode(val % 10);
            prev.next = newNode;

            l2 = l2.next;
            prev = newNode;
        }

        if (carry) {
            ListNode newNode = new ListNode(1);
            prev.next = newNode;
        }

        return dummy.next;
    }
}
