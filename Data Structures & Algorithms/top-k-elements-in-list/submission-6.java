class Solution {
    class NumPair {
        int num;
        int freq;

        NumPair(int num, int freq) {
            this.num = num;
            this.freq = freq;
        }
    }
    public int[] topKFrequent(int[] nums, int k) {
        // build num freqs
        // use heap (priority queue) to keep track of K most frequent numbers
        // return result with top K elements

        Map<Integer, Integer> freqs = buildNumFreqs(nums);
        System.out.println(freqs);

        // 
        PriorityQueue<NumPair> heap = new PriorityQueue<>((a,b) -> a.freq - b.freq);
        System.out.println(heap);

        freqs.forEach((key, value) -> {
            System.out.println("key = " + key + " value = " + value);
            heap.add(new NumPair(key, value));

            // only keep K most elements
            // remove the smallest element (least freq)
            if (heap.size() > k) {
                heap.poll();
            }
        });

        // for (Map.Entry<Integer, Integer> entry : freqs.entrySet()) {
        //     int num = entry.getKey();
        //     int freq = entry.getValue();
        //     System.out.println("num = " + num + " freq = " + freq);

        //     heap.add(new NumPair(num, freq));
        // }

        System.out.println(heap);

        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = heap.poll().num;
        }

        return result;
    }

    private Map<Integer, Integer> buildNumFreqs(int[] nums) {
        Map<Integer, Integer> freqs = new HashMap<>();

        for (int num : nums) {
            freqs.put(num, freqs.getOrDefault(num, 0) + 1);
        }

        return freqs;
    }
}
