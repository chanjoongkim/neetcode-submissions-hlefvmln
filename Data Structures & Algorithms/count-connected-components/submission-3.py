class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        if not edges:
            return n

        # build graph
        graph = {i:set() for i in range(n)}
        for a, b in edges:
            graph[a].add(b)
            graph[b].add(a)

        visited = set()

        def dfs(node, visited):
            if node in visited:
                return

            visited.add(node)

            neighbors = graph[node]

            for neighbor in neighbors:
                if neighbor not in visited:
                    dfs(neighbor, visited)

        components = 0
        for i in range(n):
            if i not in visited:
                components += 1
                dfs(i, visited)

        return components
        