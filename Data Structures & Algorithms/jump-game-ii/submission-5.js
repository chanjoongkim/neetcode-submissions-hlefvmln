class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        if (!nums) {
            return 0;
        }

        let result = 0;
        let left = 0;
        let right = 0;

        while (right < nums.length - 1) {
            // find max jump spot
            let maxJump = 0;
            for (let i = left; i <= right; i++) {
                maxJump = Math.max(maxJump, i + nums[i]);
            }
            left = right + 1;
            right = maxJump;
            result++;
        }

        return result;



        // let result = 0;
        // let index = 0;

        // while (index < nums.length - 1) {
        //     const num = nums[index];

        //     // short circuit if our current index is our last jump
        //     if (index + num >= nums.length - 1) {
        //         result++;
        //         break;
        //     }

        //     // greedily find the next "max jump" spot we can reach
        //     let maxJump = 0;
        //     let nextIndex = -1;
        //     for (let i = 1; i <= num; i++) {
        //         if (index + i + nums[index + i] >= maxJump) {
        //             maxJump = index + i + nums[index + i];
        //             nextIndex = index + i;
        //         }
        //     }

        //     result++;
        //     index = nextIndex;
        // }

        // return result;
    }
}
