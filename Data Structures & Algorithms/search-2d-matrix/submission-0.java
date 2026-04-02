class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int m = matrix.length;
        int n = matrix[0].length;

        // algorithm:
        // grab the "middle" row of the rows we are considering (consider all rows first, then narrow by half as we iterate)
        // check the first/last values of the row. If the first <= target <= last, then target must be in this row. So check if it exists, return true/false depending on if found.
        // else if not, then if target < first value, iterate through with the startRow and new endRow (endRow = midRow - 1).
        // else if target > last value, iterate through with new startRow (midRow + 1) and same endRow.
        // once we run out of rows, then return false

        int startRowIndex = 0;
        int endRowIndex = m - 1;

        while (startRowIndex <= endRowIndex) {
            int midRowIndex = (startRowIndex + endRowIndex) / 2;

            int[] midRow = matrix[midRowIndex];

            // target must exist within this row
            if (midRow[0] <= target && target <= midRow[midRow.length - 1]) {
                // do another binary search just within this row
                int start = 0;
                int end = midRow.length - 1;
                while (start <= end) {
                    int index = (start + end) / 2;
                    int val = midRow[index];

                    if (val == target) {
                        return true;
                    } else if (target < val) {
                        end = index - 1;
                    } else {
                        start = index + 1;
                    }
                }

                return false;
            } else if (target < midRow[0]) {
                endRowIndex = midRowIndex - 1;
            } else {
                startRowIndex = midRowIndex + 1;
            }
        }

        return false;
    }
}
