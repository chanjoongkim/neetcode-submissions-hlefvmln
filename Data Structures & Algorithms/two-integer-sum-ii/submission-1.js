class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        if (!numbers) {
            return [-1, -1];
        }

        let leftPtr = 0;
        let rightPtr = numbers.length - 1;

        while (leftPtr < rightPtr) {
            const sum = numbers[leftPtr] + numbers[rightPtr];

            if (sum === target) {
                return [leftPtr + 1, rightPtr + 1];
            }

            if (sum < target) {
                leftPtr++;
            } else {
                rightPtr--;
            }
        }

        return [-1, -1];
    }
}
