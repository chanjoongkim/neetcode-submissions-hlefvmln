class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if (!nums) {
            return [];
        }

        nums.sort((a, b) => a - b);

        console.log(nums);

        let i = 0;
        let results = [];

        while (i < nums.length - 2) {
            const resultsWithI = this.twoSum(nums, (-1 * nums[i]), i + 1);
            resultsWithI.forEach(list => {
                results.push([nums[i], ...list]);
            });

            // skip duplicates
            i++;
            while (i < nums.length - 2 && nums[i] == nums[i - 1]) {
                i++;
            }
        }

        return results;
    }

    twoSum(nums, target, leftStart) {
        if (!nums) {
            return [];
        }

        const results = [];
        let left = leftStart;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum == target) {
                results.push([nums[left], nums[right]]);
                // move ptrs because we have used the possible combination of these indices
                left++;
                right--;

                // skip duplicates on left and right
                while (left < right && nums[left] == nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] == nums[right + 1]) {
                    right--;
                }
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        return results;
    }
}
