class Solution {
    public List<List<Integer>> combinationSum(int[] nums, int target) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> current = new ArrayList<>();

        combinationSumHelper(nums, 0, target, 0, current, result);

        return result;
    }

    private void combinationSumHelper(int[] nums, int index, int target, int currentSum, List<Integer> current, List<List<Integer>> result) {
        if (index >= nums.length) {
            // check if current sum == target
            if (currentSum == target) {
                result.add(new ArrayList<>(current));
            }

            return;
        }

        // found a combination, so add and return
        if (currentSum == target) {
            result.add(new ArrayList<>(current));
            return;
        }

        // we've exceeded target, and since all numbers in nums are positive, we'll never reach target by going further so return
        if (currentSum > target) {
            return;
        }

        // at each index, either choose to include it in current and recurse
        // or choose to skip it and recurse
        
        // skip and recurse
        combinationSumHelper(nums, index + 1, target, currentSum, current, result);

        // include num
        int num = nums[index];
        current.add(num);
        combinationSumHelper(nums, index, target, currentSum + num, current, result);

        // remove the num we just added to backtrack
        current.remove(current.size() - 1);
    }
}
