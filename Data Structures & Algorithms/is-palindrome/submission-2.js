class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (!s) {
            return true;
        }

        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            const leftC = s.at(left);
            const rightC = s.at(right);

            if (!this.isAlphanumeric(leftC)) {
                left++;
                continue;
            }
            if (!this.isAlphanumeric(rightC)) {
                right--;
                continue;
            }


            if (leftC.toLowerCase() !== rightC.toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    isAlphanumeric(char) {
        return /^[a-z0-9]$/i.test(char);
    }
}
