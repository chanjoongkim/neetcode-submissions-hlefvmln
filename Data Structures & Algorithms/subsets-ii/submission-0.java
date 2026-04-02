class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);

        List<List<Integer>> result = new ArrayList<>();
        List<Integer> current = new ArrayList<>();
        subsetsWithDupHelper(nums, 0, current, result);

        return result;
    }

    private void subsetsWithDupHelper(int[] nums, int index, List<Integer> current, List<List<Integer>> result) {
        if (index >= nums.length) {
            result.add(new ArrayList<>(current));
            return;
        }

        // either include nums[index], or skip it
        // if we skip it, then skip all values of it

        current.add(nums[index]);
        subsetsWithDupHelper(nums, index + 1, current, result);
        current.remove(current.size() - 1);

        // skip all duplicates of nums[index];
        while (index < nums.length - 1 && nums[index] == nums[index + 1]) {
            index++;
        }
        subsetsWithDupHelper(nums, index + 1, current, result);
    }
}
