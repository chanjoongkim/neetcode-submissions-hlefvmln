class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        // algorithm:
        // sort people array
        // then have left and right pointer (start and end of array)
        // try to build boats using left/right
        // if total weight is > limit, then we use a single boat for the larger person
        // and decrement right pointer
        // else we build boat with both people and move both pointers

        let result = 0;
        people.sort((a, b) => a - b);

        let left = 0;
        let right = people.length - 1;

        while (left <= right) {
            if (people[left] + people[right] > limit) {
                right--;
            }
            else {
                left++;
                right--;
            }
            result++;
        }

        return result;
    }
}
