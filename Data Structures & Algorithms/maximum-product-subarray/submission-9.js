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

        let maxProduct = 1;
        let minProduct = 1;

        let result = nums[0];
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            const temp = num * maxProduct;

            maxProduct = Math.max(num, num * maxProduct, num * minProduct);
            minProduct = Math.min(num, temp, num * minProduct);

            // const max = Math.max(num, num * maxProduct[i - 1], num * minProduct[i - 1]);
            // const min = Math.min(num, num * maxProduct[i - 1], num * minProduct[i - 1]);

            // maxProduct[i] = max;
            // minProduct[i] = min;

            result = Math.max(result, maxProduct);
        }

        return result;
    }
}
