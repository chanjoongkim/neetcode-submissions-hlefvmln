class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> current = new ArrayList<>();

        subsetsHelper(nums, 0, result, current);

        return result;
    }

    private void subsetsHelper(int[] nums, int index, List<List<Integer>> result, List<Integer> current) {
        if (index >= nums.length) {
            result.add(new ArrayList<>(current));
            return;
        }

        // at each index, either skip adding the current element at index and recurse
        // and also add the current element, then recurse

        // skip element
        subsetsHelper(nums, index + 1, result, current);
        
        current.add(nums[index]);

        subsetsHelper(nums, index + 1, result, current);

        // remove last element at the end of current
        current.remove(current.size() - 1);
    }
}
