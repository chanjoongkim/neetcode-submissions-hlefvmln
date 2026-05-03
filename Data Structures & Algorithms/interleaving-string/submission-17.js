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

        return this.isInterleaveHelper(s1, s2, s3, true) || this.isInterleaveHelper(s1, s2, s3, false);
    }

    isInterleaveHelper(s1, s2, s3, useS1) {
        console.log(s1, s2, s3, useS1);
        if (!s1 && !s2 && !s3) {
            return true;
        } 
        else if (!s3 || (!s1 && useS1) || (!s2 && !useS1)) {
            return false;
        }

        if (useS1) {
            if (s1.at(0) !== s3.at(0)) {
                return false;
            }

            let index = 0;
            while (index < s1.length && s1.at(index) === s3.at(index)) {
                index++;
            }

            return this.isInterleaveHelper(s1.substring(index), s2, s3.substring(index), false);
        } 
        else {
            if (s2.at(0) !== s3.at(0)) {
                return false;
            }

            let index = 0;
            while (index < s2.length && s2.at(index) === s3.at(index)) {
                index++;
            }

            return this.isInterleaveHelper(s1, s2.substring(index), s3.substring(index), true);
        }
    }
}
