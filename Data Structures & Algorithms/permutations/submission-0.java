class Solution {
    List<List<Integer>> result = new ArrayList<>();
    public List<List<Integer>> permute(int[] nums) {
        
        if (nums.length == 0) {
            return result;
        }

        List<Integer> first = new ArrayList<>();
        first.add(nums[0]);
        this.result.add(first);
        permuteHelper(nums, 1);

        return result;
    }

    private void permuteHelper(int[] nums, int index) {
        if (index >= nums.length) {
            return;
        }

        // take the current nums[index], and go through all existing sublists in result.
        // for each possible insertion index, create a new arraylist with the newly inserted num into the previous list
        // pass this new list of lists into the next call until we're done

        int num = nums[index];

        List<List<Integer>> resultCopy = new ArrayList<>(this.result);
        this.result = new ArrayList<>();
        for (List<Integer> list : resultCopy) {
            for (int i = 0; i <= list.size(); i++) {
                List<Integer> newList = new ArrayList<>(list);
                newList.add(i, num);
                this.result.add(newList);
            }
        }

        permuteHelper(nums, index + 1);
    }
}
