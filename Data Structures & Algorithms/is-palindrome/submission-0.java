class Solution {
    public boolean isPalindrome(String s) {
        if (s == null || s.length() == 0) {
            return true;
        }

        int leftPtr = 0;
        int rightPtr = s.length() - 1;

        while (leftPtr < rightPtr) {
            // validate left char
            char leftChar = s.charAt(leftPtr);
            if (!Character.isLetterOrDigit(leftChar)) {
                // ignore current char and move on
                leftPtr++;
                continue;
            }

            char rightChar = s.charAt(rightPtr);
            if (!Character.isLetterOrDigit(rightChar)) {
                // ignore current char and move on
                rightPtr--;
                continue;
            }

            char lowercaseLeftChar = Character.toLowerCase(leftChar);
            char lowercaseRightChar = Character.toLowerCase(rightChar);

            if (lowercaseLeftChar != lowercaseRightChar) {
                return false;
            }
            leftPtr++;
            rightPtr--;
        }

        return true;
    }
}
