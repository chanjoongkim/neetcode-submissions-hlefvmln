class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        if (!candidates) {
            return [];
        }

        candidates.sort((a, b) => a - b);

        const result = [];
        const curr = [];

        this.combinationSum2Helper(candidates, 0, target, 0, curr, result);

        return result;

        // /**
        //  * [1,2,2,4,5,6,9] target = 8
        //  * 
        //  */

        // function dfs(index, sum) {
        //     if (sum === 0) {
        //         result.push([...curr]);
        //         return;
        //     }
        //     if (sum < 0 || index >= candidates.length) {
        //         return;
        //     }

        //     let i = index;
        //     while (i < candidates.length) {
        //         // include element
        //         curr.push(candidates[i]);
        //         dfs(i + 1, sum - candidates[i]);
        //         curr.pop();

                

                

        //         // skip element (including duplicates)
        //         while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
        //             console.log(i, candidates[i]);
        //             i++;
        //         }
        //         dfs(i + 1, sum);

                
        //         i++;
        //     }
        // }

        // dfs(0, target);

        // return result;
    }

    combinationSum2Helper(candidates, index, target, currSum, curr, result) {
        if (currSum === target) {
            result.push([...curr]);
            return;
        }
        else if (currSum > target || index >= candidates.length) {
            return;
        }

        // use element
        curr.push(candidates[index]);
        currSum += candidates[index];
        this.combinationSum2Helper(candidates, index + 1, target, currSum, curr, result);
        curr.pop();
        currSum -= candidates[index];

        // skip element (including duplicates)
        while (index + 1 < candidates.length && candidates[index] === candidates[index + 1]) {
            index++;
        }
        this.combinationSum2Helper(candidates, index + 1, target, currSum, curr, result);
    }
}
