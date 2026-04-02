class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (!s) {
            return true;
        }

        let leftPtr = 0;
        let rightPtr = s.length - 1;

        while (leftPtr < rightPtr) {
            const leftChar = s.charAt(leftPtr);
            if (!this.isAlphaNumeric(leftChar)) {
                leftPtr++;
                continue;
            }

            const rightChar = s.charAt(rightPtr);
            if (!this.isAlphaNumeric(rightChar)) {
                rightPtr--;
                continue;
            }

            const lowercaseLeftChar = leftChar.toLowerCase();
            const lowercaseRightChar = rightChar.toLowerCase();

            if (lowercaseLeftChar !== lowercaseRightChar) {
                return false;
            }

            leftPtr++;
            rightPtr--;
        }

        return true;
    }

    isAlphaNumeric(c) {
        return /^[a-z0-9]$/i.test(c);
    }
}
