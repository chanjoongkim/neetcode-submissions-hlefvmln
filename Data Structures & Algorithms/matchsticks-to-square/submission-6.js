class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        matchsticks.sort((a, b) => a - b);
        // if sum isn't divisible by 4 then not possible
        const sum = matchsticks.reduce((acc, curr) => acc + curr, 0);
        if (sum % 4 !== 0) {
            return false;
        }

        // side must be equal to sum / 4
        const target = sum / 4;

        const buckets = new Array(4).fill(0);

        // can we make 4 subsets that equal to target?
        return this.backtrack(matchsticks, matchsticks.length - 1, target, buckets, 4);
    }

    backtrack(matchsticks, index, target, buckets, sidesLeft) {
        if (index < 0) {
            return sidesLeft === 0;
            // could also check value of buckets
        }

        // work one index at a time
        const matchstick = matchsticks[index];

        // try to place matchstick in each bucket
        // since we are placing each matchstick at our index, we don't need to check back for any unused matches
        for (let j = 0; j < buckets.length; j++) {
            if (buckets[j] === target) {
                continue;
            }
            if (buckets[j] + matchstick > target) {
                continue;
            }
            buckets[j] += matchstick;

            // since the matchsticks are sorted, let's work backwards and use the largest matchsticks first
            if (this.backtrack(matchsticks, index - 1, target, buckets, buckets[j] === target ? sidesLeft - 1 : sidesLeft)) {
                return true;
            }
            buckets[j] -= matchstick;
        }

        return false;
    }
}
