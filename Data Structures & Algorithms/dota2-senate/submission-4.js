class Solution {
    /**
     * @param {string} senate
     * @return {string}
     */
    predictPartyVictory(senate) {
        if (!senate) {
            return '';
        }

        let rCount = 0;
        let dCount = 0;
        for (const s of senate) {
            if (s === 'R') {
                rCount++;
            }
            else {
                dCount++;
            }
        }

        const canVote = Array(senate.length).fill(true);

        let index = 0;
        while (rCount > 0 && dCount > 0) {
            // go around in a circle
            const i = (index % senate.length);
            if (!canVote[i]) {
                index++;
                continue;
            }

            const party = senate[i]; // either R or D

            // find next senator to negate (go around in a circle)
            let j = i + 1;
            // we are guaranteed to find at least one senator to negate
            while (true) {
                const jFixed = j % senate.length;
                if (!canVote[jFixed] || senate[jFixed] === party) {
                    j++;
                    continue;
                }

                // flip senator[j] to not vote
                canVote[jFixed] = false;
                if (party === 'R') {
                    dCount--;
                }
                else {
                    rCount--;
                }
                break;
            }
            index++;
        }

        return rCount === 0 ? 'Dire' : 'Radiant';
    }
}
