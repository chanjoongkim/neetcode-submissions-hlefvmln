class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        // binary search, but need to return left-closest index if the value isn't in nums

        let l = 0;
        let r = nums.length - 1;
        let closest = -1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            console.log(l, r, mid);
            if (nums[mid] === target) {
                return mid;
            }
            
            if (target < nums[mid]) {
                r = mid - 1;
            }
            else {
                closest = mid;
                l = mid + 1;
            }
        }

        if (nums.at(-1) < target) {
            return nums.length;
        }
        else if (nums[0] > target) {
            return 0;
        }

        console.log(l, r);

        return l;

        // // when we break out of loop, we need to find the largest number that is < target
        // console.log(l, nums[l]);
        // console.log(r, nums[r]);

        

        // if (nums[l] > target) {
        //     return l - 1;
        // }
        // return r - 1;

    }
}
