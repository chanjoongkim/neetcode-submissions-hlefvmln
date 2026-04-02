class Solution {
    public String longestPalindrome(String s) {
        // odd length palindrome, start at each index (single), and increment one out while still a valid palindrome
        // even length palindrome, split each index (one before and one after), and increment out while still a valid palindrome
        String result = "";
        for (int i = 0; i < s.length(); i++) {
            String oddPalindrome = longestOddPalindrome(s, i);
            String evenPalindrome = longestEventPalindrome(s, i);

            if (oddPalindrome.length() > evenPalindrome.length() && oddPalindrome.length() > result.length()) {
                result = oddPalindrome;
            } else if (evenPalindrome.length() > oddPalindrome.length() && evenPalindrome.length() > result.length()) {
                result = evenPalindrome;
            }
        }

        return result;
        // return the max of both approaches
    }

    private String longestOddPalindrome(String s, int i) {
        int left = i;
        int right = i;

        String palindrome = "";

        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            palindrome = s.substring(left, right + 1);
            left--;
            right++;
        }

        return palindrome;
    }

    private String longestEventPalindrome(String s, int i) {
        int left = i;
        int right = i + 1;

        String palindrome = "";
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            palindrome = s.substring(left, right + 1);
            left--;
            right++;
        }

        return palindrome;
    }
}
