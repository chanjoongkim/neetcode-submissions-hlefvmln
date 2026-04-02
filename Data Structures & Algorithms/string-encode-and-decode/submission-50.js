class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const encodedStr = strs.reduce((acc, str) =>
            acc + str.length + '#' + str
    , '');

        console.log(encodedStr);

        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        if (str.length === 0) {
            return result;
        }

        let index = 0;
        while (index < str.length) {
            let poundIndex = index;
            while (str.charAt(poundIndex) !== '#' && poundIndex < str.length) {
                poundIndex++;
            }

            let strLength = Number.parseInt(str.substring(index, poundIndex));
            let string = str.substring(poundIndex + 1, poundIndex + 1 + strLength);

            result.push(string);
            index = poundIndex + 1 + strLength;
        }

        return result;
    }
}
