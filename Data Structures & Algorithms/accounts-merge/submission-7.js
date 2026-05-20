class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        const graph = new Map();
        const emailToNames = new Map();

        // build graph where each email is a node, and the account it is associated with is a neighbor
        for (const account of accounts) {
            const name = account[0];
            for (let i = 1; i < account.length; i++) {
                const email = account[i];
                if (!graph.has(email)) {
                    graph.set(email, new Set());
                }
                emailToNames.set(email, name);
            }
        }

        for (const account of accounts) {
            const name = account[0];

            // build edges between first email and all other emails for the account
            const firstEmail = account[1];

            for (let i = 2; i < account.length; i++) {
                graph.get(firstEmail).add(account[i]);
                graph.get(account[i]).add(firstEmail);
            }
        }

        // find connected components using BFS
        const q = new Queue();
        const visited = new Set();

        const result = [];
        for (const [key, value] of graph) {
            // skip emails we've seen already, as they'll have been included in another connected component
            if (visited.has(key)) {
                continue;
            }
            // do BFS
            q.push(key);
            visited.add(key);

            const emails = [];
            while (!q.isEmpty()) {
                const email = q.pop();
                emails.push(email);

                for (const neighbor of graph.get(email)) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        q.push(neighbor);
                    }
                }
            }

            emails.sort();
            result.push([emailToNames.get(emails[0]), ...emails]);
        }

        return result;
    }
}
