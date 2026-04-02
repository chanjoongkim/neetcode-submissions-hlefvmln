class Twitter {
    constructor() {
        this.followers = {};
        this.tweets = {};
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        const userTweets = this.tweets[userId] ? this.tweets[userId] : [];
        userTweets.push([this.time, tweetId]);
        this.tweets[userId] = userTweets;
        this.time++;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);
        
        const userTweets = this.tweets[userId];
        if (userTweets) {
            userTweets.forEach((tweet) => maxHeap.enqueue(tweet));
        }
        
        const followers = this.followers[userId];

        if (followers) {
            // set of userIds that the userId follows
            for (const ufId of followers) {
                if (ufId !== userId) {
                    // get tweets of that user follower
                    const ufTweets = this.tweets[ufId];
                    if (ufTweets) {
                        ufTweets.forEach((tweet) => maxHeap.enqueue(tweet));
                    }
                }
                
            }
        }

        const results = [];
        let i = 0;
        while (!maxHeap.isEmpty() && i < 10) {
            const [time, tweetId] = maxHeap.dequeue();
            results.push(tweetId);
            i++;
        }

        return results;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        const followers = this.followers[followerId] ? this.followers[followerId] : new Set();
        followers.add(followeeId);
        this.followers[followerId] = followers;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followers[followerId]) {
            const followers = this.followers[followerId];
            followers.delete(followeeId);
            this.followers[followerId] = followers;
        }
    }
}
