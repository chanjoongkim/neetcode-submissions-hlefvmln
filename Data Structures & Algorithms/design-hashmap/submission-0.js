class MyHashMap {
    constructor() {
        this.size = 100;
        this.data = Array.from({ length: this.size }, () => []);
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const index = this.hashCode(key);

        const dataList = this.data[index];

        for (let i = 0; i < dataList.length; i++) {
            const [itemKey, itemValue] = dataList[i];
            if (itemKey === key) {
                dataList[i] = [key, value];
                return;
            }
        }

        dataList.push([key, value]);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const index = this.hashCode(key);

        const dataList = this.data[index];

        for (let i = 0; i < dataList.length; i++) {
            const [itemKey, itemValue] = dataList[i];
            if (itemKey === key) {
                return itemValue;
            }
        }

        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.hashCode(key);

        const dataList = this.data[index];

        for (let i = 0; i < dataList.length; i++) {
            const [itemKey, itemValue] = dataList[i];
            if (itemKey === key) {
                dataList[i] = [...dataList.slice(0, i), ...dataList.slice(i + 1)];
                return;
            }
        }
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
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
