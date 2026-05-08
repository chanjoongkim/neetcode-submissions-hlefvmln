class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        return this.sort(nums);
    }

    sort(nums) {
        if (nums.length === 0) {
            return [];
        }
        if (nums.length === 1) {
            return nums;
        }
        // divide nums into left/right half
        // sort the left/right halves recursively,
        // then merge them together

        let mid = Math.floor(nums.length / 2);

        const left = this.sort([...nums.slice(0, mid)]);
        const right = this.sort([...nums.slice(mid)]);

        return this.merge(left, right);
    }

    merge(left, right) {
        const result = new Array(left.length + right.length).fill(0);

        let leftIndex = 0;
        let rightIndex = 0;

        let index = 0;
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result[index] = left[leftIndex];
                leftIndex++;
            }
            else {
                result[index] = right[rightIndex];
                rightIndex++
            }
            index++;
        }

        while (leftIndex < left.length) {
            result[index] = left[leftIndex];
            leftIndex++;
            index++;
        }
        while (rightIndex < right.length) {
            result[index] = right[rightIndex];
            rightIndex++;
            index++;
        } 

        return result;
    }
}
