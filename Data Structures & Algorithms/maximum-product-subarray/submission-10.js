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

        // keep track of the maxProducts and the minProducts we have seen
        let maxProduct = 1;
        let minProduct = 1;

        let result = nums[0];
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            const temp = num * maxProduct;

            // if we encounter a zero, then choosing num resets it on the next iteration (maxProduct/minProduct both become zero initially)
            maxProduct = Math.max(num, num * maxProduct, num * minProduct);
            minProduct = Math.min(num, temp, num * minProduct);

            result = Math.max(result, maxProduct);
        }

        return result;
    }
}
