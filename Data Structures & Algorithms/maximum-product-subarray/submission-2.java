class Solution {
    public int maxProduct(int[] nums) {
        if (nums.length == 1) {
            return nums[0];
        }

        int result = nums[0];
        int maxProduct = 1;
        int minProduct = 1;

        for (int i = 0; i < nums.length; i++) {
            int temp = maxProduct * nums[i];

            maxProduct = Math.max(nums[i], Math.max(nums[i] * maxProduct, nums[i] * minProduct));
            minProduct = Math.min(nums[i], Math.min(temp, nums[i] * minProduct));

            result = Math.max(result, maxProduct);
        }

        return result;
    }
}
