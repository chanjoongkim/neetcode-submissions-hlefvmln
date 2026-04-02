"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def canAttendMeetings(self, intervals: List[Interval]) -> bool:
        if not intervals:
            return True

        # sort intervals by first value
        intervals.sort(key=lambda interval: interval.start)

        prevEnd = intervals[0].end

        for interval in intervals[1:]:
            if interval.start < prevEnd:
                return False
            prevEnd = interval.end

        return True