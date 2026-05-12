/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let l = 1;
        let r = n;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const guessNum = guess(mid);

            if (guessNum === 0) {
                return mid;
            }
            else if (guessNum === -1) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }

        return -1;
    }
}
