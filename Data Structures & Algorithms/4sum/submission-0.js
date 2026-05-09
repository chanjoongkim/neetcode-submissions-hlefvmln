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
                for (let k = j + 1; k < nums.length; k++) {
                    for (let l = k + 1; l < nums.length; l++) {
                        if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
                            const key = nums[i] + '_' + nums[j] + '_' + nums[k] + '_' + nums[l];
                            if (!set.has(key)) {
                                set.add(key);
                                result.push([nums[i], nums[j], nums[k], nums[l]]);
                            }
                            
                        }
                    }
                }
            }
        }

        return result;
    }
}
