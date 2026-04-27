class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if (!s) {
            return '';
        }

        let result = '';
        for (let i = 0; i < s.length; i++) {
            const oddP = this.getPalindrome(s, i, true);
            if (oddP.length > result.length) {
                result = oddP;
            }
            const evenP = this.getPalindrome(s, i, false);
            if (evenP.length > result.length) {
                result = evenP;
            }
        }

        return result;
    }

    getPalindrome(s, index, isOdd) {
        let left = index;
        let right = isOdd ? index : index + 1;
        
        // let result = '';

        while (left >= 0 && right < s.length && s.at(left) === s.at(right)) {
            // result = s.substring(left, right + 1);
            left--;
            right++;
        }

        // result = s.substring(left + 1, right);

        return s.substring(left + 1, right);
    } 
}
