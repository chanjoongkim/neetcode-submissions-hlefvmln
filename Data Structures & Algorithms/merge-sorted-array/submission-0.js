class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        // step 1: shift all the values in nums1 back to the end
        // step 2: have 2 pointers, one at start of nums1's effective values (so towards the end) and at the start of nums2
        // step 3: start at i = 0 for nums1, and add numbers in place of nums1 while we have 2 pointers < arrays.length

        // shift all nums1 values back
        for (let i = m - 1; i >= 0; i--) {
            nums1[i + n] = nums1[i];
        }

        let index = 0;
        let n1 = n;
        let n2 = 0;

        while (n1 < nums1.length && n2 < nums2.length) {
            if (nums1[n1] < nums2[n2]) {
                nums1[index] = nums1[n1];
                n1++;
            }
            else {
                nums1[index] = nums2[n2];
                n2++;
            }
            index++;
        }

        while (n1 < nums1.length) {
            nums1[index] = nums1[n1];
            index++;
            n1++;
        }

        while (n2 < nums2.length) {
            nums1[index] = nums2[n2];
            index++;
            n2++;
        }
    }
}
