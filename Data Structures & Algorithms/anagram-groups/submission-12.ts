class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const result = {};

        for (const str of strs) {
            // convert str to char freq array
            // we represent the frequency of each char in the str in our array (with numbers), and
            // make a str to form the key that we compare against for other strs
            console.log(str);
            const charArray = new Array(26).fill(0);
            for (const c of str) {
                const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
                charArray[index] += 1;
            }
            const key = charArray.join(',');
            console.log(key);

            if (!result[key]) {
                result[key] = [];
            }
            result[key].push(str);
        }

        return Object.values(result);
    }
}
