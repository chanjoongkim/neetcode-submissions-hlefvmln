class Solution {
    /**
     * @param {number[]} ratings
     * @return {number}
     */
    candy(ratings) {
        if (!ratings) {
            return 0;
        }
        if (ratings.length === 1) {
            return 1;
        }

        const candies = Array(ratings.length).fill(1);

        // two pass solution
        // first pass, ensure kid[i] has more candy than kid[i - 1] if higher rating
        // do this by ensuring kid[i] = kid[i - 1] + 1
        // second pass, go right to left
        // ensure that kid[i] = kid[i + 1]
        for (let i = 1; i < ratings.length; i++) {
            if (ratings[i] > ratings[i - 1]) {
                candies[i] = candies[i - 1] + 1;
            }
        }

        for (let i = ratings.length - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                // set to max of either incrementing right neighbor, or current value
                candies[i] = Math.max(candies[i + 1] + 1, candies[i]);
            }
        }

        return candies.reduce((acc, curr) => acc + curr, 0); 

        // // algorithm:
        // // initialize a candy array, all with 1 (since each child needs at least 1 candy)
        // // then iterate over the array, and increment indices where they are a higher rating value than the adjacement one?
        // // only increment if the # of candy of the higher rating is <= the adjacent lower rating child

        // // if we go over the whole array over again, then we ensure that we account for any changes made in a previous iteration
        // for (let j = 0; j < ratings.length; j++) {
        // for (let i = 0; i < ratings.length - 1; i++) {
        //     if (ratings[i] > ratings[i + 1]) {
        //         if (candies[i] <= candies[i + 1]) {
        //             candies[i] = candies[i + 1] + 1;
        //         }
        //     }
        //     else if (ratings[i + 1] > ratings[i]) {
        //         if (candies[i + 1] <= candies[i]) {
        //             candies[i + 1] = candies[i] + 1;
        //         }
        //     }
        // }}

        // console.log(ratings);
        // console.log(candies);

        // return candies.reduce((acc, curr) => acc + curr, 0);
    }
}
