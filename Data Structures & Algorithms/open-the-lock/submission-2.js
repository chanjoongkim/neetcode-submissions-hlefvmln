class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        const q = new Queue();
        const visited = new Set();

        const deadendsSet = new Set(deadends);

        if (deadendsSet.has('0000')) {
            return -1;
        }

        q.enqueue('0000');
        visited.add('0000');

        let result = 0;
        while (!q.isEmpty()) {

            const levelSize = q.size();
            for (let i = 0; i < levelSize; i++) {
                const node = q.dequeue();

                if (node === target) {
                    return result;
                }

                // generate all possible 8 next states
                // const mod = (n, m) => ((n % m) + m) % m;
                for (let j = 0; j < 4; j++) {
                    const nextPos = String((Number(node[j]) + 1) % 10);
                    const nextNeg = String((((Number(node[j]) - 1) % 10) + 10) % 10);

                    const nextPosNode = node.slice(0, j) + nextPos + node.slice(j + 1);
                    const nextNegNode = node.slice(0, j) + nextNeg + node.slice(j + 1);
                    
                    if (!deadendsSet.has(nextPosNode) && !visited.has(nextPosNode)) {
                        q.enqueue(nextPosNode);
                        visited.add(nextPosNode);
                    }
                    if (!deadendsSet.has(nextNegNode) && !visited.has(nextNegNode)) {
                        q.enqueue(nextNegNode);
                        visited.add(nextNegNode);
                    }
                }
            }
            result++;
        }

        return -1;
    }
}
