class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> newList = new ArrayList<>();

        int i = 0;
        while (i < intervals.length && intervals[i][1] < newInterval[0]) {
            newList.add(intervals[i]);
            i++;
        }

        if (i == intervals.length) {
            // add newInterval to end
            newList.add(newInterval);
            return convert(newList);
        } else if (intervals[i][0] > newInterval[1]) {
            // add newInterval to corresponding i index
            newList.add(newInterval);
            for (int j = i; j < intervals.length; j++) {
                newList.add(intervals[j]);
            }

            return convert(newList);
        } else {
            // overlapping interval
            int[] newI = new int[2];
            newI[0] = Math.min(newInterval[0], intervals[i][0]);
            newI[1] = intervals[i][1];

            // while newInterval end > intervals[i] start, iterate
            while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
                i++;
            }

            // at this point, either i is at the end (and we take max of newInterval end or lastInterval end)
            // or i is in the middle, and we take max of newInterval end or lastKnownInterval end
            newI[1] = Math.max(newInterval[1], intervals[i - 1][1]);
            newList.add(newI);

            // at any remaining part of intervals
            for (int j = i; j < intervals.length; j++) {
                newList.add(intervals[j]);
            }
            return convert(newList);
        }
    }

    private int[][] convert(List<int[]> list) {
        int[][] result = new int[list.size()][];
        for (int i = 0; i < list.size(); i++) {
            result[i] = list.get(i);
        }

        return result;
    }
}
