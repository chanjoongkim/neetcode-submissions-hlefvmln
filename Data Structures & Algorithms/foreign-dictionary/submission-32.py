import collections
class Solution:
    def foreignDictionary(self, words: List[str]) -> str:
        if not words:
            return ""
        if len(words) == 1:
            return words[0]

        graph = self.buildGraph(words)

        # visited = set()

        # if self.detectCycle(graph, words[0][0], visited):
        #     print("cycle detected", graph)
        #     return ""

        visited = {}
        res = []
        # do a post order dfs and build up a path, while also checking if a cycle exists at the same time
        def dfs(node):
            if node in visited:
                return visited[node]
            
            visited[node] = True
            # self.res += node

            for neighbor in graph[node]:
                if dfs(neighbor):
                    return True

            visited[node] = False
            # need to do a post order DFS 
            res.append(node)

        # check if a cycle exists for every char in the graph
        # also we run this on all chars because we have to take into account disconnected components of the graph
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
        graph = {}
        for word in words:
            for char in word:
                graph[char] = set()

        for i in range(len(words) - 1):
            word1 = words[i]
            word2 = words[i + 1]

            # we are told (in the original leetcode description) that if the first min(s.length, t.length) letters are the same, 
            # then s is smaller if and only if s.length < t.length. So if we have a scenarios where "apes" comes before "ape" in our word list,
            # then we have an invalid ordering
            minLen = min(len(word1), len(word2))
            # if word1 is longer than word2, but they share the same prefix, then we have an invalid scenario
            if len(word1) > len(word2) and word1[:minLen] == word2[:minLen]:
                return ""

            w1, w2 = self.findFirstDiff(word1, word2)

            if not w1 and not w2:
                continue

            # build an edge from w1 to w2
            graph[w1].add(w2)
        return graph

    def findFirstDiff(self, word1, word2):
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