class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = new Map();
        return this.climbStairsHelper(n, memo);
    }

    climbStairsHelper(n, memo) {
        if (n < 0) {
            return 0;
        } else if (n === 0) {
            return 1;
        } else if (memo.has(n)) {
            return memo.get(n);
        }

        const ways = this.climbStairsHelper(n - 1, memo) + this.climbStairsHelper(n - 2, memo);

        memo.set(n, ways);

        return ways;
    }
}
