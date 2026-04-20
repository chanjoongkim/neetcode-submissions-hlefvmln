class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        // const pq = new MaxPriorityQueue();
        // use deque to store tuple with value and index
        const deque = [];

        const result = [];

        let left = 0;
        for (let right = 0; right < nums.length; right++) {
            // remove all items from deque's end where the items are less than our current nums[right] value
            while (deque.length > 0 && deque[deque.length - 1][0] < nums[right]) {
                deque.pop();
            }
            // add current right element
            deque.push([nums[right], right]);

            // remove max nodes from deque if the index is outside our sliding window
            while (deque.length > 0 && deque[0][1] < left) {
                deque.shift();
            }

            // if we've reached our window size (right + 1), then add to result and shift window by 1 (moving left)
            if ((right + 1) >= k) {
                result.push(deque[0][0]);
                left++;
            }
        }

        return result;
    }
}
