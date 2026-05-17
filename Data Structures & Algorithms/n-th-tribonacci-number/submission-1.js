class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        if (n < 3) {
            if (n === 0) {
                return 0;
            }
            else if (n === 1) {
                return 1;
            }
            else {
                return 1;
            }
        }

        let t0 = 0;
        let t1 = 1;
        let t2 = 1;

        let i = 2;
        while (i < n) {
            const temp = t0 + t1 + t2;
            t0 = t1;
            t1 = t2;
            t2 = temp;
            i++;
        }

        return t2;
    }
}
