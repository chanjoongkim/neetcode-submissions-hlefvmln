class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> current = new ArrayList<>();

        combinationSum2Helper(candidates, 0, target, 0, current, result);

        return result;
    }

    private void combinationSum2Helper(int[] nums, int index, int target, int currentSum, List<Integer> current, List<List<Integer>> result) {
        if (currentSum == target) {
            result.add(new ArrayList<>(current));
            return;
        }

        if (currentSum > target || index >= nums.length) {
            return;
        }

        // either include nums[index] and recurse
        // or not. if we skip, we must skip all values of nums[index] to avoid duplicating the sets

        // include
        current.add(nums[index]);
        combinationSum2Helper(nums, index + 1, target, currentSum + nums[index], current, result);
        current.remove(current.size() - 1);

        // skip all indices equal to nums[index]
        while (index < nums.length - 1 && nums[index] == nums[index + 1]) {
            index++;
        }

        combinationSum2Helper(nums, index + 1, target, currentSum, current, result);

        
    }
}
