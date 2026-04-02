class Node {
    constructor(key, value, prev, next) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {
    
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new Node(0, 0, null, null);
        this.tail = new Node(0, 0, null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    remove(node) {
        const oldPrev = node.prev;
        const oldNext = node.next;

        oldPrev.next = oldNext;
        oldNext.prev = oldPrev;
    }

    add(node) {
        const oldPrev = this.tail.prev;
        oldPrev.next = node;

        node.prev = oldPrev;

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
        this.remove(node);
        this.add(node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.value = value;
            this.cache.set(key, node);

            this.remove(node);
            this.add(node);
        } else {
            const node = new Node(key, value, null, null);

            this.cache.set(key, node);
            this.add(node);

            if (this.cache.size > this.capacity) {
                // remove head
                const oldHead = this.head.next;
                this.remove(oldHead);
                this.cache.delete(oldHead.key);
            }
        }
    }
}
