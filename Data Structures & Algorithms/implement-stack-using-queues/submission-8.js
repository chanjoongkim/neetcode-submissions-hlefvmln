class MyStack {
    constructor() {
        this.topQ = new Queue();
        this.q = new Queue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        // when we get a new number, we shift everything from topQ to q until we only have 1 number in topQ

        while (!this.topQ.isEmpty()) {
            this.q.enqueue(this.topQ.dequeue());
        }

        this.topQ.enqueue(x);

        console.log('push');
        console.log(this.topQ);
        console.log(this.q);
    }

    /**
     * @return {number}
     */
    pop() {
        // assuming a valid stack state, we should always have exactly 1 number in topQ so we can return that
        // but then we need to shift from q to topQ and back, but only have 1 number left at topQ (the last number of q)

        if (this.topQ.isEmpty()) {
            return -1;
        }

        const result = this.topQ.dequeue();

        // shift q to topQ
        while (!this.q.isEmpty()) {
            this.topQ.enqueue(this.q.dequeue());
        }

        // then shift back all of topQ except the last number
        while (!this.topQ.isEmpty() && this.topQ.size() !== 1) {
            this.q.enqueue(this.topQ.dequeue());
        }


        return result;
    }

    /**
     * @return {number}
     */
    top() {
        return this.topQ.front();
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.topQ.isEmpty() && this.q.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
