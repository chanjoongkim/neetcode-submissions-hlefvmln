class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const result = new Array(n).fill(1);

        result[0] = 1;
        for (let i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1];

        }

        let postfix = 1;
        for (let i = n - 1; i >= 0; i--) {
            result[i] *= postfix;
            postfix *= nums[i];
        }

        return result;

        // const n = nums.length;
        // const prefixProducts = new Array(n);
        // const suffixProducts = new Array(n);

        // prefixProducts[0] = 1;
        // suffixProducts[n - 1] = 1;

        // for (let i = 1; i < n; i++) {
        //     prefixProducts[i] = nums[i - 1] * prefixProducts[i - 1];
        // }

        // for (let i = n - 2; i >= 0; i--) {
        //     suffixProducts[i] = nums[i + 1] * suffixProducts[i + 1];
        // }

        // const result = new Array(n);
        // for (let i = 0; i < n; i++) {
        //     result[i] = prefixProducts[i] * suffixProducts[i];
        // }

        // return result;
    }
}
