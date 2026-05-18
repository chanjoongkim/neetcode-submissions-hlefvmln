class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    integerBreak(n) {
        const memo = new Map();
        const result = this.getSums(n, 0, memo);

        return result;

        // return this.getMaxProduct(result);
    }

    getSums(n, currSum, memo) {
        if (currSum === n) {
            return 1;
        }

        if (memo.has(currSum)) {
            return memo.get(currSum);
        }

        // result is max product found at currSum
        let result = 0;

        for (let i = 1; i <= n - 1; i++) {
            if (currSum + i <= n) {
                const remainderProduct = this.getSums(n, currSum + i, memo);
                result = Math.max(result, i * remainderProduct);
            }
        }

        memo.set(currSum, result);

        return result;
    }

    getMaxProduct(sums) {
        let max = 0;
        for (const sum of sums) {
            const product = sum.reduce((acc, curr) => acc * curr, 1);
            max = Math.max(max, product);
        }

        return max;
    }
}
