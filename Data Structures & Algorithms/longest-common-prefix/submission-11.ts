class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if (!strs) {
            return '';
        }

        let result = '';

        let index = 0;

        while (true) {
            // check every string in strs and confirm if our result is a valid prefix
            // only need to check the index though

            if (index >= strs[0].length) {
                return result;
            }

            result += strs[0][index];

            for (const str of strs) {
                if (index >= str.length || str[index] !== result[index]) {
                    return result.slice(0, result.length - 1);
                }
            }

            index++;
        }
    }
}
