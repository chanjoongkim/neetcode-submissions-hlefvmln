/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    public Node copyRandomList(Node head) {
        Map<Node, Node> map = new HashMap<>();

        // create copies of each node, without the Random value set yet.
        // map will contain key-value pair, where key is the original node and value is the copy

        Node curr = head;
        while (curr != null) {
            map.put(curr, new Node(curr.val));
            curr = curr.next;
        }

        curr = head;
        while (curr != null) {
            // go through original list, and set the "next" and "random" pointers to match the copies we made
            Node copyNode = map.get(curr);
            if (curr.next != null) {
                copyNode.next = map.get(curr.next);
            }
            if (curr.random != null) {
                copyNode.random = map.get(curr.random);
            }
            curr = curr.next;
        }

        return map.get(head);
    }
}
