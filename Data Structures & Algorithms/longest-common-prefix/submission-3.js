class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (!strs) {
            return '';
        }

        strs.sort();

        // approach: iterate through all strings in strs, start with first char of first string and see if that works
        // keep building prefix char by char until we find a prefix that doesn't match

        // work backwards, start with the first string (shortest string in the list)
        // while NOT all strs startsWith result, we pop one char at a time
        let result = strs[0];

        while (true) {
            let valid = true;
            for (const str of strs) {
                if (!str.startsWith(result)) {
                    result = result.slice(0, result.length - 1);
                    valid = false;
                    break;
                }
            }
            if (valid) {
                return result;
            }
        }

        return '';
    }
}
