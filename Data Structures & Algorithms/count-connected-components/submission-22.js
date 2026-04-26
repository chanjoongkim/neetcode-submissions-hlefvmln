class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const set = new Set();

        for (let i = 0; i < n; i++) {
            const s = new Set();
            s.add(i);
            set.add(s);
        }

        // console.log(set);

        for (const [a, b] of edges) {
            // find set with a

            let aSet = null;
            let bSet = null;
            for (const s of set) {
                if (s.has(a)) {
                    aSet = s;
                }
                if (s.has(b)) {
                    bSet = s;
                }
            }

            console.log(a, aSet, b, bSet);

            // check if aSet and bSet are the same, if so then we continue (since [a,b] edge already exist in set)
            // otherwise combine the sets
            if (aSet === bSet) {
                continue;
            } else {
                // aSet.add(...bSet);
                for (const item of bSet) {
                    aSet.add(item);
                }
                console.log('aSet', aSet);
                set.delete(bSet);
            }
        }

        return set.size;
    }
}
