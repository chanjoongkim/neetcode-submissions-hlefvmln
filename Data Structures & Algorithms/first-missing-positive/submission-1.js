class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        // naive approach
        // set result to 1
        // then as we encounter result, increment it
        // but we need to store a set of numbers we've seen
        // because it's possible we have seen the next positive number earlier

        let result = 1;
        let set = new Set();

        for (const num of nums) {
            set.add(num);
            if (result === num) {
                // find next positive number we haven't seen
                while (set.has(result)) {
                    result++;
                }
            }
        }

        return result;
    }
}
