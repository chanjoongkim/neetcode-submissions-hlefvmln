class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';

        for (const str of strs) {
            const strLength = str.length;

            result += strLength + '#' + str;
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

        const result = [];

        let index = 0;
        while (index < str.length) {
            // parse number first
            let numIndex = index;
            while (str.at(numIndex) !== '#') {
                numIndex++;
            }
            const strLength = Number.parseInt(str.substring(index, numIndex));

            // numIndex is currently at #, so increment to move past one
            numIndex++;

            result.push(str.substring(numIndex, numIndex + strLength));
            index = numIndex + strLength;
        }

        return result;
    }
}
