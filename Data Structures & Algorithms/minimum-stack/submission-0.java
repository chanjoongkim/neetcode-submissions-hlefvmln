class MinStack {
    class Pair {
        int val;
        int min;

        Pair(int val, int min) {
            this.val = val;
            this.min = min;
        }
    }

    Stack<Pair> stack;

    public MinStack() {
        stack = new Stack<>();
    }
    
    public void push(int val) {
        // handle special case where stack is empty
        if (this.stack.size() == 0) {
            Pair newTop = new Pair(val, val);
            this.stack.push(newTop);
        } else {
            Pair top = stack.peek();
            System.out.println("val " + val + " top.min " + top.min);
            Pair newTop = new Pair(val, Math.min(top.min, val));
            this.stack.push(newTop);
        }
    }
    
    public void pop() {
        this.stack.pop();
    }
    
    public int top() {
        Pair top = this.stack.peek();
        return top.val;
    }
    
    public int getMin() {
        return this.stack.peek().min;
    }
}
