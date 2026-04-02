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
    public void reorderList(ListNode head) {
        // split list into two halves
        // reverse the second half
        // merge the two lists

        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            System.out.println("s " + slow.val + " f " + fast.val);
            slow = slow.next;
            fast = fast.next.next;
        }

        // if odd length, then we need to move slow over 1 spot
        if (fast != null) {
            slow = slow.next;
        }

        if (slow != null) 
            System.out.println(slow.val);

        slow = reverseList(slow);

        mergeLists(head, slow);
    }

    private ListNode mergeLists(ListNode list1, ListNode list2) {
        ListNode newHead = list1;

        while (list1 != null && list2 != null) {
            ListNode nextList1 = list1.next;
            ListNode nextList2 = list2.next;

            list1.next = list2;
            list2.next = nextList1;

            list1 = nextList1;
            list2 = nextList2;
        }

        // if odd length list, then we'll have a last element at the end where the "next" needs to be set to null
        // if it's even length, then the while loop would take care of setting the last node.next to null
        if (list1 != null) {
            list1.next = null;
        }
        
        return newHead;
    }

    private ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while (curr != null) {
            ListNode next = curr.next;

            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // prev is now the new head of the list (previously the last node)
        return prev;
    }
}
