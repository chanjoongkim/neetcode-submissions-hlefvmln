class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        // two pointer solution without extra memory
        // ptr i iterates over all numbers, skipping duplicates
        // j keeps track of unique indices to write
        let i = 1;
        let j = 1;
        while (i < nums.length) {
            while (i < nums.length && nums[i] === nums[i - 1]) {
                i++;
            }
            if (i !== nums.length) {
                nums[j] = nums[i];
                j++;
                i++;
            }
        }

        return j;

        // algorithm:
        // use a hash set to keep track of seen numbers (duplicates)
        // then use two pointers, i that iterates over all numbers and j that tracks unique numbers we will write

        // const seenNums = new Set();
        // let j = 0;
        // for (let i = 0; i < nums.length; i++) {
        //     const num = nums[i];

        //     if (seenNums.has(num)) {
        //         continue;
        //     }
        //     else {
        //         nums[j] = num;
        //         j++;
        //         seenNums.add(num);
        //     }
        // }

        // return j;
    }
}
