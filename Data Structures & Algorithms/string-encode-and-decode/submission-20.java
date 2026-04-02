class Solution {

    // Encoding: we delimit with the '|' character, and base64 encode everything in between
    public String encode(List<String> strs) {
        StringBuilder sb = new StringBuilder();

        for (String word : strs) {
            // sb.append(Base64.getEncoder().encodeToString(word.getBytes()));
            if (word.length() == 0) {
                sb.append(Base64.getEncoder().encodeToString("emptyWord".getBytes()));
                // sb.append("emptyWord");
            }
            else {
                sb.append(Base64.getEncoder().encodeToString(word.getBytes()));
                // sb.append(word);
            }
            sb.append("|");
        }

        // remove the last instance of "|"
        if (sb.length() > 0 && sb.charAt(sb.length() - 1) == '|') {
            sb.deleteCharAt(sb.length() - 1);
        }
        
        System.out.println("encoded string = " + sb.toString());

        return sb.toString();
    }

    // Decoding: we first split words by '|' character, then base64 decode the words
    public List<String> decode(String str) {
        List<String> decodedWords = new ArrayList<>();
        if (str == null || str.length() == 0) {
            return decodedWords;
        }
        System.out.println(str);
        
        String[] encodedWords = str.split("\\|");

        for (String encodedWord : encodedWords) {
            if (encodedWord.equals("ZW1wdHlXb3Jk")) {
                decodedWords.add("");
                continue;
            }
            System.out.println(encodedWord);
            byte[] decodedBytes = Base64.getDecoder().decode(encodedWord);
            String decodedString = new String(decodedBytes);
            decodedWords.add(decodedString);
            // decodedWords.add(encodedWord);
        }

        return decodedWords;
    }
}
