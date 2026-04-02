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
        const freqs = this.buildFreqCount(nums);

        // when initializing an array of arrays, need to use Array.from because fill will use the same inner array (not a new "object" basically)
        const bucketArray = Array.from({ length: nums.length + 1}, () => []);
        // const bucketArray = Array(nums.length + 1).fill([]);

        for (const num in freqs) {
            const freq = freqs[num];
            bucketArray[freq].push(num);
            // let valuesList;
            // if (bucketArray[freq] == null) {
            //     valuesList = [];
                
            // } else {
            //     valuesList = bucketArray[freq];
            // }

            // valuesList.push(num);
            // bucketArray[freq] = valuesList;
        }

        const result = [];
        for (let i = bucketArray.length - 1; i >= 0; i--) {
            if (bucketArray[i].length > 0) {
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
        for (const num of nums) {
            freqs[num] = freqs[num] ? freqs[num] + 1 : 1;
        }

        return freqs;
    }
}
