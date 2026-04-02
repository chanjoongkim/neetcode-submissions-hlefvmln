class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        if (!temperatures) {
            return [];
        }

        const stack = [];
        stack.push(temperatures.length - 1);

        const result = new Array(temperatures.length);
        result[result.length - 1] = 0;

        for (let i = temperatures.length - 2; i >= 0; i--) {
            const temp = temperatures[i];

            while ((stack.length !== 0) && temperatures[stack[stack.length - 1]] <= temp) {
                stack.pop();
            }

            if (stack.length === 0) {
                result[i] = 0;
            } else {
                result[i] = stack[stack.length - 1] - i;
            }
            stack.push(i);
        }

        return result;
    }
}
