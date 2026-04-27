class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (!nums) {
            return 0;
        }

        if (nums.length === 1) {
            return nums[0];
        }

        if (nums.length === 2) {
            return Math.max(nums[0], nums[1]);
        }

        // if you rob the first house, then you CANT rob the last house
        // similarly, if you skip the first house, you CAN rob the last house

        const robFirst = nums.slice(0, nums.length - 1);
        const skipFirst = nums.slice(1, nums.length);

        // const memo1 = new Array(nums.length - 1).fill(0);
        // const memo2 = new Array(nums.length - 1).fill(0);

        // memo1[memo1.length - 1] = nums[nums.length - 2];
        // memo1[memo.length - 2] = nums[nums.length - 3];

        // memo2[memo2.length - 1] = nums[nums.length - 1];
        // memo2[memo2.length - 2] = nums[nums.length - 2];

        // for (let i = memo1.length - 3; i >= 0; i--) {
        //     memo1[i] = Math.max(nums[i - 1] + memo1[i + 2])
        // }

        const robFirstMemo = new Map();
        const skipFirstMemo = new Map();

        return Math.max(this.robMemoSimple(robFirst, 0, robFirstMemo), this.robMemoSimple(skipFirst, 0, skipFirstMemo));

        // const robFirst = Math.max(this.robMemo(nums, 0, true, robFirstMemo), this.robMemo(nums, 1, true, robFirstMemo));
        // const skipFirst = Math.max(this.robMemo(nums, 0, false, skipFirstMemo), this.robMemo(nums, 1, false, skipFirstMemo));

        // return Math.max(robFirst, skipFirst);
    }

    robMemoSimple(nums, index, memo) {
        if (memo.has(index)) {
            return memo.get(index);
        }

        if (index >= nums.length) {
            return 0;
        }

        const robMax = Math.max(nums[index] + this.robMemoSimple(nums, index + 2, memo), this.robMemoSimple(nums, index + 1, memo));
        memo.set(index, robMax);
        
        return robMax;
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
