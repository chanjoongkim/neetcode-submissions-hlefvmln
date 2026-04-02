class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        if (temperatures == null || temperatures.length == 0) {
            return new int[] {};
        }
        //               0.  1.    2.    3.    4.    5.    6. 
        //              [30, 38,   30,   36,   35,   40,   28]

        // explanation: [38, 40,   36,   40,   40,   _,    _] 
        //              1-0, 5-1,  3-2,  5-3,  5-4,  5-5?, 6-6?]
        // res:         [1,  4,    1,    2,    1,    0,    0]

        // last index will always be 0

        // create a stack, starting from the end, that we push when we see a higher temperature than the stop
        // in the stack, record the temp and the index


        // last element of result is always 0, so start at the end of the array
        // stack is left to right (left is bottom):
        // <40, 5>, <38, 1>, <30, 0>

        // algorithm: start at the end of the array (set last value to 0)
        // for each index i:
        // while !(stack.isEmpty()) :
        //   if top val of stack is less than current val:
        //.    pop the top of the stack
        //.  if stack is empty, then set the result value of i to 0
        //.  else: set the result value of i to (top of stack index - i)
        // push our current val,index pair to stack

        // for our stack, we only need the indices, not a pair
        Stack<Integer> stack = new Stack<>();
        int[] result = new int[temperatures.length];

        // set last result to 0 and push last index to stack
        result[result.length - 1] = 0;
        stack.push(result.length - 1);

        for (int i = result.length - 2; i >= 0; i--) {
            int temp = temperatures[i];
            // while current temp is warmer than top of stack, pop
            while (!stack.isEmpty() && temperatures[stack.peek()] <= temp) {
                stack.pop();
            }

            if (stack.isEmpty()) {
                result[i] = 0;
            } else {
                result[i] = stack.peek() - i;
            }
            stack.push(i);
        }

        return result;
        //.          0, 1, 2, 3, 4, 5, 6
        // example: [30,38,30,36,35,40,28]
        // result:  [1 ,4 ,1 ,2 ,1 ,0 ,0]
        // stack: [5, 1, 0]
    }
}
