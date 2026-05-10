class MyQueue {
    constructor() {
        this.mainStack = [];
        this.emptyStack = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        // step 1: push everything from mainStack to emptyStack
        // step 2: push x to emptyStack (which is actually filled)
        // step 3: swap main and empty stacks

        while (this.mainStack.length !== 0) {
            this.emptyStack.push(this.mainStack.pop());
        }
        this.emptyStack.push(x);

        // move everything back from empty to main
        while (this.emptyStack.length !== 0) {
            this.mainStack.push(this.emptyStack.pop());
        }
    }

    /**
     * @return {number}
     */
    pop() {
        return this.mainStack.pop();
    }

    /**
     * @return {number}
     */
    peek() {
        return this.mainStack.at(-1);
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.mainStack.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
