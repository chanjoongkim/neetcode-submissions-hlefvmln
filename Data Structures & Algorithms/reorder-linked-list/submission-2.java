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

        int length = 1;
        ListNode curr = head;
        while (curr != null) {
            curr = curr.next;
            length++;
        }

        ListNode list2Head = head;
        for (int i = 0; i < length / 2; i++) {
            list2Head = list2Head.next;
        }

        list2Head = reverseList(list2Head);

        mergeLists(head, list2Head);
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
