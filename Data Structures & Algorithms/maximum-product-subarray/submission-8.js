class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        if (!nums) {
            return 0;
        }

        if (nums.length === 1) {
            return nums[0];
        }

        const maxProduct = new Array(nums.length + 1).fill(1);
        const minProduct = new Array(nums.length + 1).fill(1);

        let result = nums[0];
        for (let i = 1; i <= nums.length; i++) {
            const num = nums[i - 1];

            const max = Math.max(num, num * maxProduct[i - 1], num * minProduct[i - 1]);
            const min = Math.min(num, num * maxProduct[i - 1], num * minProduct[i - 1]);

            maxProduct[i] = max;
            minProduct[i] = min;

            result = Math.max(result, max);
        }

        return result;
    }
}
