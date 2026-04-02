class PrefixTree {
    class Node {
        Map<Character, Node> children;
        char val;

        Node(char val, Map<Character, Node> children) {
            this.val = val;
            this.children = children;
        }

        Node getChild(char child) {
            if (!this.children.containsKey(child)) {
                return null;
            }

            return this.children.get(child);
        }

        Node addChildren(char child) {
            // don't overwrite existing child
            if (!this.children.containsKey(child)) {
                Node newChild = new Node(child, new HashMap<>());
                this.children.put(child, newChild);
            }
            
            return this.children.get(child);
        }
    }

    Node root;

    public PrefixTree() {
        this.root = new Node('_', new HashMap<>());
    }

    public void insert(String word) {
        Node curr = root;
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);

            // add current character to children of current node
            // addChildren will return the next node (the node corresponding to the current character in the trie)
            curr = curr.addChildren(c);
        }
        // add "end" of word
        curr.addChildren('.');
    }

    public boolean search(String word) {
        Node curr = root;
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);

            curr = curr.getChild(c);

            // if previous current didn't have 'c' as a child, it'll return null so return false
            if (curr == null) {
                return false;
            }
        }

        // if we made it through the whole word, check that we have a '.' to end the word
        return curr.getChild('.') != null;
    }

    public boolean startsWith(String prefix) {
        Node curr = root;
        for (int i = 0; i < prefix.length(); i++) {
            char c = prefix.charAt(i);

            curr = curr.getChild(c);

            if (curr == null) {
                return false;
            }
        }

        return true;
    }
}
