class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        if (!nums) {
            return [];
        }

        const curr = [];
        const result = [];

        this.permuteHelper(nums, curr, result);

        return result;
    }

    permuteHelper(nums, curr, result) {
        if (nums.length === 0) {
            result.push([...curr]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            curr.push(num);
            this.permuteHelper([...nums.slice(0, i), ...nums.slice(i + 1)], curr, result);
            curr.pop();

        }

        // const num = nums.pop();
        // curr.push(num);
        // this.permuteHelper(nums, curr, result);
        // curr.pop();
        // nums.push(num);
    }
}
