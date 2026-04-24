class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (!digits) return [];
        
        const result = [];
        const digitToChars = new Map([
            ['1', []],
            ['2', ['a', 'b', 'c']],
            ['3', ['d', 'e', 'f']],
            ['4', ['g', 'h', 'i']],
            ['5', ['j', 'k', 'l']],
            ['6', ['m', 'n', 'o']],
            ['7', ['p', 'q', 'r', 's']],
            ['8', ['t', 'u', 'v']],
            ['9', ['w', 'x', 'y', 'z']],
            ['0', ['+']],
            ['*', []],
            ['#', []],
        ]);

        this.dfs(digits, 0, '', result, digitToChars);

        return result;
    }

    dfs(digits, index, curr, result, digitToChars) {
        if (index >= digits.length) {
            result.push(curr);
            return;
        }

        for (const c of digitToChars.get(digits.at(index))) {
            this.dfs(digits, index + 1, curr + c, result, digitToChars);
        }
    }
}
