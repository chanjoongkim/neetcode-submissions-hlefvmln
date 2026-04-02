class WordDictionary {
    class Node {
        boolean endOfWord = false;
        Map<Character, Node> children;

        Node(boolean endOfWord, Map<Character, Node> children) {
            this.endOfWord = endOfWord;
            this.children = children;
        }
    }

    Node root;

    public WordDictionary() {
        this.root = new Node(false, new HashMap<>());
    }

    public void addWord(String word) {
        Node curr = this.root;
        for (char c : word.toCharArray()) {
            if (!curr.children.containsKey(c)) {
                Node newChild = new Node(false, new HashMap<>());
                curr.children.put(c, newChild);
            }

            curr = curr.children.get(c);
        }

        // mark last node of word as an end
        curr.endOfWord = true;
    }

    public boolean search(String word) {
        return dfs(word, 0, this.root);
    }

    private boolean dfs(String word, int index, Node node) {
        if (index >= word.length()) {
            // node shouldn't be null, but double check this assumption
            return node.endOfWord;
        }

        char c = word.charAt(index);
        if (c == '.') {
            // iterate through all the node's children to see if any are true
            for (Map.Entry<Character, Node> entry : node.children.entrySet()) {
                if (dfs(word, index + 1, entry.getValue())) {
                    return true;
                }
            }
            return false;
        } else {
            if (!node.children.containsKey(c)) {
                return false;
            }

            return dfs(word, index + 1, node.children.get(c));
        }
    }
}
