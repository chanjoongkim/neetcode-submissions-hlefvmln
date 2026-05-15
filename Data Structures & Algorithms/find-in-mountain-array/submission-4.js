/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
        // do binary search to find the peak?
        // then we know both halves are sorted (back half is sorted in descending order)
        // then from there we can search for the target value

        const length = mountainArr.length();

        let l = 0;
        let r = length;
        let peakIndex = 0;
        let peakValue = mountainArr.get(0);

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const val = mountainArr.get(mid);
            const beforeMid = mountainArr.get(mid - 1);
            const afterMid = mountainArr.get(mid + 1);

            console.log(l, r, mid, val);

            // found our peak
            if (beforeMid < val && afterMid < val) {
                peakIndex = mid;
                peakValue = val;
                break;
            }
            else if (beforeMid < val) {
                l = mid + 1;
            }
            else {
                r = mid - 1;
            }

            // if val-1 spot is < val, then we are on the left side of the mountain
            // else if val-1 spot > val, then we are on the right side of the mountain
            // edge case that we are exactly at the peak... if val-1 < val and val > val+1

            // if val is <= peakValue, then that means the peak is somewhere in between old l and current r
            
            // found a higher peak so we need to keep going rightward?
            // if (val > peakValue) {
            //     peakValue = val;
            //     peakIndex = mid;
            //     l = mid + 1;
            // }
            // // peak is somewhere between oldL and r
            // else if (val <= peakValue && val >= oldPeakValue) {
            //     if (peakValue > oldPeakValue) {

            //     }
            // }
            // else {
            //     r = mid - 1;
            // }
        }

        if (peakValue === target) {
            return peakIndex;
        }

        console.log(peakIndex, peakValue);

        // now that we have the peak, do 2 binary searches
        // one for the first half (up to the peak), normal binary search
        // one for the second half (after the peak), reverse binary search

        // first half
        l = 0;
        r = peakIndex - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const val = mountainArr.get(mid);

            if (val === target) {
                return mid;
            }
            else if (val < target) {
                l = mid + 1;
            }
            else {
                r = mid - 1;
            }
        }

        l = peakIndex + 1;
        r = length;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const val = mountainArr.get(mid);
            // console.log(l, r, mid, val);

            if (val === target) {
                return mid;
            }
            else if (val < target) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }

        return -1;
    }
}
