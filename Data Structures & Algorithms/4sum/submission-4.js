class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        if (nums.length < 4) {
            return [];
        }
        nums.sort((a, b) => a - b);
        const result = [];
        const set = new Set();
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                // do two sum subproblem with starting from j + 1 to end of array
                const twoSumRes = this.twoSum(nums, j + 1, nums.length - 1, target - nums[i] - nums[j]);
                for (const [k, l] of twoSumRes) {
                    const key = nums[i] + '_' + nums[j] + '_' + nums[k] + '_' + nums[l];
                    if (!set.has(key)) {
                        result.push([nums[i], nums[j], nums[k], nums[l]]);
                        set.add(key);
                    }
                }
            }
        }

        return result;
    }

    twoSum(nums, l, r, target) {
        const res = new Set();

        while (l < r) {
            const sum = nums[l] + nums[r];
            if (sum === target) {
                res.add([l, r]);
                l++;
            }
            else if (sum < target) {
                l++;
            }
            else {
                r--;
            }
        }

        return res;
    }
}
