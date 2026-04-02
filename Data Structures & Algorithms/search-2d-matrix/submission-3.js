class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix) {
            return false;
        }

        let startRowIndex = 0;
        let endRowIndex = matrix.length - 1;

        while (startRowIndex <= endRowIndex) {
            const midRowIndex = Math.trunc((startRowIndex + endRowIndex) / 2);
            const midRow = matrix[midRowIndex];
            console.log(midRow);

            // target must exist in our row
            if (midRow[0] <= target && target <= midRow[midRow.length - 1]) {
                // binary search on this row
                let start = 0;
                let end = midRow.length - 1;

                while (start <= end) {
                    const index = Math.trunc((start + end) / 2);
                    const val = midRow[index];

                    if (target === val) {
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
