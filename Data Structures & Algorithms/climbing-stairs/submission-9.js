class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = new Map();

        return this.climbStairsMemo(n, 0, memo);
    }

    climbStairsMemo(n, curr, memo) {
        if (memo.has(curr)) {
            return memo.get(curr);
        }
        if (curr == n) {
            return 1;
        }
        if (curr > n) {
            return 0;
        }

        const ways = this.climbStairsMemo(n, curr + 1, memo) + this.climbStairsMemo(n, curr + 2, memo);

        memo.set(curr, ways);

        return ways;
    }
}
