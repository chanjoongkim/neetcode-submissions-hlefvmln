class Solution {

    // Encoding: we delimit with the '|' character, and base64 encode everything in between
    public String encode(List<String> strs) {
        StringBuilder sb = new StringBuilder();


        // format of ["neet", "code"] will be "4#neet4#code"
        for (String word : strs) {
            sb.append(word.length());
            sb.append("#");
            sb.append(word);
        }
        
        return sb.toString();
    }

    // Decoding: we first split words by '|' character, then base64 decode the words
    public List<String> decode(String str) {
        List<String> decodedWords = new ArrayList<>();
        if (str == null || str.length() == 0) {
            return decodedWords;
        }
        
        int i = 0;
        while (i < str.length()) {
            int j = i;
            while (str.charAt(j) != '#') {
                j++;
            }

            int wordLength = Integer.valueOf(str.substring(i, j));

            i = j + wordLength + 1;
            String word = str.substring(j + 1, i);

            decodedWords.add(word);
        }

        return decodedWords;
    }
}
