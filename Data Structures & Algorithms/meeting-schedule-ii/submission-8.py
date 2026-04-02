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

        # O(N log N) time, O(N) space

        # sort by interval start, then end
        intervals.sort(key=lambda interval: (interval.start, interval.end))

        res = 0
        prevEnd = -1
        visited = set()
        # traverse through each meeting after sorting, and try to greedily build up
        # each day's worth of meetings
        # if we have a conflict, skip it for the next round of traversal
        # O(N) time for this part of the algo because we visit each interval at most once
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
