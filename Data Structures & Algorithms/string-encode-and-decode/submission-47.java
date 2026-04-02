class Solution {

    public String encode(List<String> strs) {
        StringBuilder sb = new StringBuilder();

        for (String str : strs) {
            if (str.equals("")) {
                sb.append("<EMPTY>");
            } else {
                sb.append(str);
            }
            
            sb.append("__");
        }

        if (sb.length() >= 2)
            sb.delete(sb.length() - 2, sb.length());

        System.out.println(sb);
        return sb.toString();
    }

    public List<String> decode(String str) {
        if (str.length() == 0) {
            return new ArrayList<>();
        }
        
        String[] strs = str.split("__");

        List<String> result = new ArrayList<>();

        for (String string : strs) {
            if (string.equals("<EMPTY>")) {
                result.add("");
            } else {
                result.add(string);
            }
        }

        return result;
    }
}
