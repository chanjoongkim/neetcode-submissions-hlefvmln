class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        if (!numbers) {
            return [];
        }

        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            // algorithm:
            // see if numbers[left] + numbers[right] === target (if so, return [left, right])
            // else if sum < target, move left over (since our sum is smaller than target we need a bigger number to use)
            // else move right inside (since our sum is too large and we need a smaller number)

            const sum = numbers[left] + numbers[right];

            if (sum === target) {
                return [left + 1, right + 1];
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        return [];
    }
}
