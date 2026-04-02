class Solution {
    public int countSubstrings(String s) {
        int result = 0;
        for (int i = 0; i < s.length(); i++) {
            result += palindromes(s, i, true) + palindromes(s, i, false);
        }

        return result;
    }

    private int palindromes(String s, int i, boolean oddLength) {
        int left = i;
        int right = oddLength ? i : i + 1;

        int count = 0;
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            count++;
            left--;
            right++;
        }

        return count;
    }
}
