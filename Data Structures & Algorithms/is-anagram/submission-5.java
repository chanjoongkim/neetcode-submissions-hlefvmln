class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        Map<Character, Integer> sCharFreq = new HashMap<>();
        Map<Character, Integer> tCharFreq = new HashMap<>();

        for (char c : s.toCharArray()) {
            sCharFreq.put(c, sCharFreq.getOrDefault(c, 0) + 1);
        }

        for (char c : t.toCharArray()) {
            tCharFreq.put(c, tCharFreq.getOrDefault(c, 0) + 1);
        }

        return sCharFreq.equals(tCharFreq);
    }
}
