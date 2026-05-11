class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        // algorithm: use a sliding window of length k
        // and see if within a sliding window there are duplicates

        let l = 0;
        let r = 1;
        const set = new Set();
        set.add(nums[l]);

        // build initial window
        while ((r - l) < k) {
            const num = nums[r];
            if (set.has(num)) {
                return true;
            }
            set.add(num);
            r++;
        }

        console.log(r);
        console.log(set);

        for (let right = r; right < nums.length; right++) {
            const num = nums[right];
            if (set.has(num)) {
                return true;
            }
            set.add(num);

            // remove left
            set.delete(nums[l]);
            l++;
        }

        return false;
    }
}
