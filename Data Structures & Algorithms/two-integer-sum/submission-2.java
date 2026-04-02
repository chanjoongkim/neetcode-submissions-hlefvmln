class Solution {
    public int[] twoSum(int[] nums, int target) {
        // this would be <Integer, ArrayList> if we had duplicates or more than 1 valid solution
        Map<Integer, Integer> complements = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (complements.containsKey(complement)) {
                return new int[] {complements.get(complement), i};
            }
            complements.put(nums[i], i);
        }

        return new int[] {-1, -1};
    }
}
