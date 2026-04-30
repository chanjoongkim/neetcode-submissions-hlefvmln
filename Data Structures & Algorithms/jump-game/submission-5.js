class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        if (!nums) {
            return true;
        }

        let index = 0;

        while (index < nums.length - 1) {
            const num = nums[index];

            // greedily find the next spot where using that jump will get us the furthest
            let maxSpot = 0;
            let nextIndex = -1;

            for (let i = 1; i <= num; i++) {
                if (index + i + nums[index + i] >= maxSpot) {
                    maxSpot = index + i + nums[index + i];
                    nextIndex = index + i;
                }
            }

            if (nextIndex === -1) {
                return false;
            }
            index = nextIndex;
        }

        return true;
    }
}
