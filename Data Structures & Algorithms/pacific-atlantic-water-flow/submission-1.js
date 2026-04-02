class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;

        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];

        const fromPacific = new Set();
        const fromAtlantic = new Set();

        const queue = new Queue();

        // do BFS from Pacific rows
        for (let c = 0; c < cols; c++) {
            queue.push([0, c]);
            fromPacific.add([0, c]);
        }
        for (let r = 1; r < rows; r++) {
            queue.push([r, 0]);
            fromPacific.add([r, 0]);
        }
        while(!queue.isEmpty()) {
            const [r, c] = queue.pop();
            fromPacific.add(r + '-' + c);

            const height = heights[r][c];

            for (let i = 0; i < 4; i++) {
                const newR = r + dr[i];
                const newC = c + dc[i];

                if (newR >= 0 && newR < rows && newC >= 0 && newC < cols && !fromPacific.has(newR + '-' + newC) && heights[newR][newC] >= height) {
                    fromPacific.add(newR + '-' + newC);
                    queue.push([newR, newC]);
                }
            }
        }

        // do BFS from Atlantic rows
        for (let c = 0; c < cols; c++) {
            queue.push([rows - 1, c]);
            fromAtlantic.add([rows - 1, c]);
        }
        for (let r = 0; r < rows - 1; r++) {
            queue.push([r, cols - 1]);
            fromAtlantic.add([r, cols - 1]);
        }
        while(!queue.isEmpty()) {
            const [r, c] = queue.pop();
            fromAtlantic.add(r + '-' + c);

            const height = heights[r][c];

            for (let i = 0; i < 4; i++) {
                const newR = r + dr[i];
                const newC = c + dc[i];

                if (newR >= 0 && newR < rows && newC >= 0 && newC < cols && !fromAtlantic.has(newR + '-' + newC) && heights[newR][newC] >= height) {
                    fromAtlantic.add(newR + '-' + newC);
                    queue.push([newR, newC]);
                }
            }
        }

        const result = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const key = r + '-' + c;
                if (fromPacific.has(key) && fromAtlantic.has(key)) {
                    result.push([r, c]);
                }
            }
        }

        return result;
    }
}
