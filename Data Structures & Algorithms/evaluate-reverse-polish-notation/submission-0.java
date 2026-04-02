class Solution {
    public int evalRPN(String[] tokens) {
        if (tokens == null || tokens.length == 0) return 0;

        Stack<Integer> stack = new Stack<>();

        // algorithm:
        // push integers onto stack
        // whenever an operator is encountered, pop the top 2 values and perform the math
        // then push the result back to the stack

        for (String token: tokens) {
            if (token.equals("+") || token.equals("-") || token.equals("*") || token.equals("/")) {
                Integer first = stack.pop();
                Integer second = stack.pop();

                if (token.equals("+")) {
                    stack.push(first + second);
                } else if (token.equals("-")) {
                    stack.push(second - first);
                } else if (token.equals("*")) {
                    stack.push(first * second);
                } else {
                    stack.push(second / first);
                }
            } else {
                stack.push(Integer.parseInt(token));
            }
        }

        // should have 1 value left
        return stack.pop();
    }
}
