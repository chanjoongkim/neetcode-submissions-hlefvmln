class TimeMap {
    class Pair {
        String value;
        int timestamp;

        Pair(String value, int timestamp) {
            this.value = value;
            this.timestamp = timestamp;
        }
    }

    Map<String, List<Pair>> map;

    public TimeMap() {
        map = new HashMap<>();
    }
    
    public void set(String key, String value, int timestamp) {
        if (map.containsKey(key)) {
            List<Pair> values = map.get(key);
            values.add(new Pair(value, timestamp));
        } else {
            List<Pair> values = new ArrayList<>();
            values.add(new Pair(value, timestamp));
            map.put(key, values);
        }
    }
    
    public String get(String key, int timestamp) {
        if (!map.containsKey(key)) {
            return "";
        }

        List<Pair> values = map.get(key);

        // run binary search on the values, finding the timestamp that is equal or closest to (but less than) the timestamp parameter
        int left = 0;
        int right = values.size() - 1;
        String result = "";

        while (left <= right) {
            int mid = (left + right) / 2;
            
            Pair pair = values.get(mid);

            if (pair.timestamp <= timestamp) {
                result = pair.value;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
