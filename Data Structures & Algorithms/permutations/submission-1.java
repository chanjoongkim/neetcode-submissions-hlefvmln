class Solution {
    
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums.length == 0) {
            return result;
        }

        List<Integer> first = new ArrayList<>();
        first.add(nums[0]);
        result.add(first);
        return permuteHelper(nums, 1, result);
    }

    private List<List<Integer>> permuteHelper(int[] nums, int index, List<List<Integer>> result) {
        if (index >= nums.length) {
            return result;
        }

        // take the current nums[index], and go through all existing sublists in result.
        // for each possible insertion index, create a new arraylist with the newly inserted num into the previous list
        // pass this new list of lists into the next call until we're done

        int num = nums[index];

        List<List<Integer>> newResult = new ArrayList<>();
        for (List<Integer> list : result) {
            for (int i = 0; i <= list.size(); i++) {
                List<Integer> newList = new ArrayList<>(list);
                newList.add(i, num);
                newResult.add(newList);
            }
        }

        return permuteHelper(nums, index + 1, newResult);
    }
}
