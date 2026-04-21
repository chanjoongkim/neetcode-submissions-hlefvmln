class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        console.log(nums);

        const result = [];
        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] === nums[i - 1]) {
                continue;
            }
            let j = i + 1;
            let k = nums.length - 1;
            const target = 0 - nums[i];

            while (j < k) {
                const sum = nums[j] + nums[k];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[k]]);
                    j++;
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

    twoSum(nums, i, j, target) {
        let left = i;
        let right = j;

        while (left < right) {
            const sum = nums[left] + nums[right];

            if (sum === target) {
                return [left, right];
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        // no valid pairing
        return [];
    }
}
