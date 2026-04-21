class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const map = new Map();

        nums.sort((a, b) => a - b);

        // iterate through nums and map all values to indices that contain it
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            let indices = null;
            if (map.has(num)) {
                indices = map.get(num);
            } else {
                indices = new Set();
            }

            indices.add(i);
            map.set(num, indices);
        }

        // list of sets initially, convert set to arrays at the end
        const resultSet = new Set();

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                const sum = nums[i] + nums[j];
                const complement = 0 - sum;
                if (map.has(complement)) {
                    const indices = map.get(complement);
                    for (const index of indices) {
                        if (index === i || index === j || index < j) {
                            continue;
                        }
                        // if indices contains more indices than i/j, then we have a valid triplet
                        resultSet.add([nums[i], nums[j], complement].join(','));
                    }
                }
            }
        }

        let result = [];
        for (const triple of resultSet) {
            result.push(triple.split(','));
        }

        return result;
    }
}
