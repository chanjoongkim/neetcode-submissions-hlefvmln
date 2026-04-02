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
    public ListNode reverseKGroup(ListNode head, int k) {
        // edge case where head is null or single
        if (head == null || head.next == null) {
            return head;
        }

        // get size of linked list
        ListNode curr = head;
        int size = 0;
        while (curr != null) {
            curr = curr.next;
            size++;
        }

        ListNode dummy = new ListNode();
        dummy.next = head;
        ListNode prev = dummy;
        curr = head;

        System.out.println("size " + size + " k " + k);

        for (int i = 0; i < size / k; i++) {
            ListNode test = dummy.next;
            while (test != null) {
                System.out.println("l: " + test.val);
                test = test.next;
            }


            System.out.println("prev = " + prev.val + " curr = " + curr.val);
            ListNode oldTail = curr;
            for (int j = 0; j < k - 1; j++) {
                System.out.println("oT " + oldTail.val);
                oldTail = oldTail.next;
            }
            ListNode nextNode = oldTail.next;
            System.out.println("prev = " + prev.val + " curr = " + curr.val + " oldTail = " + oldTail.val);

            // cut off connections with prev and nextNode
            // prev.next = curr right now
            // oldTail.next = nextNode right now
            prev.next = null;
            oldTail.next = null;

            // reverse the k-size list
            ListNode[] heads = reverseList(curr);
            
            // re-set prev.next to be newHead [index 1]
            prev.next = heads[1];

            // re-set new tail to nextNode
            heads[0].next = nextNode;

            curr = prev.next;

            // now move everything over by k steps
            for (int j = 0; j < k; j++) {
                prev = prev.next;
                curr = curr.next;
            }
        }

        return dummy.next;
    }

    // returns the [oldHead, newHead] where oldHead is now the tail, 
    // and newHead is the newHead of the reversed list
    private ListNode[] reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while (curr != null) {
            ListNode next = curr.next;

            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return new ListNode[] {head, prev};
    }
}
