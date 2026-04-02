class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<>();
        List<String> current = new ArrayList<>();

        backtrack(s, result, current);

        return result;
    }

    private void backtrack(String s, List<List<String>> result, List<String> current) {
        if (s.equals("")) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int i = 0; i < s.length(); i++) {
            if (isPalindrome(s, 0, i)) {
                current.add(s.substring(0, i + 1));
                backtrack(s.substring(i + 1), result, current);
                current.remove(current.size() - 1);
            }
        }
    }

    private boolean isPalindrome(String s, int left, int right) {
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}
