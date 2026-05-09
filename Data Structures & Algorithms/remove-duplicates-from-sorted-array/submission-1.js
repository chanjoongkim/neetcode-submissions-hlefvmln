class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        // algorithm:
        // use a hash set to get all the unique numbers in a first pass
        // then keep two pointers, i that iterates over all nums, and j that is the index of the unique numbers that we will track

        const seenNums = new Set();
        let j = 0;
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (seenNums.has(num)) {
                continue;
            }
            else {
                nums[j] = num;
                j++;
                seenNums.add(num);
            }
        }

        return j;
    }
}
