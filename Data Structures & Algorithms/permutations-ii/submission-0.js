class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        nums.sort((a, b) => a - b);

        const result = [];
        const curr = [];

        this.backtrack(nums, curr, result);

        return result;
    }

    backtrack(nums, curr, result) {
        if (nums.length === 0) {
            result.push([...curr]);
            return;
        }

        let i = 0;
        while (i < nums.length) {
            const num = nums[i];
            // add nums[i] to curr and remove nums[i] from nums, then recurse for each index
            const newNums = [...nums.slice(0, i), ...nums.slice(i + 1)];
            curr.push(num);

            this.backtrack(newNums, curr, result);

            curr.pop();

            // skip duplicates
            while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
                i++;
            }
            i++;
        }
    }
}
