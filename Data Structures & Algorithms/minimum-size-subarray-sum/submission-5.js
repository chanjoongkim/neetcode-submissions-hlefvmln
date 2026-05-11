class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        // algorithm:
        // use sliding window, build initial window until window sum >= target
        // if sum === target, then record length and see if it's the smallest
        // else shrink window until we are <= target
        // once again, if === target then record
        // other once we are < target, then we go right until we exceed target and repeat

        let l = 0;
        let curr = 0
        let result = Number.MAX_SAFE_INTEGER;

        // go through all nums
        for (let r = 0; r < nums.length; r++) {
            curr += nums[r];

            // if curr sum is < target, then just keep adding nums[r]
            if (curr < target) {
                continue;
            }

            // once our curr sum is >= target, we shrink our window until we no longer are >= target
            while (l <= r && curr >= target) {
                // always check if our 
                // result = Math.min(r - l + 1, result);
                curr -= nums[l];
                l++;
            }
            result = Math.min(r - l + 2, result);
        }

        return result === Number.MAX_SAFE_INTEGER ? 0 : result;
    }
}
