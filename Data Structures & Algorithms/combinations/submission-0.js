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

        // starting at i, iterate until === n
        // at each index, either include the element and recurse
        // or skip the element and recurse

        // for (let i = index; i <= n; i++) {
            // include
            curr.push(index);
            this.backtrack(n, index + 1, k, curr, result);
            curr.pop();

            // skip
            this.backtrack(n, index + 1, k, curr, result);
        // }
    }
}
