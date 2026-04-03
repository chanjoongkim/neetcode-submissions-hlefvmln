class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> subset = new ArrayList<>();

        subsetsHelper(nums, 0, subset, result);
        
        return result;
    }

    private void subsetsHelper(int[] nums, int index, List<Integer> subset, List<List<Integer>> result) {
        // if index is out of bounds, then we reached the end, so we should add our current subset
        if (index >= nums.length) {
            // TODO: need to look up how to make a deep copy of list
            result.add(new ArrayList<>(subset));
            return;
        }

        // at very index, we have 2 choices to make
        // either include the current element at index and recurse
        // or skip this element and recurse
        // both options are valid, so we'll do that at every step

        // skip element
        subsetsHelper(nums, index + 1, subset, result);

        // include element
        subset.add(nums[index]);
        subsetsHelper(nums, index + 1, subset, result);
        // remove element afterwards from subset
        subset.remove(subset.size() - 1);
    }
}
