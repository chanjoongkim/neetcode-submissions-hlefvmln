class PrefixTree {
    constructor() {
        this.root = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for (const c of word) {
            if (!node[c]) {
                node[c] = {};
            }

            node = node[c];
        }
        node['.'] = {};
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.root;
        for (const c of word) {
            if (!node[c]) {
                return false;
            }
            node = node[c];
        }
        return node['.'] ? true : false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root;
        for (const c of prefix) {
            if (!node[c]) {
                return false;
            }
            node = node[c];
        }
        
        return true;
    }
}
