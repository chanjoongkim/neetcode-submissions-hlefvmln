class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const phoneMap = {
            '2' : ['a', 'b', 'c'],
            '3' : ['d', 'e', 'f'],
            '4' : ['g', 'h', 'i'],
            '5' : ['j', 'k', 'l'],
            '6' : ['m', 'n', 'o'],
            '7' : ['p', 'q', 'r', 's'],
            '8' : ['t', 'u', 'v'],
            '9' : ['w', 'x', 'y', 'z']
        }

        const result = [];
        const current = "";

        if (digits.length === 0) {
            return result;
        }

        this.backtrack(digits, 0, phoneMap, result, current);

        return result;
    }

    backtrack(digits, index, phoneMap, result, current) {
        if (index >= digits.length) {
            result.push(current);
            return;
        }

        const letters = phoneMap[digits.charAt(index)];
        for (const c of letters) {
            this.backtrack(digits, index + 1, phoneMap, result, current + c);
        }
    }
}
