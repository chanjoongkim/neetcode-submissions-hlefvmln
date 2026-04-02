class Solution {
    class Height {
        int height;
        int index;

        Height(int height, int index) {
            this.height = height;
            this.index = index;
        }

        public String toString() {
            return "height: " + this.height + " index: " + this.index;
        }
    }
    public int largestRectangleArea(int[] heights) {
        if (heights == null || heights.length == 0) {
            return 0;
        } else if (heights.length == 1) {
            return heights[0];
        }

        // heights:      [7,1,7,2,2,4]
        
        // algorithm:
        // add first value to stack
        // iterate from 2nd index onward in heights:
        //   if current height is less than top of stack, 
        //.    pop the top of the stack. push new item to top of stack, but keep old index? but use new "min" height from current item
        //   else if current height is greater than top of stack,
        //.    add to top of stack with current item height and index
        //.  at each iteration, we should check the individual bar. Then compare it against the top of the stack to see if we can "continue" the previous
        //   rectangle area from the old height
        //.  need to handle edge case of 0 height (we should "reset" the stack then)

        Stack<Height> stack = new Stack<>();

        int largestArea = 0;
        for (int i = 0; i < heights.length; i++) {
            int currHeight = heights[i];
            // check individual bar
            largestArea = Math.max(largestArea, currHeight);

            // TODO: handle edge case of 0 height
            if (currHeight == 0) {
                // empty the stack
                stack = new Stack<>();
                continue;
            }

            if (stack.isEmpty()) {
                // add current bar and move on
                stack.push(new Height(currHeight, i));
            } else {
                // if height is greater than top, add new item to stack
                if (currHeight > stack.peek().height) {
                    stack.push(new Height(currHeight, i));
                } else {
                    // else, pop off stack until either empty or we find a height smaller
                    // while popping off, check if area is max
                    Height oldTop = null;
                    while (!stack.isEmpty() && currHeight <= stack.peek().height) {
                        oldTop = stack.pop();
                        // check if extending the old index with "current height" would be max
                        // largestArea = Math.max(largestArea, currHeight * (i - oldTop.index + 1));
                        // check if using old height and going up to (but no including) current index would be max
                        largestArea = Math.max(largestArea, oldTop.height * (i - oldTop.index));
                    }

                    if (oldTop != null) {
                        stack.push(new Height(currHeight, oldTop.index));
                    } else {
                        stack.push(new Height(currHeight, i));
                    }
                }
            }
        }

        // iterate through the stack at the end
        while (!stack.isEmpty()) {
            Height top = stack.pop();
            largestArea = Math.max(largestArea, top.height * (heights.length - top.index));
        }

        return largestArea;
    }
}
