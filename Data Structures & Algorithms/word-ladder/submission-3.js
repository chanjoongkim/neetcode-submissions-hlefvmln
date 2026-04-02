class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const graph = {};
        wordList.push(beginWord);

        wordList.forEach((word) => {
            graph[word] = new Set();
        });

        // endWord not in wordList
        if (!graph[endWord]) {
            return 0;
        }

        for (let i = 0; i < wordList.length; i++) {
            for (let j = i + 1; j < wordList.length; j++) {
                const word1 = wordList[i];
                const word2 = wordList[j];

                if (this.wordsAreOneApart(word1, word2)) {
                    graph[word1].add(word2);
                    graph[word2].add(word1);
                }
            }
        }

        const queue = new Queue();
        const visited = new Set();
        queue.push(beginWord);
        visited.add(beginWord);


        let distance = 0;
        while(!queue.isEmpty()) {
            let levelSize = queue.size();
            distance++;
            for (let i = 0; i < levelSize; i++) {
                const word = queue.pop();

                const neighbors = graph[word];

                for (const neighbor of neighbors) {
                    if (neighbor === endWord) {
                        return distance + 1;
                    }

                    if (neighbor !== word && !visited.has(neighbor)) {
                        visited.add(neighbor);
                        queue.push(neighbor);
                    }
                }
            }
            
        }

        return 0;
    }

    wordsAreOneApart(word1, word2) {
        let firstDiffNotFound = true;
        for (let i = 0; i < word1.length; i++) {
            if (word1.charAt(i) !== word2.charAt(i)) {
                if (firstDiffNotFound) {
                    firstDiffNotFound = false;
                } else {
                    return false;
                }
            }
        }

        return true;
    }
}
