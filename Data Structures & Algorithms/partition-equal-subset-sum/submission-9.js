class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        // algorithm:
        // step 1: go through all nums and get the total sum. 
        // if it is odd, then return false
        // otherwise, we look for a subarray that equals (sum / 2).

        let totalSum = nums.reduce((acc, curr) => acc + curr, 0);
        if (totalSum % 2 === 1) {
            return false;
        }

        const targetSum = totalSum / 2;

        // add memo
        const memo = new Map();

        return this.findSubArray(nums, 0, 0, targetSum, memo);
    }

    findSubArray(nums, index, currSum, targetSum, memo) {
        // need to memoize index/currSum pairs, not just index as we could have index be true with curr + nums[index]
        const key = index + '-' + currSum;
        if (memo.has(key)) {
            return memo.get(index + '-' + currSum);
        }
        if (currSum === targetSum) {
            return true;
        }

        if (index >= nums.length) {
            return false;
        }

        // at each spot, try either using the current index (and adding to our currSum) and recursing
        // or skipping the current index and recursing

        // try using
        if (this.findSubArray(nums, index + 1, currSum + nums[index], targetSum, memo)) {
            memo.set(index + '-' + (currSum + nums[index]), true);
            return true;
        }

        // skip using nums[index]
        if (this.findSubArray(nums, index + 1, currSum, targetSum, memo)) {
            memo.set(key, true);
            return true;
        }

        // technically we only need to store the "false" attempts, as we immediately return true (and bubble up) if we find a true
        memo.set(key, false);

        return false;
    }
}
