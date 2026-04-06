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
    /**
    original: [0,1,2,3]
    
    curr = 0
    follow = null

    next = 1
    0.next = null
    curr = 1
    follow = 0

    next = 2
    1.next = 0
    curr = 2
    follow = 1

    next = 3
    2.next = 1
    curr = 3
    follow = 2

    next = null
    3.next = 2
    curr = null
    follow = 3
    */
    public ListNode reverseList(ListNode head) {
        ListNode curr = head;
        ListNode follow = null;

        // we have 2 pointer nodes that are next to each other
        // at each step, we will record the current next node in temp,
        // then we will update curr's next to be follow and iterate
        while (curr != null) {
            ListNode next = curr.next;

            curr.next = follow;
            follow = curr;
            curr = next;
        }

        // follow should be the new head of the reversed list
        return follow;
    }
}
