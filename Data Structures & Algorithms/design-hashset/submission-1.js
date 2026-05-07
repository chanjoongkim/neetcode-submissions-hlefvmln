class MyHashSet {
    constructor() {
        this.size = 10;
        this.list = Array.from({ length: this.size }, () => []);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        // step 1: use a hash algorithm and hash the key modulo size
        // get list at the index resulting from above, and see if key already exists in that list
        // if not, then add
        const index = this.hashCode(key);

        const indexList = this.list[index];

        for (const num of indexList) {
            if (num === key) {
                return;
            }
        }

        indexList.push(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        // use a hash algorithm and hash the key modulo size
        // get the list at the index resulting from above, and remove the key from the list if it exists

        const index = this.hashCode(key);

        const indexList = this.list[index];

        for (let i = 0; i < indexList.length; i++) {
            if (indexList[i] === key) {
                this.list[index] = [...indexList.slice(0, i), ...indexList.slice(i + 1)];
                return;
            }
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        // use a hash algorithm and hash the key modulo size
        // and get the list at the index resulting from above
        // check if the list contains key

        const index = this.hashCode(key);

        const indexList = this.list[index];

        for (const num of indexList) {
            if (num === key) {
                return true;
            }
        }

        return false;
    }

    hashCode(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // Convert to 32-bit integer
        }
        return hash % this.size;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
