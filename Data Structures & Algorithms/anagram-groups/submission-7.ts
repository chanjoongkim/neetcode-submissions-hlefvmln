class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // map:
        // <sorted string, list of words that match>

        // go through each str of strs, sort it, then see if our sorted string is in our map, if so append to list
        // return all values at the end

        const map = new Map<string, string[]>();

        for (const str of strs) {
            const sortedStr = str.split('').sort().join('');

            const words = map.get(sortedStr) ?? [];
            words.push(str);
            map.set(sortedStr, words);
        }

        const result = [];

        for (const [key, value] of map) {
            result.push(value);
        }

        return result;
    }
}
