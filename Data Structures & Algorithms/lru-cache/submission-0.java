class LRUCache {
    class Node {
        int key;
        int val;

        Node prev;
        Node next;

        public Node(int key, int val, Node prev, Node next) {
            this.key = key;
            this.val = val;
            this.prev = prev;
            this.next = next;
        }
    }

    int capacity = 0;
    Map<Integer, Integer> valueMap;
    Map<Integer, Node> nodeMap;

    Node head;
    Node tail;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        valueMap = new HashMap<>();
        nodeMap = new HashMap<>();

        head = null;
        tail = null;
    }
    
    public int get(int key) {
        // use a hashmap to retrieve the key/value pair in O(1) time
        if (!valueMap.containsKey(key)) {
            return -1;
        }

        resetLRUList(key);
        return valueMap.get(key);
    }
    
    public void put(int key, int value) {
        // if key exists in map, then just update
        // if key does not exist, check capacity and size of key set in map
        // if key set size will exceed capacity, then remove the old (least recently used) key from map
        if (valueMap.containsKey(key)) {
            valueMap.put(key, value);
            resetLRUList(key);
        } else {
            // always add regardless
            valueMap.put(key, value);
            
            Node newNode = new Node(key, value, null, null);
            nodeMap.put(key, newNode);

            if (head == null) {
                head = newNode;
            }
            if (tail == null) {
                tail = newNode;
            } else {
                newNode.prev = tail;
                tail.next = newNode;
                tail = newNode;
            }


            // evict the least recently used node (the head)
            if (valueMap.keySet().size() > this.capacity) {
                valueMap.remove(head.key);
                Node evictedNode = nodeMap.remove(head.key);

                head = head.next;
                if (head != null) {
                    head.prev = null;
                }
            }
        }
    }

    private void resetLRUList(int key) {
        if (head == tail && head.key == key) {
            return;
        }
        System.out.println("key " + key + " head " + this.head.key + " tail " + this.tail.key);
        // "reset" the linked list position of key since it is MRU
        // fix pointers for before/after of key node
        Node keyNode = this.nodeMap.get(key);
        Node oldPrev = keyNode.prev;
        if (oldPrev != null) {
            keyNode.prev.next = keyNode.next;
        } else {
            head = keyNode.next;
        }
        
        if (keyNode.next != null) {
            keyNode.next.prev = oldPrev;
        } else {
            tail = oldPrev;
        }

        // move keyNode to the end of the list
        tail.next = keyNode;
        keyNode.prev = tail;
        keyNode.next = null;
        tail = keyNode;
    }
}
