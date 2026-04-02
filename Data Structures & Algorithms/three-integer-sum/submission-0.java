class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // [-1, 0, 1, 2, -1, -4]
        // [-4, -1, -1, 0, 1, 2]

        Arrays.sort(nums);

        List<List<Integer>> result = new ArrayList<>();

        int i = 0;
        while (i < nums.length - 2) {
            List<List<Integer>> sumsWithI = twoSum(nums, (-1) * nums[i], i + 1, nums.length - 1);
            for (List<Integer> sums : sumsWithI) {
                List<Integer> solution = new ArrayList<>(sums);
                solution.add(nums[i]);
                result.add(solution);
            }

            // skip duplicates
            if (nums[i] == nums[i + 1]) {
                while (i < nums.length - 2 && nums[i] == nums[i + 1]) {
                    i++;
                }
                i++;
            } else {
                i++;
            }
        }

        return result;
    }

    private List<List<Integer>> twoSum(int[] nums, int target, int leftStart, int rightStart) {
        if (leftStart == nums.length || rightStart < 0) {
            return new ArrayList<>();
        }
        int left = leftStart;
        int right = rightStart;

        List<List<Integer>> results = new ArrayList<>();

        while (left < right) {
            // found a valid pair
            if (nums[left] + nums[right] == target) {
                results.add(new ArrayList<Integer>(Arrays.asList(nums[left], nums[right])));
                while (left < right && left < nums.length && nums[left] == nums[left + 1]) {
                    left++;
                }
                left++;
                while (left < right && right > -1 && nums[right] == nums[right - 1]) {
                    right--;
                }
                right--;
            } else if (nums[left] + nums[right] < target) {
                left++;
            } else {
                right--;
            }
        }

        return results;
    }
}
