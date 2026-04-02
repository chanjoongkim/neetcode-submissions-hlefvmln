class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        // edge case, if h < piles.length, impossible
        if (piles == null || h < piles.length) return -1;

        /**
        
        [1, 4, 3, 2], h = 9

        sort:
        [1, 2, 3, 4], h = 9

        k=1
        [0, 1, 2, 3] h = 5
        [_, 0, 1, 2] h = 1
        [_, _, 0, 1] h = 0


        k = 2
        [0, 0, 1, 2] h = 5
        [_, _, 0, 0] h = 3

        k = 3
        [0, 0, 0, 1] h = 5
        [_, _, _, 0] h = 4

        k = 4
        [0, 0, 0, 0] h = 5



        [25, 10, 23, 4] h = 4
        sort
        [4, 10, 23, 25] h = 4

        k = 10

        [0, 0, 13, 25] h = 0 X

        algorithm:
        sort array first
        then, do binary search and choose a mid value.
        using the mid value, see if we can eat all bananas using midvalue as K with H constraint (iterate over the whole array with division and see if the sum > h)
        if not possible, then choose a larger value (go right on the binary search) and repeat
        if possible, then go left and see if there's a smaller value we can use.
        keep track of successful K values, and return the smallest one after we break out of our loop?
        */

        Arrays.sort(piles);

        int k = Integer.MAX_VALUE;
        int start = 1;
        int end = piles[piles.length - 1];

        while (start <= end) {
            int testK = (start + end) / 2;

            if (canEatAll(piles, h, testK)) {
                k = Math.min(k, testK);
                end = testK - 1;
            } else {
                start = testK + 1;
            }
        }

        return k;
    }

    private boolean canEatAll(int[] piles, int h, int k) {
        int sum = 0;
        for (int pile : piles) {
            if ((pile % k) > 0) {
                sum += 1 + (pile / k);
            } else {
                sum += (pile / k);
            }
        }

        return sum <= h;
    }
}
