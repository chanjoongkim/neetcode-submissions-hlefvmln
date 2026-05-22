class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if (!strs) {
            return '';
        }

        if (strs.length === 1) {
            return strs[0];
        }

        strs.sort();

        // compare first 2 sorted elements and choose (from the first element) the common prefix
        const firstWord = strs[0];

        let result = [];

        for (let i = 0; i < firstWord.length; i++) {
            const c = firstWord.at(i);
            // compare our c with every other char at index i of other words
            for (let j = 1; j < strs.length; j++) {
                const otherWord = strs[j];

                if (i >= otherWord.length || c !== otherWord.at(i)) {
                    return result.join('');
                }
            }
            result.push(c);
        }

        return result.join('');
    }
}
