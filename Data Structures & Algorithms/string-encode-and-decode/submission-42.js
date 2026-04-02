class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (!strs) {
            return '';
        }

        let result = '';

        for (const str of strs) {
            result += str.length + ',';
        }

        result += '#';

        for (const str of strs) {
            result += str;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (!str) {
            return [];
        }

        // find first #
        let i = 0;
        while (str.charAt(i) !== '#') {
            i++;
        }
        const sizes = str.substring(0, i).split(',');
        // remove last "," size
        sizes.pop()
        const words = str.substring(i + 1);

        const result = [];
        let index = 0;
        for (const size of sizes) {
            const word = words.substring(index, index + parseInt(size, 10));
            result.push(word);
            index += parseInt(size, 10);
        }

        return result;
    }
}
