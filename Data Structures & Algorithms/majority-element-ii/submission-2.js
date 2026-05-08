class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     * 
     * ex: [1, 2, 2, 2, 5]
     * 
     * freqsBar: Math.floor(5 / 3) = 1
     */
    majorityElement(nums) {
        // by definition we can only have at most 2 elements that are more than freqsBar frequency
        const freqsBar = Math.floor(nums.length / 3);

        const freqs = [[-1, 0], [-1, 0]];

        for (const num of nums) {
            if (freqs[0][0] === num) {
                freqs[0][1]++;
            }
            else if (freqs[1][0] === num) {
                freqs[1][1]++;
            }
            else if (freqs[0][1] === 0) {
                freqs[0] = [num, 1];
            }
            else if (freqs[1][1] === 0) {
                freqs[1] = [num, 1];
            }
            else {
                freqs[0][1]--;
                freqs[1][1]--;
            }
        }

        freqs[0][1] = 0;
        freqs[1][1] = 0;

        for (const num of nums) {
            if (freqs[0][0] === num) {
                freqs[0][1]++;
            }
            else if (freqs[1][0] === num) {
                freqs[1][1]++;
            }
        }

        console.log(freqs);

        const result = [];
        for (const [key, value] of freqs) {
            if (value > freqsBar) {
                result.push(key);
            }
        }

        return result;
    }
}
