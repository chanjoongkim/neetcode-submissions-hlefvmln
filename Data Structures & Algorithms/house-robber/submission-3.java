class Solution {
    public int rob(int[] nums) {
        Map<Integer, Integer> memo = new HashMap<>();
        return robHelper(nums, 0, memo);
    }

    private int robHelper(int[] nums, int index, Map<Integer, Integer> memo) {
        if (index >= nums.length) {
            return 0;
        } else if (memo.containsKey(index)) {
            return memo.get(index);
        }

        memo.put(index, Math.max(nums[index] + robHelper(nums, index + 2, memo), robHelper(nums, index + 1, memo)));
        return memo.get(index);
    }
}
