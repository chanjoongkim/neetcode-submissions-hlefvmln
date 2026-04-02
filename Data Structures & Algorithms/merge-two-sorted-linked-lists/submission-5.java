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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        return mergeTwoListsRecursion(list1, list2);
        // ListNode dummy = new ListNode();
        // ListNode tail = dummy;

        // while (list1 != null && list2 != null) {
        //     if (list1.val < list2.val) {
        //         tail.next = list1;
        //         list1 = list1.next;
        //     } else {
        //         tail.next = list2;
        //         list2 = list2.next;
        //     }
        //     tail = tail.next;
        // }

        // if (list1 == null) {
        //     tail.next = list2;
        // } else {
        //     tail.next = list1;
        // }

        // return dummy.next;
    }

    private ListNode mergeTwoListsRecursion(ListNode list1, ListNode list2) {
        if (list1 == null && list2 == null) {
            return null;
        } else if (list1 == null) {
            return list2;
        } else if (list2 == null) {
            return list1;
        }

        if (list1.val < list2.val) {
            list1.next = mergeTwoListsRecursion(list1.next, list2);
            return list1;
        } else {
            list2.next = mergeTwoListsRecursion(list1, list2.next);
            return list2;
        }
    }
}