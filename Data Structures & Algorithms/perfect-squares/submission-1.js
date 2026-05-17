class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(n) {
        // step 1: find all perfect squares? all numbers from [1, sqrt(n)]
        const squares = new Array(Math.floor(Math.sqrt(n)) + 1);
        for (let i = 1; i < squares.length; i++) {
            squares[i] = i * i;
        }

        // step 2: find smallest set of numbers that sum up to n
        // smallest being defined as the least amount of numbers used

        // greedily try from the largest numbers and work backwards?
        squares.sort((a, b) => b - a);
        // pop the 0
        squares.pop();

        const memo = new Map();

        return this.dfs(n, squares, 0, 0, memo);
    }

    dfs(n, squares, curr, length, memo) {
        if (curr === n) {
            return length;
        }
        if (curr > n) {
            return 0;
        }

        if (memo.has(curr)) {
            return memo.get(curr);
        }

        let result = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < squares.length; i++) {
            if (curr + squares[i] <= n) {
                result = Math.min(result, this.dfs(n, squares, curr + squares[i], length + 1, memo));
            }
        }

        memo.set(curr, result);

        return result;
    }
}
