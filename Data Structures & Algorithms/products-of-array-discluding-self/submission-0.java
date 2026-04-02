class Solution {
    public int[] productExceptSelf(int[] nums) {
        // test for single num case

        //.       0            1             2            3
        //   [    1,           2,            4,           6     ]
        // [n[-1] * n[1], n[0] * n[2],  n[1] * n[3], n[2] * n[4]]


        //                [1,  2,  4, 6]
        // prefix:     [1, 1,  1,  2, 8, 1]
        // suffix:     [1, 48, 24, 6, 1, 1]
        int[] prefixProducts = new int[nums.length + 2];
        int[] suffixProducts = new int[nums.length + 2];

        prefixProducts[0] = 1;
        prefixProducts[prefixProducts.length - 1] = 1;

        suffixProducts[0] = 1;
        suffixProducts[suffixProducts.length - 1] = 1;

        int prefixProduct = prefixProducts[0];
        // go left to right, fill out prefix products
        for (int i = 0; i < nums.length; i++) {
            prefixProducts[i + 1] = prefixProduct;
            prefixProduct *= nums[i];
        }

        int suffixProduct = suffixProducts[suffixProducts.length - 1];
        for (int i = nums.length - 1; i >= 0; i--) {
            suffixProducts[i + 1] = suffixProduct;
            suffixProduct *= nums[i];
        }

        int[] result = new int[nums.length];
        for (int i = 1; i <= result.length; i++) {
            result[i - 1] = prefixProducts[i] * suffixProducts[i];
        }

        return result;
    }
}  
