"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        if not intervals:
            return 0

        # sort by interval start
        intervals.sort(key=lambda interval: (interval.start, interval.end))

        res = 0
        prevEnd = -1
        visited = set()
        while len(visited) != len(intervals):
            for i in range(len(intervals)):
                if i not in visited:
                    if prevEnd == -1:
                        res += 1
                        prevEnd = intervals[i].end
                        visited.add(i)
                    else:
                        if intervals[i].start >= prevEnd:
                            prevEnd = intervals[i].end
                            visited.add(i)
            prevEnd = -1
        
        return res
