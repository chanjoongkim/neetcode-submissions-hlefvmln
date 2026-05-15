class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        const prefixSums = new Array(nums.length + 1).fill(0);

        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            prefixSums[i + 1] = sum;
        }

        // work from indices 1 - prefixSums.length - 1

        console.log(prefixSums);

        // range of output values [(max of nums), (sum of nums)]
        // do binary search over that?

        let left = Math.max(...nums);
        let right = nums.reduce((acc, curr) => acc + curr, 0);

        let result = Number.MAX_SAFE_INTEGER;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (this.canDivide(nums, prefixSums, mid, k)) {
                result = Math.min(result, mid);
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }

        return result;
    }

    canDivide(nums, prefixSums, max, k) {
        const memo = new Map();
        return this.canDivideHelper(nums, 0, prefixSums, max, k, memo);
    }

    canDivideHelper(nums, index, prefixSums, max, k, memo) {
        if (index >= nums.length && k === 0) {
            return true;
        }
        else if (k <= 0) {
            return false;
        }

        const key = index + '-' + max + '-' + k;

        if (memo.has(key)) {
            return memo.get(key);
        }

        // recursively build subarrays, see if the sum for the subarray is <= max
        // if so, then increment index and decrement k and recurse
        for (let i = index; i < nums.length; i++) {
            const subArraySum = prefixSums[i + 1] - prefixSums[index];
            if (subArraySum <= max) {
                if (this.canDivideHelper(nums, i + 1, prefixSums, max, k - 1, memo)) {
                    memo.set(key, true);
                    return true;
                }
            }
        }

        memo.set(key, false);

        return false;
    }
}
