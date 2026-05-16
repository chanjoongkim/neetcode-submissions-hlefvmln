class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        const curr = [];
        const sums = [];

        this.backtrack(nums, 0, curr, sums);

        return sums.reduce((acc, curr) => acc + curr, 0);
    }

    backtrack(nums, index, curr, sums) {
        if (index >= nums.length) {
            // get XOR of all elements in curr
            const sum = this.xorSum(curr);
            sums.push(sum);
            return;
        }

        // at each index, either skip the current index element or include in current subset
        
        // include
        curr.push(nums[index]);
        this.backtrack(nums, index + 1, curr, sums);
        curr.pop();

        // skip
        this.backtrack(nums, index + 1, curr, sums);
    }

    xorSum(curr) {
        return curr.reduce((acc, curr) => acc ^ curr, 0);
    }
}
