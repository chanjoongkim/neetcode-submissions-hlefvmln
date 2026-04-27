class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        // brute force
        let result = 0;

        for (let i = 0; i < s.length; i++) {
            for (let j = i + 1; j <= s.length; j++) {
                const sub = s.substring(i, j);
                if (this.isPalindrome(sub)) {
                    result++;
                }
            }
        }

        return result;
    }

    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (s.at(left) !== s.at(right)) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}
