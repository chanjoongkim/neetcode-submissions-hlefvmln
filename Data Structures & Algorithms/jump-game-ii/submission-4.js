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
        let index = 0;

        while (index < nums.length - 1) {
            const num = nums[index];

            // short circuit if our current index is our last jump
            if (index + num >= nums.length - 1) {
                result++;
                break;
            }

            // greedily find the next "max jump" spot we can reach
            let maxJump = 0;
            let nextIndex = -1;
            for (let i = 1; i <= num; i++) {
                if (index + i + nums[index + i] >= maxJump) {
                    maxJump = index + i + nums[index + i];
                    nextIndex = index + i;
                }
            }

            result++;
            index = nextIndex;
        }

        return result;
    }
}
