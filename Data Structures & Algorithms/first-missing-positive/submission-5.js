class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        // cyclic sort
        // we know the result must be between [1, n + 1] inclusive by definition
        // so we'll just set each number between [1, n] to the index i - 1 (so value 1 maps to index 0, value 2 maps to index 1, N maps to n - 1, etc.)
        // then afterwards find the first number where nums[i] !== i + 1

        // cyclic sort
        for (let i = 0; i < nums.length; i++) {
            while (1 <= nums[i] && nums[i] <= nums.length && nums[i] !== nums[nums[i] - 1]) {
                const temp1 = nums[i];
                const temp2 = nums[i] - 1;
                nums[i] = nums[nums[i] - 1];
                nums[temp2] = temp1;
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== i + 1) {
                return i + 1;
            }
        }

        return nums.length + 1;
    }
}
