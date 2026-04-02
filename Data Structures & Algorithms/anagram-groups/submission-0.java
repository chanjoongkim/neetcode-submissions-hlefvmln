class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        if (strs == null || strs.length == 0) {
            return new ArrayList<>();
        }

        Map<String, List<String>> anagramLists = new HashMap<>();

        for (String str : strs) {
            char[] strChars = str.toCharArray();
            Arrays.sort(strChars);
            String sortedStr = new String(strChars);

            if (anagramLists.containsKey(sortedStr)) {
                // this should add the str to the list by reference so no need to explicitly "put" to the existing key/value pair
                List<String> anagramList = anagramLists.get(sortedStr);
                anagramList.add(str);
            } else {
                List<String> anagramList = new ArrayList<>();
                anagramList.add(str);
                anagramLists.put(sortedStr, anagramList);
            }
        }

        // iterate through all key/value pairs of the anagramLists map and return all lists combined
        List<List<String>> result = new ArrayList<>();
        for (Map.Entry<String, List<String>> entry : anagramLists.entrySet()) {
            result.add(entry.getValue());
        }

        return result;
    }
}
