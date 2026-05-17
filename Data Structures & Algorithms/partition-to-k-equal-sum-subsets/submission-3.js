class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums, k) {
        if (!nums) {
            return true;
        }

        // we can sort array to improve efficiency
        nums.sort((a, b) => b - a);
        
        const sum = nums.reduce((acc, curr) => acc + curr, 0);
        if (sum % k !== 0) {
            return false;
        }

        const target = sum / k;

        const buckets = new Array(k).fill(0);

        if (nums[0] > target) {
            return false;
        }

        return this.backtrack(nums, 0, target, buckets, k);
    }

    backtrack(nums, index, target, buckets, bucketsLeft) {
        if (index >= nums.length) {
            return bucketsLeft === 0;
        }

        // at each index, try to place nums[index] into one of our K buckets
        // each bucket must equal exactly target
        // target = sum(nums) / k

        for (let i = 0; i < buckets.length; i++) {
            // skip buckets that are the same value as the previous bucket, as we would have already tried the possibilities from
            // the starting value of the bucket
            if (i > 0 && buckets[i] === buckets[i - 1]) {
                continue;
            }
            // skip already completed buckets
            if (buckets[i] === target) {
                continue;
            }
            else if (buckets[i] + nums[index] > target) {
                continue;
            }
            else {
                buckets[i] += nums[index];
                if (this.backtrack(nums, index + 1, target, buckets, buckets[i] === target ? bucketsLeft - 1 : bucketsLeft)) {
                    return true;
                }
                buckets[i] -= nums[index];
            }
        }

        return false;
    }
}
