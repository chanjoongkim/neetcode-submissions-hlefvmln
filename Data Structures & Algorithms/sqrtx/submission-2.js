class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if (x === 0) {
            return 0;
        }
        else if (x === 1) {
            return 1;
        }
        // look through numbers 1 - (x / 2), and see what number squared is equal or closest < than x

        let l = 1;
        let r = Math.floor(x / 2);

        let result = 1;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const square = mid * mid;
            if (square === x) {
                return mid;
            } 
            else if (square > x) {
                r = mid - 1;
            }
            else {
                result = Math.max(result, mid);
                l = mid + 1;
            }
        }

        return result;
    }
}
