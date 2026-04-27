class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n < 2) {
            return n;
        }

        const ways = new Array(n + 1).fill(0);

        ways[n] = 1;
        ways[n - 1] = 1;
        for (let i = n - 2; i >= 0; i--) {
            ways[i] = ways[i + 1] + ways[i + 2];
        }

        return ways[0];
        
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
