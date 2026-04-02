class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        const memo = new Map();
        return this.dfs(s1, 0, s2, 0, s3, 0, memo);
    }

    dfs(s1, i1, s2, i2, s3, i3, memo) {
        if (i1 >= s1.length && i2 >= s2.length && i3 >= s3.length) {
            return true;
        }

        if (i1 >= s1.length && i2 >= s2.length) {
            return false;
        }

        if (i3 >= s3.length) {
            return false;
        }
 
        const key = i1 + '-' + i2 + '-' + i3;
        if (memo.has(key)) {
            return memo.get(key)
        }

        let result = false;

        if (i1 >= s1.length) {
            if (s2.charAt(i2) !== s3.charAt(i3)) {
                memo.set(key, false);
                return false;
            }
            result = this.dfs(s1, i1, s2, i2 + 1, s3, i3 + 1, memo);
        } else if (i2 >= s2.length) {
            if (s1.charAt(i1) !== s3.charAt(i3)) {
                memo.set(key, false);
                return false;
            }
            result = this.dfs(s1, i1 + 1, s2, i2, s3, i3 + 1, memo);
        } else {
            if (s1.charAt(i1) === s3.charAt(i3)) {
                if (this.dfs(s1, i1 + 1, s2, i2, s3, i3 + 1, memo)) {
                    memo.set(key, true);
                    return true;
                }
            }
            if (s2.charAt(i2) === s3.charAt(i3)) {
                if (this.dfs(s1, i1, s2, i2 + 1, s3, i3 + 1, memo)) {
                    memo.set(key, true);
                    return true;
                }
            }
        }

        memo.set(key, result);
        return result;
    }
}
