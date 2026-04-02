class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        if not edges:
            return True

        # build up graph
        graph = {i:set() for i in range(n)}
        for a, b in edges:
            graph[a].add(b)
            graph[b].add(a)

        visited = set()

        def dfs(node, parent):
            # detected cycle
            if node in visited:
                return False
            
            visited.add(node)

            for neighbor in graph[node]:
                if neighbor != parent:
                    if not dfs(neighbor, node):
                        return False
            
            return True

        return dfs(0, -1) and len(visited) == n

        # do a dfs on it, and if we detect a cycle we break
        # also check if we visited all nodes
        