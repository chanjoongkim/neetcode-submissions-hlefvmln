class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        if (!s) {
            return 0;
        }

        let result = 0;
        for (let i = 0; i < s.length; i++) {
            result += this.countPalindromes(s, i, true);
            result += this.countPalindromes(s, i, false);
        }

        return result;
    }

    countPalindromes(s, index, isOdd) {
        // get all palindromes where center is at index

        let left = index;
        let right = isOdd ? index : index + 1;

        let result = 0;
        while (left >= 0 && right < s.length && s.at(left) === s.at(right)) {
            result++;
            left--;
            right++;
        }

        return result;
    }
}
