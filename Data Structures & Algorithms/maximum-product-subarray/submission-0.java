class Solution {
    public int maxProduct(int[] nums) {
        int maxProduct = Integer.MIN_VALUE;

        for (int i = 0; i < nums.length; i++) {
            for (int j = i; j < nums.length; j++) {
                // check product of [i, j] and see if it's the max
                int currProduct = 1;
                for (int k = i; k <= j; k++) {
                    currProduct *= nums[k];
                }

                maxProduct = Math.max(maxProduct, currProduct);
            }
        }

        return maxProduct;
    }
}
