class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (!nums) {
            return 0;
        }

        const robFirstMemo = new Map();
        const skipFirstMemo = new Map();

        const robFirst = Math.max(this.robMemo(nums, 0, true, robFirstMemo), this.robMemo(nums, 1, true, robFirstMemo));
        const skipFirst = Math.max(this.robMemo(nums, 0, false, skipFirstMemo), this.robMemo(nums, 1, false, skipFirstMemo));

        return Math.max(robFirst, skipFirst);
    }

    robMemo(nums, index, robbedFirst, memo) {
        if (memo.has(index)) {
            return memo.get(index);
        }

        if (index >= nums.length) {
            return 0;
        }

        if (index === nums.length - 1) {
            if (robbedFirst) {
                return 0;
            } else {
                memo.set(index, nums[index]);
                return nums[index];
            }
        }

        let robCurr = 0;
        if (index === 0) {
            if (robbedFirst) {
                robCurr = nums[0];
            }
        } else {
            robCurr = nums[index];
        }

        const maxRob = Math.max(robCurr + this.robMemo(nums, index + 2, robbedFirst, memo), this.robMemo(nums, index + 1, robbedFirst, memo));
        memo.set(index, maxRob);

        return maxRob;
    }
}
