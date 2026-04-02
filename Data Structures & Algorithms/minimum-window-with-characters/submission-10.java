class Solution {
    public String minWindow(String s, String t) {
        if (s.length() < t.length()) {
            return "";
        }

        Map<Character, Integer> tMap = new HashMap<>();
        Map<Character, Integer> sMap = new HashMap<>();
        for (int i = 0; i < t.length(); i++) {
            tMap.put(t.charAt(i), 1 + tMap.getOrDefault(t.charAt(i), 0));
            sMap.put(s.charAt(i), 1 + sMap.getOrDefault(s.charAt(i), 0));
        }

        int needs = 0;
        for (Map.Entry<Character, Integer> entry : tMap.entrySet()) {
            Character tChar = entry.getKey();
            Integer tCount = entry.getValue();

            if (!sMap.containsKey(tChar)) {
                needs++;
            } else {
                Integer sCount = sMap.get(tChar);
                if (sCount < tCount) {
                    needs += (tCount - sCount);
                }
            }
        }

        int left = 0;
        int right = t.length();
        String shortestS = null;
        while (right < s.length()) {
            // while sMap contains tMap, shrink window from left to right by moving left
            while (needs == 0) {
                if (shortestS == null || right - left < shortestS.length()) {
                    shortestS = s.substring(left, right);
                }

                char oldLeftChar = s.charAt(left);
                int leftCount = sMap.get(oldLeftChar);
                leftCount--;

                if (leftCount == 0) {
                    sMap.remove(oldLeftChar);
                    if (tMap.containsKey(oldLeftChar)) {
                        needs++;
                    }
                } else {
                    sMap.put(oldLeftChar, leftCount);
                    if (tMap.containsKey(oldLeftChar) && tMap.get(oldLeftChar) > leftCount) {
                        needs++;
                    }
                }
                left++;
            }

            // add right char
            char rightChar = s.charAt(right);
            sMap.put(rightChar, 1 + sMap.getOrDefault(rightChar, 0));

            if (tMap.containsKey(rightChar) && sMap.get(rightChar) == tMap.get(rightChar)) {
                needs--;
            }
            right++;
        }

        // check last window
        while (needs == 0) {
            if (shortestS == null || right - left < shortestS.length()) {
                shortestS = s.substring(left, right);
            }

            char oldLeftChar = s.charAt(left);
            int leftCount = sMap.get(oldLeftChar);
            leftCount--;

            if (leftCount == 0) {
                sMap.remove(oldLeftChar);
                if (tMap.containsKey(oldLeftChar)) {
                    needs++;
                }
            } else {
                sMap.put(oldLeftChar, leftCount);
                if (tMap.containsKey(oldLeftChar) && tMap.get(oldLeftChar) > leftCount) {
                    needs++;
                }
            }
            left++;
    }

        return shortestS == null ? "" : shortestS;
    }

    private boolean sContainsT(Map<Character, Integer> sMap, Map<Character, Integer> tMap) {
        // iterate through all of tMap, and see if sMap contain a matching key and the value is at least the value of tMap's key
        for (Map.Entry<Character, Integer> entry : tMap.entrySet()) {
            Character tChar = entry.getKey();
            Integer tCount = entry.getValue();

            if (!sMap.containsKey(tChar)) {
                return false;
            } else {
                Integer sCount = sMap.get(tChar);
                if (sCount < tCount) {
                    return false;
                }
            }
        }

        return true;
    }
}
