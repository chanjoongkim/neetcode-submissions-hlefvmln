class Solution {
    public int leastInterval(char[] tasks, int n) {
        int cpuClock = 0;
        Map<Character, Integer> taskFreq = new HashMap<>();
        PriorityQueue<Pair<Character, Integer>> maxHeap = new PriorityQueue<>((a, b) -> b.getValue() - a.getValue());
        Queue<Pair<Character, Integer>> queue = new LinkedList<>();

        // build task freqs
        for (char c : tasks) {
            taskFreq.put(c, taskFreq.getOrDefault(c, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : taskFreq.entrySet()) {
            char task = entry.getKey();
            int freq = entry.getValue();

            maxHeap.add(new Pair<>(task, freq));
        }

        // maxHeap has tasks in order of most freq to least freq
        // add first task to queue
        // then while queue and maxHeap are both not empty, iterate 
        
        // while maxHeap or queue are non-empty
        while (!maxHeap.isEmpty() || !queue.isEmpty()) {
            if (!maxHeap.isEmpty()) {
                // process most frequent task that is available (since it's in the heap)
                Pair<Character, Integer> mostFreqTask = maxHeap.poll();
                
                // update freq
                taskFreq.put(mostFreqTask.getKey(), taskFreq.get(mostFreqTask.getKey()) - 1);

                // put task in queue with cooldown time if freq isn't 0
                if (taskFreq.get(mostFreqTask.getKey()) > 0) {
                    queue.add(new Pair<>(mostFreqTask.getKey(), cpuClock + n));
                }
            }

            if (!queue.isEmpty()) {
                Pair<Character, Integer> first = queue.peek();
                if (first.getValue() <= cpuClock) {
                    first = queue.poll();

                    // re-insert into heap if task is still available
                    if (taskFreq.get(first.getKey()) > 0) {
                        maxHeap.add(new Pair<>(first.getKey(), taskFreq.get(first.getKey())));
                    }
                }
            }

            cpuClock++;
        }

        return cpuClock;
    }
}
