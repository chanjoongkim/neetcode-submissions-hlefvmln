class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        const result = [];
        for (let i = 0; i < nums.length - 2; i++) {
            // skip duplicates of i
            if (nums[i] === nums[i - 1]) {
                continue;
            }
            let j = i + 1;
            let k = nums.length - 1;
            const target = 0 - nums[i];

            // effectively do twoSum, while skipping duplicates
            while (j < k) {
                const sum = nums[j] + nums[k];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[k]]);
                    // move the j pointer (doesn't matter if we move j or k)
                    j++;
                    // check if j is duplicated
                    while (j < k && nums[j] === nums[j - 1]) {
                        j++;
                    }
                } else if (sum < target) {
                    j++;
                } else {
                    k--;
                }
            }
        }

        return result;
    }
}
