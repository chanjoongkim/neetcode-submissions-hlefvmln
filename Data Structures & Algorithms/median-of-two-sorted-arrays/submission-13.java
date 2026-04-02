class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int[] A = null;
        int[] B = null;
        if (nums1.length > nums2.length) {
            A = nums2;
            B = nums1;
        } else {
            A = nums1;
            B = nums2;
        }

        int total = A.length + B.length;
        int half = (total + 1) / 2;
        boolean isOddNumbered = total % 2 != 0;

        int l = 0;
        int r = A.length;
        while (l <= r) {
            int i = (l + r) / 2;
            int j = half - i;

            int aLeft = i > 0 ? A[i - 1] : Integer.MIN_VALUE;
            int aRight = i < A.length ? A[i] : Integer.MAX_VALUE;
            int bLeft = j > 0 ? B[j - 1] : Integer.MIN_VALUE;
            int bRight = j < B.length ? B[j] : Integer.MAX_VALUE;

            // found valid partition
            if (aLeft <= bRight && bLeft <= aRight) {
                if (isOddNumbered) {
                    return Math.max(aLeft, bLeft);
                } else {
                    return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2.0;
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
