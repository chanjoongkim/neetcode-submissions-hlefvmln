class FreqStack {
    constructor() {
        this.freqs = new Map();
        this.freqsLevel = new Map();
        this.maxFreq = 0;

        // special case to handle 0 frequency
        this.freqsLevel.set(0, []);
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        // get old frequency and increment
        let freq = this.freqs.get(val) ?? 0;
        freq++;
        this.freqs.set(val, freq);

        // add our num to the frequency level 
        if (this.freqsLevel.has(freq)) {
            this.freqsLevel.get(freq).push(val);
        }
        else {
            this.freqsLevel.set(freq, [val]);
        }

        // keep track of our most max frequency level
        if (freq > this.maxFreq) {
            this.maxFreq = freq;
        }
    }

    /**
     * @return {number}
     */
    pop() {
        // get number from max freq
        const result = this.freqsLevel.get(this.maxFreq).pop();

        let freq = this.freqs.get(result);

        this.freqs.set(result, freq - 1);

        while (this.freqsLevel.get(this.maxFreq).length === 0 && this.maxFreq > 0) {
            this.maxFreq--;
        }

        return result;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
