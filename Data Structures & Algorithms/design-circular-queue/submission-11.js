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
            console.log('one');
            const node = new ListNode(value, null, null);
            node.next = this.tail
            node.prev = this.head;
            this.head.next = node;
            this.tail.prev = node;
        }
        else {
            console.log('two');
            const oldTail = this.tail.prev;
            
            const node = new ListNode(value, null, null);
            oldTail.next = node;
            node.setNext(this.tail);
            node.setPrev(oldTail)
            this.tail.prev = node;
            // console.log('oldTail', oldTail);
            // console.log('node', node);
            
        }
        this.currSize++;

        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if (this.head.next === this.tail) {
            console.log('three');
            return false;
        }

        console.log('four');

        const result = this.head.next;
        console.log('result', result);

        this.head.next = result.next;
        console.log('head', this.head);
        console.log('tail', this.tail);
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
        if (this.currSize === 0) {
            return -1;
        }
        return this.head.next.getValue();
    }

    /**
     * @return {number}
     */
    Rear() {
        if (this.currSize === 0) {
            return -1;
        }
        // this.printList();
        return this.tail.prev.getValue();
    }

    printList() {
        console.log('printList');
        let curr = this.head;
        while (curr !== null) {
            console.log(curr.value);
            curr = curr.next;
        }
        console.log();
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
