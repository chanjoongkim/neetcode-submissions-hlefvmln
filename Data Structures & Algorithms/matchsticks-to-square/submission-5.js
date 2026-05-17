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

        const matchstick = matchsticks[index];
        // try to place matchstick in each bucket
        for (let j = 0; j < buckets.length; j++) {
            if (buckets[j] === target) {
                continue;
            }
            if (buckets[j] + matchstick > target) {
                continue;
            }
            buckets[j] += matchstick;
            // matchsticks[index] = -Infinity;
            if (this.backtrack(matchsticks, index - 1, target, buckets, buckets[j] === target ? sidesLeft - 1 : sidesLeft)) {
                return true;
            }
            // matchsticks[index] = matchstick;
            buckets[j] -= matchstick;
        }

        // if (currSum + matchstick === target) {
        //     matchsticks[i] = -Infinity;
        //     // const newMatchsticks = [...matchsticks.slice(0, i), ...matchsticks.slice(i + 1)];
        //     if (this.backtrack(matchsticks, 0, target, sidesLeft - 1)) {
        //         return true;
        //     }
        //     matchsticks[i] = matchstick;
        // }
        // // can't use this stick so skip
        // else if (currSum + matchstick > target) {
        //     continue;
        // }
        // // try using current element
        // else {
        //     matchsticks[i] = -Infinity;
        //     // const newMatchsticks = [...matchsticks.slice(0, i), ...matchsticks.slice(i + 1)];
        //     if (this.backtrack(matchsticks, currSum + matchstick, target, sidesLeft)) {
        //         return true;
        //     }
        //     matchsticks[i] = matchstick;
        // }

        return false;
    }
}
