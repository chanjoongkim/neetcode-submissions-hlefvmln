class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        if (!s) {
            return false;
        }

        // brute force:
        // try to determine 1st pass if palindrome, if not then we create
        // 2 different substrings (one is with left deleted, one is with right deleted)
        // if neither of those are palindromes then return false

        let deleted = false;
        let left = 0;
        let right = s.length - 1;
        let leftDeleted = '';
        let rightDeleted = '';

        while (left < right) {
            if (s[left] !== s[right]) {
                deleted = true;
                leftDeleted = s.slice(0, left) + s.slice(left + 1);
                rightDeleted = s.slice(0, right) + s.slice(right + 1);
                break;
            }
            left++;
            right--;
        }

        // original string is palindrome
        if (!deleted) {
            return true;
        }

        console.log(leftDeleted, rightDeleted);

        let isPalindrome = true;
        left = 0;
        right = leftDeleted.length - 1;
        while (left < right) {
            if (leftDeleted[left] !== leftDeleted[right]) {
                isPalindrome = false;
                break;
            }
            left++;
            right--;
        }

        if (isPalindrome) {
            return true;
        }

        left = 0;
        right = rightDeleted.length - 1;
        while (left < right) {
            if (rightDeleted[left] !== rightDeleted[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}
