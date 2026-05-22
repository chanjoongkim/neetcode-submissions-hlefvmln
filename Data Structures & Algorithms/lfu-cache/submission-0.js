class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.freq = 1;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.left = new ListNode(0, 0);
        this.right = new ListNode(0, 0);
        this.left.next = this.right;
        this.right.prev = this.left;
        this.size = 0;
    }

    length() {
        return this.size;
    }

    pushRight(node) {
        const oldEnd = this.right.prev;

        oldEnd.next = node;
        node.prev = oldEnd;
        
        node.next = this.right;
        this.right.prev = node;

        this.size++;
    }

    pushLeft(node) {
        const oldHead = this.left.next;

        oldHead.prev = node;
        node.next = oldHead;

        this.left.next = node;
        node.prev = this.left;

        this.size++;
    }
    
    // pop a node in the middle
    pop(node) {
        const left = node.prev;
        const right = node.next;

        left.next = right;
        right.prev = left;

        this.size--;

        node.prev = null;
        node.next = null;
    }

    popRight() {
        const end = this.right.prev;

        const newEnd = end.prev;
        this.right.prev = newEnd;
        newEnd.next = this.right;

        this.size--;

        return end;
    }

    popLeft() {
        const head = this.left.next;

        const newHead = head.next;
        this.left.next = newHead;
        newHead.prev = this.left;

        this.size--;

        return head;
    }
}

class LFUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.lfuCount = 0;
        // map of key -> node (node stores the count)
        this.nodeMap = new Map();
        // map of count -> LinkedList
        this.listMap = new Map();
    }

    /**
     * Helper function that increments the counter/freq for a node
     * and handles moving it from one level to the next
     */
    counter(node) {
        const count = node.freq;

        node.freq++;

        const oldList = this.listMap.get(count);
        console.log(oldList);

        oldList.pop(node);

        if (!this.listMap.has(count + 1)) {
            this.listMap.set(count + 1, new LinkedList());
        }

        this.listMap.get(count + 1).pushRight(node);

        if (count === this.lfuCount && oldList.length() === 0) {
            this.lfuCount = count + 1;
        }
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
     */
    put(key, value) {
        if (this.capacity === 0) {
            return;
        }

        // update existing node
        if (this.nodeMap.has(key)) {
            const node = this.nodeMap.get(key);
            node.value = value;

            this.counter(node);
            return;
        }

        // if we reached capacity, we need to remove LFU/LRU item
        if (this.nodeMap.size === this.capacity) {
            const deleteNode = this.listMap.get(this.lfuCount).popLeft();
            this.nodeMap.delete(deleteNode.key);
        }

        const newNode = new ListNode(key, value);
        this.nodeMap.set(key, newNode);

        // set this new item to LFU of 1
        if (!this.listMap.has(1)) {
            this.listMap.set(1, new LinkedList());
        }
        this.listMap.get(1).pushRight(newNode);
        this.lfuCount = 1;
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
