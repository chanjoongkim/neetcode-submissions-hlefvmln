class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            const values = this.keyStore.get(key);
            values.push([value, timestamp]);
            this.keyStore.set(key, values);
        } else {
            const values = [];
            values.push([value, timestamp]);
            this.keyStore.set(key, values);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return "";
        }

        const values = this.keyStore.get(key);

        // binary search
        let left = 0;
        let right = values.length - 1;
        let result = "";

        while (left <= right) {
            const mid = Math.trunc((left + right) / 2);
            const pair = values[mid];

            if (pair[1] <= timestamp) {
                result = pair[0];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
