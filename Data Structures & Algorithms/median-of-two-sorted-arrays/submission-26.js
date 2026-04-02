class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = null;
        let B = null;

        if (nums1.length > nums2.length) {
            A = nums2;
            B = nums1;
        } else {
            A = nums1;
            B = nums2;
        }

        const total = A.length + B.length;
        const half = Math.trunc((total + 1) / 2);
        const isOddNumbered = total % 2 !== 0;

        let l = 0;
        let r = A.length;

        while (l <= r) {
            const i = Math.trunc((l + r) / 2);
            const j = half - i;

            const aLeft = i > 0 ? A[i - 1] : Number.MIN_SAFE_INTEGER;
            const aRight = i < A.length ? A[i] : Number.MAX_SAFE_INTEGER;
            const bLeft = j > 0 ? B[j - 1] : Number.MIN_SAFE_INTEGER;
            const bRight = j < B.length ? B[j] : Number.MAX_SAFE_INTEGER;

            // found correct partition
            if (aLeft <= bRight && bLeft <= aRight) {
                if (isOddNumbered) {
                    return Math.max(aLeft, bLeft);
                } else {
                    return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
                }
            } else if (aLeft > bRight) {
                r = i - 1;
            } else {
                l = i + 1;
            }
        }

        return -1;
    }
}
