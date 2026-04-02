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
                if (target > val) {
                    left = mid + 1;
                } 
                else if (target < nums[left]) {
                    left = mid + 1;
                    
                } else {
                    right = mid - 1;
                }
            }
            // we're in the right sorted array
            else {
                if (target < val) {
                    right = mid - 1;
                } 
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

    private int findPivot (int[] nums) {
        int left = 0;
        int right = nums.length - 1;
        int result = -1;

        while (left < right) {
            int mid = (left + right) / 2;
            int val = nums[mid];

            // // we're in the sorted part
            // if (nums[left] <= val && val <= nums[right]) {
                
            //     return Math.min(result, nums[left]);
            // }

            // result = Math.min(result, val);
            // if (nums[left] <= val) {
            //     left = index + 1;
            // } else {
            //     right = index - 1;
            // }

            // if (nums[left] < val) {
            //     left = mid + 1;
            // } else {
            //     right = mid - 1;
            // }

            // System.out.println("l = " + left + " r = " + right + " m = " + mid + " v = " + val);

            // // found the target
            // if (val == target) {
            //     return mid;
            // }

            // // we're in the fully sorted array, so treat as normal binary search
            // if (nums[left] < val && val < nums[right]) {
            //     if (val < target) {
            //         left = mid + 1;
            //     } else {
            //         right = mid - 1;
            //     }
            // }
            // // this means val >= nums[right], so the start of the original array is on the right
            // else if (nums[left] < val) {
            //     // target is somewhere in the rotated start of the array (which is on the right)
            //     // so we need to look right
            //     if (target <= nums[right]) {
            //         left = mid + 1;
            //     } else {
            //         right = mid - 1;
            //     }

            // }
            // // this means nums[left] >= val, so the start of the original array is somewhere between
            // // left and mid
            // else {
            //     // we know the right side is fully sorted and not rotated, so check if it's on the right side
            //     if (target <= nums[right]) {
            //         left = mid + 1;
            //     } else {
            //         right = mid - 1;
            //     }
            // }
        }

        return (left + right) / 2;
    }
}
