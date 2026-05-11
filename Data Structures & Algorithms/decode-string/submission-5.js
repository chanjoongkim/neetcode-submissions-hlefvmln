class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        // use a stack to generate the result string
        // while reading string s,
        // if we encounter a number, then we know square brackets will follow
        // so we add element to stack
        // if we encounter nested brackets, then we keep adding to stack

        return this.decodeStringHelper(s);

        // const stack = [];
        // let index = 0;
        // let result = '';

        // while (index < s.length) {
        //     // normal letter, just add and continue
        //     if ('a' <= s[index] && s[index] <= 'z') {
        //         result += s[index];
        //         index++;
        //         continue;
        //     }
        //     // else found a number sequence and we need to build our stack
        //     if ('1' <= s.at(index) && s.at(index) <= '9') {

        //     }
        // }
    }

    decodeStringHelper(s) {
        if (!s || s.length === 0) {
            return '';
        }

        if ('a' <= s[0] && s[0] <= 'z') {
            return s[0] + this.decodeStringHelper(s.substring(1));
        }

        let i = 1;
        while (i < s.length && this.isOnlyDigits(s.substring(0, i))) {
            i++;
        }
        i--;

        const num = Number(s.substring(0, i));
        // s[i] should be [ now
        // so need to find appropriate ] that closes our bracket and recurse that string
        const startEncodedIndex = i;
        let bracketCount = 0;
        while (i < s.length) {
            if (s.at(i) === '[') {
                bracketCount++;
            }
            else if (s.at(i) === ']') {
                bracketCount--;
                if (bracketCount === 0) {
                    break;
                }
            }
            i++;
        }

        const encodedString = this.decodeStringHelper(s.substring(startEncodedIndex + 1, i));
        let result = '';
        for (let i = 0; i < num; i++) {
            result += encodedString;
        }

        return result + this.decodeStringHelper(s.substring(i + 1))
    }

    isOnlyDigits(str) {
        return /^\d+$/.test(str);
    }
}
