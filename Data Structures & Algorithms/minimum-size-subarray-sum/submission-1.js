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

        for (let r = 0; r < nums.length; r++) {
            curr += nums[r];
            console.log('1', r, curr);

            if (curr < target) {
                continue;
            }

            while (l <= r && curr >= target) {
                result = Math.min(r - l + 1, result);
                curr -= nums[l];
                l++;
            }
        }

        return result === Number.MAX_SAFE_INTEGER ? 0 : result;
    }
}
