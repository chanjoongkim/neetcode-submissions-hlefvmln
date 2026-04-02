class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const result = [];
        const current = [];
        this.backtrack(s, result, current);

        return result;
    }

    backtrack(s, result, current) {
        if (s.length === 0) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < s.length; i++) {
            if (this.isPalindrome(s, 0, i)) {
                current.push(s.substring(0, i + 1));
                this.backtrack(s.substring(i+1), result, current);
                current.pop();
            }
        }
    }

    isPalindrome(s, l, r) {
        while (l < r) {
            if (s.charAt(l) !== s.charAt(r)) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
