class WordDictionary {
    constructor() {
        this.root = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;
        for (const c of word) {
            if (!curr[c]) {
                curr[c] = {};
            }
            curr = curr[c];
        }
        // mark as end of word
        curr['_'] = {};
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(word, 0, this.root);
    }

    dfs(word, index, node) {
        if (index >= word.length) {
            return node['_'] ? true : false;
        }

        const c = word.charAt(index);

        if (c === '.') {
            for (const children of Object.values(node)) {
                if (this.dfs(word, index + 1, children)) {
                    return true;
                }
            }
            return false;
        } else {
            if (!node[c]) {
                return false;
            }
            return this.dfs(word, index + 1, node[c]);
        }
    }
}
