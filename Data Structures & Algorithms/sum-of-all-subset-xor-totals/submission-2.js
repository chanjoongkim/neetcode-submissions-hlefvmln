class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        const curr = [];
        const sums = [];

        // O (2^N * N) because we have 2^N subsets, and for each subset we do N operation to get XOR sum
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
