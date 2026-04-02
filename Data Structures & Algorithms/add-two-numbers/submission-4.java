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
        ListNode dummy = new ListNode();
        addTwoNumbersRecursive(l1, l2, 0, dummy);
        return dummy.next;

        // int carry = 0;
        // ListNode dummy = new ListNode();
        // ListNode prev = dummy;
        // while (l1 != null || l2 != null || carry != 0)  {
        //     int v1 = l1 == null ? 0 : l1.val;
        //     int v2 = l2 == null ? 0 : l2.val;

        //     int val = v1 + v2 + carry;
        //     carry = val / 10;
        //     val = val % 10;

        //     ListNode newNode = new ListNode(val);
        //     prev.next = newNode;

        //     l1 = l1 == null ? null : l1.next;
        //     l2 = l2 == null ? null : l2.next;
            
        //     prev = newNode;
        // }

        // return dummy.next;
    }

    private ListNode addTwoNumbersRecursive(ListNode l1, ListNode l2, int carry, ListNode curr) {
        if (l1 == null && l2 == null) {
            if (carry > 0) {
                ListNode newNode = new ListNode(1);
                curr.next = newNode;

                return newNode;
            } else {
                return null;
            }
        }
        
        int v1 = l1 == null ? 0 : l1.val;
        int v2 = l2 == null ? 0 : l2.val;
        int val = v1 + v2 + carry;
        carry = val / 10;
        val = val % 10;

        ListNode newNode = new ListNode(val);
        curr.next = newNode;

        newNode.next = addTwoNumbersRecursive(l1 == null ? null : l1.next, l2 == null ? null : l2.next, carry, newNode);

        return newNode;

        // if (l1 == null && l2 == null) {
        //     if (carry > 0) {
        //         ListNode newNode = new ListNode(1);
        //         curr.next = newNode;
        //         // return new "end" of list
        //         return newNode;
        //     } else {
        //         return null;
        //     }
        // }

        // if (l1 == null) {
        //     int val = l2.val + carry;
        //     carry = val / 10;
        //     val = val % 10;

        //     ListNode newNode = new ListNode(val);
        //     curr.next = newNode;

        //     newNode.next = addTwoNumbersRecursive(null, l2.next, carry, newNode);

        //     return newNode;
        // } else if (l2 == null) {
        //     int val = l1.val + carry;
        //     carry = val / 10;
        //     val = val % 10;

        //     ListNode newNode = new ListNode(val);
        //     curr.next = newNode;

        //     newNode.next = addTwoNumbersRecursive(l1.next, null, carry, newNode);

        //     return newNode;
        // } else {
        //     // normal case

        //     int val = l1.val + l2.val + carry;
        //     carry = val / 10;
        //     val = val % 10;

        //     ListNode newNode = new ListNode(val);
        //     curr.next = newNode;

        //     newNode.next = addTwoNumbersRecursive(l1.next, l2.next, carry, newNode);

        //     return newNode;
        // }
    }
}
