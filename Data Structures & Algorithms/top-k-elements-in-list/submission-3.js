class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // build freq maps
        // then make bucket array with highestFreq length
        // fill bucket array with values at given freqs
        // take highest K values (starting from bucket array end and working backwards)
        const freqCount = this.buildFreqCount(nums);
        const freqs = freqCount.freqs;
        const highestFreq = freqCount.highestFreq;

        const bucketArray = Array(highestFreq + 1).fill(null);

        for (const num in freqs) {
            const freq = freqs[num];
            let valuesList;
            if (bucketArray[freq] == null) {
                valuesList = [];
                
            } else {
                valuesList = bucketArray[freq];
            }

            valuesList.push(num);
            bucketArray[freq] = valuesList;
        }

        const result = [];
        for (let i = bucketArray.length - 1; i >= 0; i--) {
            if (bucketArray[i] !== null) {
                result.push(bucketArray[i]);
                k -= bucketArray[i].length;
            }

            if (k === 0) {
                return result;
            }
        }

        return result;
    }

    buildFreqCount(nums) {
        const freqs = {};
        let highestFreq = 0;
        for (const num of nums) {
            freqs[num] = freqs[num] ? freqs[num] + 1 : 1;
            highestFreq = Math.max(highestFreq, freqs[num]);
        }

        return { freqs, highestFreq };
    }
}
