class ListNode {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }

    setNext(next) {
        this.next = next;
    }

    setPrev(prev) {
        this.prev = prev;
    }

    getValue() {
        return this.value;
    }
}

class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.currSize = 0;
        this.maxSize = k;
        this.head = new ListNode(0, null, null);
        this.tail = new ListNode(0, null, null);

        this.head.setNext(this.tail);
        this.tail.setPrev(this.head);
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        // no space
        if (this.currSize >= this.maxSize) {
            return false;
        }

        // if no nodes, then add new node and set the node's prev to head, and next to tail
        // then set head.next to node and tail.prev to node
        if (this.tail.prev === this.head) {
            const node = new ListNode(value, this.tail, this.head);
            this.head.next = node;
            this.tail.prev = node;
        }
        // else, create new node
        // then set old end to new node
        // and set tail.prev to new node
        else {
            const oldTail = this.tail.prev;
            const node = new ListNode(value, this.tail, oldTail);
            oldTail.next = node;
            this.tail.prev = node;
            
        }
        this.currSize++;

        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if (this.head.next === this.tail) {
            return false;
        }

        // get head.next (head of queue)
        const result = this.head.next;

        // then replace front of queue with the next
        this.head.next = result.next;
        this.currSize--;

        // special case where if we have no more nodes, then reset tail.prev to head
        if (this.currSize === 0) {
            this.tail.prev = this.head;
        }

        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.head.next.getValue();
    }

    /**
     * @return {number}
     */
    Rear() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.tail.prev.getValue();
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.currSize === 0;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.currSize === this.maxSize;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
