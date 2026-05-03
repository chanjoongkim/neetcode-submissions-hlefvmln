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

        return this.isInterleaveHelper(s1, 0, s2, 0, s3, 0, memo);
    }

    isInterleaveHelper(s1, i1, s2, i2, s3, i3, memo) {
        if (i1 >= s1.length && i2 >= s2.length && i3 >= s3.length) {
            return true;
        } 
        else if (i3 >= s3.length || (i1 >= s1.length && i2 >= s2.length)) {
            return false;
        }
        const key = i1 + '-' + i2 + '-' + i3;

        if (key in memo) {
            return memo[key];
        }

        let result = false;

        if (i1 >= s1.length) {
            if (s2.at(i2) !== s3.at(i3)) {
                result = false;
            }
            else {
                result = this.isInterleaveHelper(s1, i1, s2, i2 + 1, s3, i3 + 1, memo);
            }
        }
        else if (i2 >= s2.length) {
            if (s1.at(i1) !== s3.at(i3)) {
                result = false;
            }
            else {
                result = this.isInterleaveHelper(s1, i1 + 1, s2, i2, s3, i3 + 1, memo);
            }
        } else {
            if (s1.at(i1) === s3.at(i3)) {
                result = this.isInterleaveHelper(s1, i1 + 1, s2, i2, s3, i3 + 1, memo);
            }
            if (s2.at(i2) === s3.at(i3)) {
                result = this.isInterleaveHelper(s1, i1, s2, i2 + 1, s3, i3 + 1, memo);
            }
        }

        memo[key] = result;
        return result;
    }
}
