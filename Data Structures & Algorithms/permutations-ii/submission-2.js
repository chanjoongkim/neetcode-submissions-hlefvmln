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
        if (curr.length === nums.length) {
            result.push([...curr]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === -Infinity) {
                continue;
            }

            if (i > 0 && nums[i] === nums[i - 1] && nums[i - 1] !== -Infinity) {
                continue;
            }


            const num = nums[i];
            // add nums[i] to curr and remove nums[i] from nums, then recurse for each index
            // const newNums = [...nums.slice(0, i), ...nums.slice(i + 1)];
            nums[i] = -Infinity
            curr.push(num);

            this.backtrack(nums, curr, result);

            curr.pop();
            nums[i] = num;

            // // skip duplicates
            // while (i + 1 < nums.length && nums[i + 1] !== -Infinity && nums[i] === nums[i + 1]) {
            //     i++;
            // }
            // i++;
            
        }
    }
}
