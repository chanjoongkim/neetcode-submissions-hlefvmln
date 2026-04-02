/**
 * Definition of Interval:
 * public class Interval {
 *     public int start, end;
 *     public Interval(int start, int end) {
 *         this.start = start;
 *         this.end = end;
 *     }
 * }
 */

class Solution {
    public boolean canAttendMeetings(List<Interval> intervals) {
        // sort by start time
        // check if any intervals overlap
        Collections.sort(intervals, (a, b) -> a.start - b.start);
        // intervals.sort(Comparator.comparing(Interval::start));

        for (int i = 0; i < intervals.size() - 1; i++) {
            if (intervals.get(i + 1).start < intervals.get(i).end) {
                return false;
            }
        }

        return true;
    }
}
