class Solution {
    class IntFreqResult {
        Map<Integer, Integer> intFreqs;
        int highestFreq;

        IntFreqResult(Map<Integer, Integer> intFreqs, int highestFreq) {
            this.intFreqs = intFreqs;
            this.highestFreq = highestFreq;
        }
    }
    public int[] topKFrequent(int[] nums, int k) {
        // build int freq map (key: int, value: freq)
        // keep track of the highest freq count.
        // then build an array of <high freq count> length. 
        // Index represents the freq, the value will be a list of numbers (original values).
        // Afterwards, start from array end and work downwards, until we have K values in our result (populating result with values from array)

        IntFreqResult intFreqResult = buildIntFreqMap(nums);
        System.out.println(intFreqResult.intFreqs);
        System.out.println(intFreqResult.highestFreq);

        List<List<Integer>> bucketArray = new ArrayList<>(Collections.nCopies(intFreqResult.highestFreq + 1, new ArrayList<Integer>()) );
        // ArrayList<Integer>[] bucketArray = new ArrayList<>()[intFreqResult.highestFreq + 1];
        Map<Integer, Integer> intFreqs = intFreqResult.intFreqs;
        System.out.println(bucketArray);

        for (Integer num : intFreqs.keySet()) {
            System.out.println("test");
            int freq = intFreqs.get(num);
            if (bucketArray.get(freq).size() == 0) {
                System.out.println("cjk1");
                ArrayList<Integer> numsWithFreq = new ArrayList<>();
                numsWithFreq.add(num);
                bucketArray.set(freq, numsWithFreq);
            } else {
                System.out.println("cjk2");
                List<Integer> numsWithFreq = bucketArray.get(freq);
                numsWithFreq.add(num);
            }
        }

        System.out.println(bucketArray);

        int kCopy = k;
        int[] result = new int[k];

        for (int i = bucketArray.size() - 1; i >= 0; i--) {
            if (bucketArray.get(i).size() != 0) {
                // iterate through arraylist
                for (int num : bucketArray.get(i)) {
                    result[k - kCopy] = num;
                    kCopy -= 1;
                }

                if (kCopy == 0) {
                    return result;
                }
            }
        }

        return result;
    }

    private IntFreqResult buildIntFreqMap(int[] nums) {
        int highestFreq = 0;
        Map<Integer, Integer> intFreqs = new HashMap<>();
        for (int i : nums) {
            int freq = intFreqs.getOrDefault(i, 0) + 1;
            intFreqs.put(i, freq);
            highestFreq = Math.max(highestFreq, freq);
        }

        return new IntFreqResult(intFreqs, highestFreq);
    }


}
