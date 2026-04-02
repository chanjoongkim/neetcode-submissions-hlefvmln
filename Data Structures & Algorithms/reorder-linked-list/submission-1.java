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
        // use a stack to get the first half
        // use a queue to get the second half
        // jump from stack to queue to reorder

        Stack<ListNode> stack = new Stack<>();
        Queue<ListNode> queue = new LinkedList<>();

        ListNode node = head;
        int length = 1;
        while (node != null) {
            node = node.next;
            length++;
        }

        node = head;
        for (int i = 0; i < length / 2; i++) {
            queue.add(node);
            node = node.next;
        }

        while (node != null) {
            stack.push(node);
            node = node.next;
        }

        ListNode prev = head;
        while (!queue.isEmpty() && !stack.isEmpty()) {
            ListNode stackNode = stack.pop();
            ListNode queueNode = queue.remove();

            prev.next = queueNode;
            queueNode.next = stackNode;

            prev = stackNode;
        }

        // if list length is odd, there'll be an extra element
        if (!queue.isEmpty()) {
            ListNode queueNode = queue.remove();
            prev.next = queueNode;
            prev = queueNode;
        }

        prev.next = null;
    }
}
