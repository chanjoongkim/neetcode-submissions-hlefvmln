class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if (!nums) {
            return [];
        }

        const leftToRight = new Array(nums.length + 2).fill(1);
        const rightToLeft = new Array(nums.length + 2).fill(1);

        let product = 1;
        for (let i = 0; i < nums.length; i++) {
            product *= nums[i];
            leftToRight[i + 1] = product;
        }

        product = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            product *= nums[i];
            rightToLeft[i + 1] = product;
        }

        const result = [];
        for (let i = 1; i <= nums.length; i++) {
            result.push(leftToRight[i - 1] * rightToLeft[i + 1]);
        }

        return result;
    }
}
