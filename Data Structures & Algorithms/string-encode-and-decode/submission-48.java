class Solution {

    public String encode(List<String> strs) {
        StringBuilder sb = new StringBuilder();

        for (String str : strs) {
            sb.append(str.length() + "#" + str);
        }

        System.out.println(sb);
        // 5#Hello5#World
        return sb.toString();
    }

    public List<String> decode(String str) {
        List<String> result = new ArrayList<>();

        if (str.length() == 0) {
            return result;
        }

        int index = 0;
        while (index < str.length()) {
            // get "number", by iterating until we hit #
            int poundIndex = index;
            while (str.charAt(poundIndex) != '#' && poundIndex < str.length()) {
                poundIndex++;
            }
            System.out.println("index = " + index + " poundIndex = " + poundIndex);

            int strLength = Integer.parseInt(str.substring(index, poundIndex));

            // now that we know the length and we have the position of #, we can just get substring from # + strLength to get the word
            String word = str.substring(poundIndex + 1, poundIndex + 1 + strLength);
            System.out.println(word);
            result.add(word);

            index = poundIndex + 1 + strLength;
        }

        return result;
    }
}
