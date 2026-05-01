class Solution {
    /**
     * @param {string} s
     * @return {number[]}
     */
    partitionLabels(s) {
        // iterate through s and store first/last index of each character we encounter
        const indices = {};

        for (let i = 0; i < s.length; i++) {
            const c = s.at(i);
            if (indices[c]) {
                indices[c][1] = i;
            } else {
                indices[c] = [i, i];
            }
        }

        // start at 0, then go until indices[1] for c
        // while we are going through each index, check the indices for the new character
        // and if that last index is greater than the current last index, we update our last index
        // keep building this substring until we reach the end.
        // then add our final charCount to result, and repeat the process with the next index

        const result = [];
        let index = 0;
        while (index < s.length) {
            let lastIndex = indices[s.at(index)][1];
            let currCount = 0;
            while (index <= lastIndex) {
                currCount++;
                const c = s.at(index);
                lastIndex = Math.max(lastIndex, indices[c][1]);
                index++;
            }
            result.push(currCount);
        }

        return result;
    }
}
