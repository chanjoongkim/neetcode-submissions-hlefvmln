class Solution {
    public List<String> generateParenthesis(int n) {

        Set<String> result = new HashSet<>();

        result.add("()");


        for (int curr = 1; curr < n; curr++) {
            Set<String> newResult = new HashSet<>();
            // for each string in result, iterate through and add "()" before and after each open parantheses
            // add new string to our new result set
            for (String str : result) {
                for (int i = 0; i < str.length(); i++) {
                    if (str.charAt(i) == '(') {
                        // add "()" before and after this index
                        // before
                        StringBuilder sb = new StringBuilder(str);
                        String beforeStr = str.substring(0, i) + "()" + str.substring(i);
                        newResult.add(beforeStr);

                        // after
                        String afterStr = str.substring(0, i + 1) + "()" + str.substring(i + 1);
                        newResult.add(afterStr);
                    }
                }
            }

            result = newResult;
        }
        
        return new ArrayList<>(result);
    }
}
