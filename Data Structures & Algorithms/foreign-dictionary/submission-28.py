import collections
class Solution:
    def foreignDictionary(self, words: List[str]) -> str:
        if not words:
            return ""
        if len(words) == 1:
            return words[0]

        graph = self.buildGraph(words)
        print(graph)
        # visited = set()

        # if self.detectCycle(graph, words[0][0], visited):
        #     print("cycle detected", graph)
        #     return ""

        visited = {}
        res = []
        # do a dfs and build up a path, while also checking if a cycle exists at the same time
        def dfs(node):
            if node in visited:
                return visited[node]
            
            visited[node] = True
            # self.res += node

            for neighbor in graph[node]:
                if dfs(neighbor):
                    return True

            visited[node] = False
            res.append(node)

        # check if a cycle exists for every char in the graph
        for char in graph:
            if dfs(char):
                return ""
            
        res.reverse()
        return "".join(res)
    
    def detectCycle(self, graph, node, visited):
        if not node:
            return False
        
        if node in visited:
            return True

        visited.add(node)

        # add all neighbors of node that we haven't visited yet
        for neighbor in graph[node]:
            if neighbor in visited:
                return True
            else:
                if self.detectCycle(graph, neighbor, visited):
                    return True

        visited.remove(node)
        
        return False

        
    def buildGraph(self, words):
        graph = {char: set() for word in words for char in word}

        # for i in range(len(words) - 1):
        #     w1, w2 = words[i], words[i + 1]
            # minLen = min(len(w1), len(w2))
            # if len(w1) > len(w2) and w1[:minLen] == w2[:minLen]:
            #     return ""
        #     for j in range(minLen):
        #         if w1[j] != w2[j]:
        #             print(w1[j], w2[j])
        #             graph[w1[j]].add(w2[j])
        #             break
        # return graph

        # graph = collections.defaultdict(set)

        for i in range(len(words) - 1):
            word1 = words[i]
            word2 = words[i + 1]

            minLen = min(len(word1), len(word2))
            if len(word1) > len(word2) and word1[:minLen] == word2[:minLen]:
                return ""

            w1, w2 = self.findFirstDiff(word1, word2)

            if not w1 and not w2:
                continue

            # build an edge from w1 to w2
            graph[w1].add(w2)
        return graph

    def findFirstDiff(self, word1, word2):
        # minLen = min(len(word1), len(word2))
        # for i in range(minLen):
        #     if word1[i] != word2[i]:
        #         return word1[i], word2[i]
        # return "", ""


        if not word1 and not word2:
            return "", ""

        if not word1 or not word2:
            return "", ""

        i, j = 0, 0

        while i < len(word1) and j < len(word2) and word1[i] == word2[j]:
            i += 1
            j += 1

        if i >= len(word1) or j >= len(word2):
            return "", ""

        return word1[i], word2[j]