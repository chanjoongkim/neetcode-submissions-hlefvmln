class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        if (!s) {
            return [];
        }

        const result = [];
        const curr = [];

        this.backtrack(s, 0, curr, result);

        return result;
    }

    backtrack(s, index, curr, result) {
        if (index >= s.length) {
            result.push([...curr]);
            return;
        }

        // make substrings of s starting at index, add palindromes
        for (let i = index; i < s.length; i++) {
            const subStr = s.substring(index, i + 1);
            if (this.isPalindrome(subStr)) {
                curr.push(subStr);
                this.backtrack(s, i + 1, curr, result);
                curr.pop();
            }
        }
    }

    isPalindrome(s) {
        if (!s) {
            return false;
        }

        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (s.at(left) !== s.at(right)) {
                return false;
            }
            left++;
            right--;
        }

        return true; 
    }
}
