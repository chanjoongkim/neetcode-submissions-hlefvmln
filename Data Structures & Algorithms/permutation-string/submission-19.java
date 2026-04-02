class Solution {
    public boolean checkInclusion(String s1, String s2) {
        if (s1 == null || s2 == null) {
            return false;
        }
        if (s1.length() > s2.length()) {
            return false;
        }

        // build char freq of s1
        Map<Character, Integer> s1CharFreq = new HashMap<>();
        for (char c : s1.toCharArray()) {
            s1CharFreq.put(c, 1 + s1CharFreq.getOrDefault(c, 0));
        }

        System.out.println(s1CharFreq);
        System.out.println();

        // using sliding window of size s1.length, go through all 
        // windows of s2 and see if the s2-window char freq deep equals s1 char freq

        int left = 0;
        int right = s1.length();

        Map<Character, Integer> s2SubCharFreq = new HashMap<>();
        // build up initial s2SubCharFreq
        for (int i = 0; i < right; i++) {
            char c = s2.charAt(i);
            s2SubCharFreq.put(c, 1 + s2SubCharFreq.getOrDefault(c, 0));
        }

        while (right < s2.length()) {
            System.out.println(s2SubCharFreq);
            // check if previous window is valid
            if (s1CharFreq.equals(s2SubCharFreq)) {
                return true;
            }

            // move window over by 1 index, and update s2SubCharFreq map
            char oldLeftC = s2.charAt(left);
            int newCount = s2SubCharFreq.get(oldLeftC) - 1;
            if (newCount == 0) {
                s2SubCharFreq.remove(oldLeftC);
            } else {
                s2SubCharFreq.put(oldLeftC, newCount);
            }
            
            char newRightC = s2.charAt(right);
            s2SubCharFreq.put(newRightC, 1 + s2SubCharFreq.getOrDefault(newRightC, 0));

            left++;
            right++;
        } 

        return s1CharFreq.equals(s2SubCharFreq);
    }
}
