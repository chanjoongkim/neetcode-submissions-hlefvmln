class Solution {
    /**
     * @param {string} s
     * @param {string[]} dictionary
     * @return {number}
     */
    minExtraChar(s, dictionary) {
        const trie = this.buildTrie(dictionary);
        const memo = new Map();
        return this.dp(s, 0, trie, memo);
    }

    dp(s, index, trie, memo) {
        if (index >= s.length) {
            return 0;
        }

        const key = s.substring(index) + '-' + index;

        if (memo.has(key)) {
            return memo.get(key);
        }

        let result = s.length - index;

        for (let i = index; i < s.length; i++) {
            for (let j = index + 1; j <= s.length; j++) {
                const str = s.substring(i, j);
                if (this.trieContainsWord(trie, str)) {
                    result = Math.min(result, (i - index) + this.dp(s, j, trie, memo));
                }
            }
        }

        memo.set(key, result);

        return result;

        // // starting at index, go through all words in dictionary and see if our trie contains it
        // // if so, then recurse and see what the minimum leftover is

        // let lastIndexUsed = index;
        // for (let i = index; i < s.length; i++) {
        //     const str = s.substring(index, i + 1);
        //     if (this.trieContainsWord(trie, str)) {
        //         lastIndexUsed = i;
        //         this.dp(s, i + 1, trie, result);
        //     }
        // }

        // result[0] = Math.min(result[0], s.length - lastIndexUsed);

        // return;
    }

    trieContainsWord(trie, word) {
        let level = trie.get('root');

        for (let i = 0; i < word.length; i++) {
            const c = word.at(i);

            if (!level.has(c)) {
                return false;
            }
            level = level.get(c);
        }

        return level.has('*');
    }

    buildTrie(dictionary) {
        const trie = new Map();
        
        trie.set('root', new Map());

        for (const word of dictionary) {
            this.insertWord(word, trie);
        }

        return trie;
    }

    insertWord(word, trie) {
        let level = trie.get('root');

        for (let i = 0; i < word.length; i++) {
            const c = word.at(i);

            if (!level.has(c)) {
                level.set(c, new Map());
            }
            const nextLevel = level.get(c);
            level = nextLevel;
        }

        // mark word end
        level.set('*', null);
    }
}
