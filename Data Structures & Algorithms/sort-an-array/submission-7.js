class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        this.sort(nums, 0, nums.length - 1);

        return nums;
    }

    sort(nums, left, right) {
        if (left >= right) {
            return;
        }

        // divide nums into left/right half
        // sort the left/right halves recursively,
        // then merge them together

        let mid = Math.floor((left + right) / 2);

        this.sort(nums, left, mid);
        this.sort(nums, mid + 1, right);

        this.merge(nums, left, mid, right);
    }

    merge(nums, leftI, midI, rightI) {
        // need temp arrays to store left/right arrays
        const left = [];
        const right = [];

        for (let i = leftI; i <= midI; i++) {
            left.push(nums[i]);
        }

        for (let i = midI + 1; i <= rightI; i++) {
            right.push(nums[i]);
        }


        let leftIndex = 0;
        let rightIndex = 0;

        let index = leftI;
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                nums[index] = left[leftIndex];
                leftIndex++;
            }
            else {
                nums[index] = right[rightIndex];
                rightIndex++
            }
            index++;
        }

        while (leftIndex < left.length) {
            nums[index] = left[leftIndex];
            leftIndex++;
            index++;
        }
        while (rightIndex < right.length) {
            nums[index] = right[rightIndex];
            rightIndex++;
            index++;
        } 

        // return result;
    }
}
