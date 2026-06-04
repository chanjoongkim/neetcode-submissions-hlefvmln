class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const set = new Set<number>();

        for (const num of nums) {
            if (set.has(num)) {
                return true;
            }
            set.add(num);
        }

        return false;
    }
}
