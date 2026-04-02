class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let result = '';
        for (let i = 0; i < s.length; i++) {
            const oddPalindrome = this.longestPalindromeHelper(s, i, true);
            const evenPalindrome = this.longestPalindromeHelper(s, i, false);

            const longer = oddPalindrome.length > evenPalindrome.length ? oddPalindrome : evenPalindrome;
            result = longer.length > result.length ? longer : result;
        }

        return result;
    }

    longestPalindromeHelper(s, i, oddLength) {
        let left = i;
        let right = oddLength ? i : i + 1;

        let palindrome = '';

        while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
            palindrome = s.slice(left, right + 1);
            left--;
            right++;
        }

        return palindrome;
    } 
}
