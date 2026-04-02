class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        const memo = new Map();

        return this.dfs(s, 0, p, 0, memo);
    }

    dfs(s, sIndex, p, pIndex, memo) {
        if (pIndex >= p.length) {
            return sIndex >= s.length;
        }

        const key = sIndex + '-' + pIndex;
        if (memo.has(key)) {
            return memo.get(key);
        }

        if (pIndex + 1 < p.length && p.charAt(pIndex + 1) === '*') {
            const precedingChar = p.charAt(pIndex);

            if (this.dfs(s, sIndex, p, pIndex + 2, memo)) {
                return true;
            }

            while (sIndex < s.length && (precedingChar === '.' || s.charAt(sIndex) === precedingChar)) {
                if (this.dfs(s, sIndex + 1, p, pIndex + 2, memo)) {
                    return true;
                }
                sIndex++;
            }
            memo.set(key, false);
            return false;
        } else if (p.charAt(pIndex) === '.' || s.charAt(sIndex) === p.charAt(pIndex)) {
            return this.dfs(s, sIndex + 1, p, pIndex + 1, memo);
        } else {
            memo.set(key, false);
            return false;
        }
    }
}
