class Twitter {
    Map<Integer, Set<Integer>> followers;
    Map<Integer, List<Pair<Integer, Integer>>> tweets;
    int time;

    public Twitter() {
        this.followers = new HashMap<>();
        this.tweets = new HashMap<>();
        this.time = 0;
    }
    
    public void postTweet(int userId, int tweetId) {
        List<Pair<Integer, Integer>> userTweets = this.tweets.getOrDefault(userId, new ArrayList<>());
        userTweets.add(new Pair<>(this.time, tweetId));
        this.tweets.put(userId, userTweets);
        this.time++;
    }
    
    public List<Integer> getNewsFeed(int userId) {
        // go through all of the user's tweets and the followers' tweets
        // add them to a heap, where we order by time
        // return the heap with only top 10 tweets

        // Pair where first int is time, second int is tweetId
        PriorityQueue<Pair<Integer, Integer>> maxHeap = new PriorityQueue<>((a, b) -> b.getKey() - a.getKey());

        // go through user's tweets first
        List<Pair<Integer, Integer>> userTweets = this.tweets.get(userId);
        if (userTweets != null) {
            for (Pair<Integer, Integer> pair : userTweets) {
                maxHeap.add(pair);
            }
        }
        

        // go through followers' tweets
        Set<Integer> userFollowers = this.followers.get(userId);

        if (userFollowers != null) {
            for (int uf : userFollowers) {
                if (uf != userId) {
                    List<Pair<Integer, Integer>> ufTweets = this.tweets.get(uf);
                    for (Pair<Integer, Integer> pair : ufTweets) {
                        maxHeap.add(pair);
                    }
                }
            }
        }

        List<Integer> result = new ArrayList<>();
        int i = 0;
        while (i < 10 && !maxHeap.isEmpty()) {
            result.add(maxHeap.poll().getValue());
            i++;
        }

        return result;
    }
    
    public void follow(int followerId, int followeeId) {
        Set<Integer> followers = this.followers.getOrDefault(followerId, new HashSet<>());
        followers.add(followeeId);
        this.followers.put(followerId, followers);
    }
    
    public void unfollow(int followerId, int followeeId) {
        Set<Integer> followers = this.followers.getOrDefault(followerId, new HashSet<>());
        followers.remove(followeeId);
        this.followers.put(followerId, followers);
    }
}
