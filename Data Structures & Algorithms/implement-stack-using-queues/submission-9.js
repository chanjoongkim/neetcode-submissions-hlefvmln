class MyStack {
    constructor() {
        this.mainQ = new Queue();
        this.emptyQ = new Queue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        // add element to emptyQ
        // then add all elements from mainQ to emptyQ 
        // then swap Qs to always have empty q
        // essentially we are adding numbers in reverse

        this.emptyQ.push(x);

        while (!this.mainQ.isEmpty()) {
            this.emptyQ.push(this.mainQ.pop());
        }

        [this.mainQ, this.emptyQ] = [this.emptyQ, this.mainQ];
    }

    /**
     * @return {number}
     */
    pop() {
        return this.mainQ.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.mainQ.front();
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.mainQ.isEmpty();
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
