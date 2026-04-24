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
        const used = new Array(nums.length).fill(false);

        this.permuteHelper(nums, used, curr, result);

        return result;
    }

    permuteHelper(nums, used, curr, result) {
        if (curr.length === nums.length) {
            result.push([...curr]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!used[i]) {
                used[i] = true;
                const num = nums[i];
                curr.push(num);
                this.permuteHelper(nums, used, curr, result);
                curr.pop();
                used[i] = false;
            }
        }
    }
}
