class Solution {
    // trie

    class Node {
        Map<Character, Node> children;
        boolean endOfWord = false;
        int wordsIndex = -1;

        Node(Map<Character, Node> children, boolean endOfWord, int wordsIndex) {
            this.children = children;
            this.endOfWord = endOfWord;
            this.wordsIndex = wordsIndex;
        }
    }

    public List<String> findWords(char[][] board, String[] words) {
        // build trie
        Node root = new Node(new HashMap<>(), false, -1);
        for (int i = 0; i < words.length; i++) {
            String word = words[i];
            Node curr = root;
            for (char c : word.toCharArray()) {
                if (!curr.children.containsKey(c)) {
                    curr.children.put(c, new Node(new HashMap<>(), false, -1));
                }
                curr = curr.children.get(c);
            }
            curr.endOfWord = true;
            curr.wordsIndex = i;
        }

        List<String> result = new ArrayList<>();
        // traverse through board
        // go through trie at each spot in the board and add any words we can create starting from the spot

        for (int r = 0; r < board.length; r++) {
            for (int c = 0; c < board[0].length; c++) {
                Set<String> visited = new HashSet<>();

                bfs(board, r, c, visited, root, words, result);
            }
        }

        return result;
    }

    private void bfs(char[][] board, int r, int c, Set<String> visited, Node trie, String[] words, List<String> result) {
        if (visited.contains(r + "-" + c)) {
            return;
        }

        if (trie.endOfWord) {
            if (trie.wordsIndex != -1) {
                result.add(words[trie.wordsIndex]);
                trie.wordsIndex = -1;
            }
        }

        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) {
            return;
        }

        char ch = board[r][c];
        if (!trie.children.containsKey(ch)) {
            return;
        }

        Node child = trie.children.get(ch);

        visited.add(r + "-" + c);

        bfs(board, r - 1, c, visited, child, words, result);
        bfs(board, r + 1, c, visited, child, words, result);
        bfs(board, r, c - 1, visited, child, words, result);
        bfs(board, r, c + 1, visited, child, words, result);

        visited.remove(r + "-" + c);
    }
}
