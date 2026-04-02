class Solution:
    def islandsAndTreasure(self, grid: List[List[int]]) -> None:
        if not grid:
            return

        rows = len(grid)
        cols = len(grid[0])

        visited = set()

        queue = deque()

        def bfs(r, c):

            if r < 0 or r >= rows or c < 0 or c >= cols or (r, c) in visited or grid[r][c] == -1:
                return
            
            visited.add((r, c))
            queue.append((r, c))

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 0:
                    queue.append((r, c))
                    visited.add((r, c))

        distance = 0
        while queue:
            for i in range(len(queue)):
                r, c = queue.popleft()
                grid[r][c] = distance
                bfs(r - 1, c)
                bfs(r + 1, c)
                bfs(r, c - 1)
                bfs(r, c + 1)
            distance += 1
        
