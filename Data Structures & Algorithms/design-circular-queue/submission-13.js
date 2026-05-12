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

        if (this.tail.prev === this.head) {
            const node = new ListNode(value, null, null);
            node.next = this.tail
            node.prev = this.head;
            this.head.next = node;
            this.tail.prev = node;
        }
        else {
            const oldTail = this.tail.prev;
            
            const node = new ListNode(value, null, null);
            oldTail.next = node;
            node.setNext(this.tail);
            node.setPrev(oldTail)
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

        const result = this.head.next;

        this.head.next = result.next;
        this.currSize--;

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
