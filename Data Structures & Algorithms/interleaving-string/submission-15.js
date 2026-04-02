class Solution {
    isInterleave(s1, s2, s3) {
        const memo = {};
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
        if (key in memo) {
            return memo[key];
        }

        let result = false;

        if (i1 >= s1.length) {
            if (s2.charAt(i2) !== s3.charAt(i3)) {
                memo[key] = false;
                return false;
            }
            result = this.dfs(s1, i1, s2, i2 + 1, s3, i3 + 1, memo);
        } else if (i2 >= s2.length) {
            if (s1.charAt(i1) !== s3.charAt(i3)) {
                memo[key] = false;
                return false;
            }
            result = this.dfs(s1, i1 + 1, s2, i2, s3, i3 + 1, memo);
        } else {
            if (s1.charAt(i1) === s3.charAt(i3)) {
                if (this.dfs(s1, i1 + 1, s2, i2, s3, i3 + 1, memo)) {
                    memo[key] = true;
                    return true;
                }
            }
            if (s2.charAt(i2) === s3.charAt(i3)) {
                if (this.dfs(s1, i1, s2, i2 + 1, s3, i3 + 1, memo)) {
                    memo[key] = true;
                    return true;
                }
            }
        }

        memo[key] = result;
        return result;
    }
}
