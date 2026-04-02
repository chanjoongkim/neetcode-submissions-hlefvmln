class Solution {
    public String encode(List<String> strs) {
        StringBuilder sb = new StringBuilder();

        for (String str : strs) {
            int length = str.length();
            sb.append(length + "#" + str);
        }

        return sb.toString();
    }

    public List<String> decode(String str) {
        if (str == null || str.length() == 0) {
            return new ArrayList<String>();
        }

        List<String> result = new ArrayList<>();

        int i = 0;
        while (i < str.length()) {
            // grab length of char by looking for the next "#"
            int j = i;
            while (str.charAt(j) != '#') {
                
                j++;
            }
            int wordLength = Integer.parseInt(str.substring(i, j));

            // get the word
            String nextWord = str.substring(j + 1, j + 1 + wordLength);
            result.add(nextWord);

            i += (j - i + 1) + wordLength; 
        }

        return result;
    }
}
