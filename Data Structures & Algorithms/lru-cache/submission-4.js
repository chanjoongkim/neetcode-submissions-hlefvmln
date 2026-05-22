class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(0, 0);
        this.tail = new ListNode(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.size = 0;
    }

    length() {
        return this.size;
    }

    popRight() {
        const oldTail = this.tail.prev;
        
        this.tail.prev = oldTail.prev;
        oldTail.prev.next = this.tail;

        this.size--;

        oldTail.next = null;
        oldTail.prev = null;
        return oldTail;
    }

    pop(node) {
        const left = node.prev;
        const right = node.next;

        left.next = right;
        right.prev = left;

        node.prev = null;
        node.next = null;

        this.size--;

        return node;
    }

    popLeft() {
        const oldHead = this.head.next;

        this.head.next = oldHead.next;
        oldHead.next.prev = this.head;

        this.size--;

        oldHead.next = null;
        oldHead.prev = null;

        return oldHead;
    }

    pushRight(node) {
        const oldTail = this.tail.prev;

        oldTail.next = node;
        node.prev = oldTail;

        node.next = this.tail;
        this.tail.prev = node;

        this.size++;
    }

    pushLeft(node) {
        const oldHead = this.head.next;

        oldHead.prev = node;
        node.next = oldHead;

        node.prev = this.head;
        this.head.next = node;

        this.size++;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        // map of key -> node
        this.nodeMap = new Map();
        this.linkedList = new LinkedList();
    }
    
    /**
     * Helper function to increment the counter for each node as it is accessed
     */
    counter(node) {
        // need to move this node from wherever in the linked list to the back (right) since it was recently used
        this.linkedList.pop(node);
        this.linkedList.pushRight(node);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.nodeMap.has(key)) {
            return -1;
        }

        const node = this.nodeMap.get(key);

        this.counter(node);

        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // just update existing value and call counter
        if (this.nodeMap.has(key)) {
            const node = this.nodeMap.get(key);
            node.value = value;

            this.counter(node);
            return;
        }

        // need to delete the LRU node
        if (this.nodeMap.size === this.capacity) {
            const deletedNode = this.linkedList.popLeft();
            this.nodeMap.delete(deletedNode.key);
        }

        const newNode = new ListNode(key, value);
        this.nodeMap.set(key, newNode);

        this.linkedList.pushRight(newNode);
    }
}
