class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let result = 0;
        for (let i = 0; i < s.length; i++) {
            result += this.palindromes(s, i, true) + this.palindromes(s, i, false);
        }
        return result;
    }

    palindromes(s, i, oddLength) {
        let left = i;
        let right = oddLength ? i : i + 1;

        let count = 0;
        while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
            count++;
            left--;
            right++;
        }

        return count;
    }
}
