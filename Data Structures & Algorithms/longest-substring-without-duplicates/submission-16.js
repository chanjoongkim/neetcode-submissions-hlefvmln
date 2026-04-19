class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s) {
            return 0;
        }
        if (s.length === 1) {
            return 1;
        }

        const charsIndexMap = new Map();
        charsIndexMap.set(s.charAt(0), 0);

        let maxLength = 1;
        let left = 0;

        for (let i = 1; i < s.length; i++) {
            const char = s.charAt(i);
            if (!charsIndexMap.has(char)) {
                charsIndexMap.set(char, i);
                
            }
            else {
                // if we detect a duplicate char, then we find the value of the old index of char
                // and reset the bound of left to be one past that, then update the index value of char
                const oldIndex = charsIndexMap.get(char);
                left = Math.max(left, oldIndex + 1);
                charsIndexMap.set(char, i);
            }
            maxLength = Math.max(maxLength, i - left + 1);
        }

        return maxLength;
    }
}
