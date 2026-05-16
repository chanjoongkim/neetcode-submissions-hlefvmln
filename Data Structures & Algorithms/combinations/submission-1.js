class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const result = [];
        const curr = [];

        this.backtrack(n, 1, k, curr, result);

        return result;
    }

    backtrack(n, index, k, curr, result) {
        if (curr.length === k) {
            result.push([...curr]);
            return;
        }
        if (index > n) {
            return;
        }

        // at each "index", we can either include the element in our subset or skip it
        // don't need to iterate over [index, n] because we will end up duplicating
        
        // include
        curr.push(index);
        this.backtrack(n, index + 1, k, curr, result);
        curr.pop();

        // skip
        this.backtrack(n, index + 1, k, curr, result);
    }
}
