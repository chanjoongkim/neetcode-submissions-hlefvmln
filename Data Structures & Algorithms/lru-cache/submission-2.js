class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
        // create dummy head/tail to avoid nulls
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);

        // have head/tail point to each other to avoid nulls
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // remove a node from the linked list by resetting its pointers to prev/next
    remove(node) {
        const oldPrev = node.prev;
        const oldNext = node.next;

        oldPrev.next = oldNext;
        oldNext.prev = oldPrev;
    }

    // insert a node into the end of the linked list
    insert(node) {
        // our actual tail is prev of our dummy tail
        const oldTail = this.tail.prev;
        oldTail.next = node;
        node.prev = oldTail;

        // update dummy and real tails
        node.next = this.tail;
        this.tail.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }

        const node = this.cache.get(key);

        // need to "reset" the order in our linked list since we used this key
        // basically we can just remove it from our linked list and re-add it
        this.remove(node);
        this.insert(node);

        return node.val;   
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // if we already have a value, just update it and reset the order
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.val = value;

            this.remove(node);
            this.insert(node);
        } else {
            // add it to our map
            // then check if we need to evict an old node
            const node = new Node(key, value);
            this.cache.set(key, node);
            this.insert(node);

            if (this.cache.size > this.capacity) {
                const oldHead = this.head.next;

                this.remove(oldHead);
                this.cache.delete(oldHead.key);
            }
        }
    }
}
