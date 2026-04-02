class Solution {
    public int numDecodings(String s) {
        Set<String> mapping = new HashSet<>();
        for (int i = 1; i <= 26; i++) {
            mapping.add("" + i);
        }

        Map<Integer, Integer> memo = new HashMap<>();
        return numDecodingsHelper(s, 0, mapping, memo);
    }

    private int numDecodingsHelper(String s, int i, Set<String> mapping, Map<Integer, Integer> memo) {
        if (i >= s.length()) {
            return 1;
        }

        if (s.charAt(i) == '0') {
            return 0;
        }
        if (memo.containsKey(i)) {
            return memo.get(i);
        }

        int onesResult = 0;

        // check one digit
        String oneDigit = "" + s.charAt(i);
        if (mapping.contains(oneDigit)) {
            onesResult++;
            onesResult *= numDecodingsHelper(s, i + 1, mapping, memo);
        }

        int twosResult = 0;
        if (i < s.length() - 1) {
            String twoDigits = s.substring(i, i + 2);
            if (mapping.contains(twoDigits)) {
                twosResult++;
                twosResult *= numDecodingsHelper(s, i + 2, mapping, memo);
            }
        }

        int result = onesResult + twosResult;

        memo.put(i, result);

        return result;
    }
}
