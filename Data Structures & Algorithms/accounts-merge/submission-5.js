class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        const graph = new Map();

        for (let i = 0; i < accounts.length; i++) {
            const account = accounts[i];
            const key = account[0] + '-' + i;
            graph.set(key, new Set());
            for (let j = 1; j < account.length; j++) {
                graph.get(key).add(account[j]);
            }
        }

        console.log(graph);

        // go through all accounts, determine if any names are present in other accounts, if so then merge
        for (let i = 0; i < accounts.length; i++) {
            const account = accounts[i]
            const key = account[0] + '-' + i;

            // this account was already merged
            if (!graph.has(key)) {
                continue;
            }

            const newNames = new Set(graph.get(key));
            for (const name of graph.get(key)) {
                // check all other accounts and see if we have any shared names
                for (const [k, v] of graph) {
                    if (k === key) {
                        continue;
                    }
                    // merge
                    if (v.has(name)) {
                        console.log(k, v);
                        for (const n of v) {
                            newNames.add(n);
                        }
                        // newNames.add(...v);
                        graph.delete(k);
                    }
                }
            }
            graph.set(key, newNames);
        }

        for (let i = 0; i < accounts.length; i++) {
            const account = accounts[i]
            const key = account[0] + '-' + i;

            // this account was already merged
            if (!graph.has(key)) {
                continue;
            }

            const newNames = new Set(graph.get(key));
            for (const name of graph.get(key)) {
                // check all other accounts and see if we have any shared names
                for (const [k, v] of graph) {
                    if (k === key) {
                        continue;
                    }
                    // merge
                    if (v.has(name)) {
                        console.log(k, v);
                        for (const n of v) {
                            newNames.add(n);
                        }
                        // newNames.add(...v);
                        graph.delete(k);
                    }
                }
            }
            graph.set(key, newNames);
        }

        console.log(graph);

        const result = [];

        for (const [key, value] of graph) {
            const names = [...value];
            names.sort();
            result.push([key.split('-')[0], ...names]);
        }

        return result;
    }
}
