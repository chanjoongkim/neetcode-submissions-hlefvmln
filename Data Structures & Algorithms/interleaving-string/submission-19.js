class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if (s1.length + s2.length !== s3.length) {
            return false;
        }

        const memo = {};

        return this.isInterleaveHelper(s1, 0, s2, 0, s3, 0, true, memo) || this.isInterleaveHelper(s1, 0, s2, 0, s3, 0, false, memo);
    }

    isInterleaveHelper(s1, i1, s2, i2, s3, i3, useS1, memo) {
        if (i1 >= s1.length && i2 >= s2.length && i3 >= s3.length) {
            return true;
        } 
        else if (i3 >= s3.length || (i1 >= s1.length && useS1) || (i2 >= s2.length && !useS1)) {
            return false;
        }
        const key = i1 + '-' + i2 + '-' + i3;

        if (memo[key]) {
            return memo[key];
        }

        let result = false;

        if (useS1) {
            if (s1.at(i1) !== s3.at(i3)) {
                return false;
            }

            let index = 0;
            while (index < s1.length && s1.at(i1 + index) === s3.at(i3 + index)) {
                index++;
            }

            result = this.isInterleaveHelper(s1, i1 + index, s2, i2, s3, i3 + index, false, memo);
        } 
        else {
            if (s2.at(i2) !== s3.at(i3)) {
                return false;
            }

            let index = 0;
            while (index < s2.length && s2.at(i2 + index) === s3.at(i3 + index)) {
                index++;
            }

            result = this.isInterleaveHelper(s1, i1, s2, i2 + index, s3, i3 + index, true, memo);
        }

        memo[key] = result;
        return result;
    }
}
