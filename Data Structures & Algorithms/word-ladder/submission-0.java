class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        wordList.add(beginWord);
        Map<String, Set<String>> graph = new HashMap<>();
        for (String word : wordList) {
            graph.put(word, new HashSet<>());
        }

        for (int i = 0; i < wordList.size(); i++) {
            for (int j = i + 1; j < wordList.size(); j++) {
                String word1 = wordList.get(i);
                String word2 = wordList.get(j);
                if (wordsAreNeighbors(word1, word2)) {
                    graph.get(word1).add(word2);
                    graph.get(word2).add(word1);
                }
            }
        }

        System.out.println(graph);

        // do BFS from beginWord to endWord
        Queue<String> queue = new LinkedList<>();
        Set<String> visited = new HashSet<>();
        queue.offer(beginWord);
        visited.add(beginWord);

        int distance = 1;
        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            distance++;
            for (int i = 0; i < levelSize; i++) {
                String node = queue.poll();

                Set<String> neighbors = graph.get(node);
                for (String neighbor : neighbors) {
                    if (neighbor.equals(endWord)) {
                        return distance;
                    }
                    if (!neighbor.equals(node) && !visited.contains(neighbor)) {
                        visited.add(neighbor);
                        queue.offer(neighbor);
                    }
                }
            }
            
        }

        return 0;
    }

    private boolean wordsAreNeighbors(String word1, String word2) {
        if (word1.length() != word2.length()) {
            return false;
        }

        int diffChars = 0;
        for (int i = 0; i < word1.length(); i++) {
            if (word1.charAt(i) != word2.charAt(i)) {
                diffChars++;
            }
        }

        return diffChars == 1;
    }
}
