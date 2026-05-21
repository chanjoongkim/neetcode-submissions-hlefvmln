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
            const i = (index % senate.length);
            if (!canVote[i]) {
                index++;
                continue;
            }

            const party = senate[i]; // either R or D
            console.log('i', i, party);

            // find next senator to negate
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
                console.log('j', j, senate[jFixed]);
                break;
            }

            // // find the first 'D' senator that can still vote, going from right to left
            // for (let j = senate.length - 1; j >= 0; j--) {
            //     // skip senators who can't vote or belong to the same party
            //     if (!canVote[j] || senate[j] === party) {
            //         continue;
            //     }

            //     // flip senator[j] to not vote
            //     canVote[j] = false;
            //     if (party === 'R') {
            //         dCount--;
            //     }
            //     else {
            //         rCount--;
            //     }
            //     // console.log('j', j, senate[j]);
            //     break;
            // }

            // console.log(canVote);
            index++;
        }

        console.log(canVote);

        return rCount === 0 ? 'Dire' : 'Radiant';
    }
}
