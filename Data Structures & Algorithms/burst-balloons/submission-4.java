class Solution {
    public int maxCoins(int[] nums) {
        int[] newNums = new int[nums.length + 2];
        newNums[0] = 1;
        newNums[nums.length + 1] = 1;

        for (int i = 0; i < nums.length; i++) {
            newNums[i + 1] = nums[i];
        }

        Map<String, Integer> memo = new HashMap<>();

        return maxCoinsHelper(newNums, 1, nums.length, memo);
    }

    private int maxCoinsHelper(int[] nums, int left, int right, Map<String, Integer> memo) {
        if (left > right) {
            return 0;
        }
        String key = left + "-" + right;

        if (memo.containsKey(key)) {
            return memo.get(key);
        }

        int max = 0;
        for (int i = left; i <= right; i++) {
            // iterate through each spot, and see if we find the max
            int currCoins = nums[left - 1] * nums[i] * nums[right + 1];
            max = Math.max(max, currCoins + maxCoinsHelper(nums, left, i - 1, memo) + maxCoinsHelper(nums, i + 1, right, memo));
        }

        memo.put(key, max);

        return max;
    }
}
