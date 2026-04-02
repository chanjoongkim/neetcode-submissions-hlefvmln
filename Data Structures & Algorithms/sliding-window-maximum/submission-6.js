class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const deque = [];

        const result = [];

        let left = 0;
        for (let r = 0; r < nums.length; r++) {
            while (deque.length > 0 && deque[deque.length - 1][0] < nums[r]) {
                deque.pop();
            }
            deque.push([nums[r], r]);

            // remove max nodes from deque if their index is left of left
            while (deque.length > 0 && deque[0][1] < left) {
                deque.shift();
            }

            // if we've reached our window size, then add to result
            // and shift window by 1
            if ((r + 1) >= k) {
                result.push(deque[0][0]);
                left++;
            }
        }

        return result;
    }
}
