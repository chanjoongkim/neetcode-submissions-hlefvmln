class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = new Array(n + 1).fill(-1);

        return this.climbStairsHelper(n, memo);
    }

    climbStairsHelper(n, memo) {
        if (n === 0) {
            return 1;
        } else if (n < 0) {
            return 0;
        } else if (memo[n] !== -1) {
            return memo[n];
        }

        const ways = this.climbStairsHelper(n - 1, memo) + this.climbStairsHelper(n - 2, memo);

        memo[n] = ways;
        return ways;
    }
}
