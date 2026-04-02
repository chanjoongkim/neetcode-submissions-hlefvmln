class Solution {
    public int[] twoSum(int[] numbers, int target) {
        if (numbers == null || numbers.length == 0) {
            return new int[] {-1, -1};
        }

        int leftPtr = 0;
        int rightPtr = numbers.length - 1;

        while (leftPtr < rightPtr) {
            int sum = numbers[leftPtr] + numbers[rightPtr];

            if (sum == target) {
                return new int[] { leftPtr + 1, rightPtr + 1 };
            }

            // if sum < target, then we need to move left pointer to get a bigger sum
            if (sum < target) {
                leftPtr++;
            } else {
                rightPtr--;
            }
        }

        return new int[] { -1, -1 };
    }
}
