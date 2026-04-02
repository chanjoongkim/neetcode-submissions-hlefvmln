class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        if (strs == null || strs.length == 0) {
            return new ArrayList<>();
        }

        Map<Map<Character, Integer>, List<String>> anagramLists = new HashMap<>();

        for (String str : strs) {
            Map<Character, Integer> strFreqs = buildCharFreq(str);

            if (anagramLists.containsKey(strFreqs)) {
                // this should add the str to the list by reference so no need to explicitly "put" to the existing key/value pair
                List<String> anagramList = anagramLists.get(strFreqs);
                anagramList.add(str);
            } else {
                List<String> anagramList = new ArrayList<>();
                anagramList.add(str);
                anagramLists.put(strFreqs, anagramList);
            }
        }

        // iterate through all key/value pairs of the anagramLists map and return all lists combined
        List<List<String>> result = new ArrayList<>();
        for (Map.Entry<Map<Character, Integer>, List<String>> entry : anagramLists.entrySet()) {
            result.add(entry.getValue());
        }

        return result;
    }

    // this function builds the char freq of a string s
    // in O(S) time where S is the length of string s,
    // and O(S) space where S is the length of string s.
    private Map<Character, Integer> buildCharFreq (String s) {
        Map<Character, Integer> freqs = new HashMap<>();
        for (char c : s.toCharArray()) {
            freqs.put(c, freqs.getOrDefault(c, 0) + 1);
        }

        return freqs;
    }
}
