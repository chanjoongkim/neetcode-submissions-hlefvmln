class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        if (!s || !p) {
            return false;
        }

        // invalid regex
        if (p.at(0) === '*') {
            return false;
        }

        const memo = new Map();

        return this.dfs(s, 0, p, 0, memo);
    }

    dfs(s, sI, p, pI, memo) {
        if (sI >= s.length && pI >= p.length) {
            return true;
        }

        if (sI >= s.length) {
            // special where we have a _* at the end of p
            if (pI === p.length - 2 && p.at(pI + 1) === '*') {
                return true;
            }

            return false;
        }

        const key = sI + '-' + pI;

        if (memo.has(key)) {
            return memo.get(key);
        }

        let result = false;

        // handle *, need to have preceding character
        if (pI < p.length - 1 && p.at(pI + 1) === '*') {
            const precedingChar = p.at(pI);
            // special case of '.*'
            if (precedingChar === '.') {
                // try using more than once (we will handle "one or more times" in our recursive call)
                if (this.dfs(s, sI + 1, p, pI, memo)) {
                    result = true;
                }
                else {
                    // try using only once
                    result = this.dfs(s, sI + 1, p, pI + 2, memo);
                }
            }
            else {
                // try using the _* zero times
                if (this.dfs(s, sI, p, pI + 2, memo)) {
                    result = true;
                }
                else {
                    // try using 1 or more times if our precedingChar matches
                    if (s.at(sI) === precedingChar) {
                        // try using more than once (we will handle "one or more times" in our recursive call)
                        if (this.dfs(s, sI + 1, p, pI, memo)) {
                            result = true;
                        }
                        else {
                            // try using only once
                            result = this.dfs(s, sI + 1, p, pI + 2, memo);
                        }
                    }
                    else {
                        result = false;
                    }
                }
            }
        }
        // '.' regex without *
        else if (p.at(pI) === '.') {
            // match it to current s index and move on
            result = this.dfs(s, sI + 1, p, pI + 1, memo);
        }
        // normal chars
        else {
            if (s.at(sI) !== p.at(pI)) {
                result = false;
            }
            else {
                result = this.dfs(s, sI + 1, p, pI + 1, memo);
            }
        }

        memo.set(key, result);
        return result;
    }
}
