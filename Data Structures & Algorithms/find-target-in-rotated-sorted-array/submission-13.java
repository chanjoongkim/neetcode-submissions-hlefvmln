class Solution {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int val = nums[mid];

            if (val == target) {
                return mid;
            }
            // we're in the left sorted array
            else if (nums[left] <= val) {
                // if target > mid, then we always go right
                if (target > val) {
                    left = mid + 1;
                } 
                // if target <= mid, we need to check left-most value
                // if target < left value, then we need to check right
                else if (target < nums[left]) {
                    left = mid + 1;
                    
                } else {
                    right = mid - 1;
                }
            }
            // we're in the right sorted array
            else {
                // if target < mid, go left
                if (target < val) {
                    right = mid - 1;
                } 
                // if target >= mid, we need to check right most value
                // if target > right valuek, we need to check left
                else if (target > nums[right]) {
                    right = mid - 1;
                }
                else {
                    left = mid + 1;
                }
            }
        }

        return -1;
    }
}
