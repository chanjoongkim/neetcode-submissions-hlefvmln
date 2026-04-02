/*
Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

class Solution {
    public Node cloneGraph(Node node) {
        if (node == null) {
            return null;
        }

        Node newNode = new Node(node.val);
        Queue<Node> queue = new LinkedList<>();
        Set<Node> visited = new HashSet<>();
        visited.add(node);
        Map<Node, Node> map = new HashMap<>();
        map.put(node, newNode);

        queue.add(node);

        // run BFS on the original graph, creating new nodes as we go and adding them as children
        while (!queue.isEmpty()) {
            Node curr = queue.poll();

            // iterate through curr's children and add them
            Node copy = map.get(curr);
            for (Node neighbor : curr.neighbors) {
                // if I have a copy of neighbor, then reference that
                if (!map.containsKey(neighbor)) {
                    Node newNeighborCopy = new Node(neighbor.val);
                    map.put(neighbor, newNeighborCopy);
                } 

                copy.neighbors.add(map.get(neighbor));

                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    queue.add(neighbor);
                }
            }
        }

        return newNode;
    }
}