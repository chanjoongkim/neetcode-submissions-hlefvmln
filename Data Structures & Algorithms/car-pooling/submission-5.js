class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        if (!trips) {
            return true;
        }


        // sort trips by start time
        trips.sort((a, b) => a[1] - b[1]);

        // const pickPq = new PriorityQueue((a, b) => a[1] - b[1]);
        const dropPq = new PriorityQueue((a, b) => a[2] - b[2]);
        let curr = 0;
        for (const trip of trips) {
            // drop off any passengers from our "active" trips that ended <= current trip start
            while (!dropPq.isEmpty() && dropPq.front()[2] <= trip[1]) {
                const [np, f, t] = dropPq.pop();
                curr -= np;
            }
            curr += trip[0];
            dropPq.push(trip);

            if (curr > capacity) {
                return false;
            }
        }
        return true;

        // let location = 0;
        // let curr = 0;
        // while (!pickPq.isEmpty()) {
        //     // at each location we are at, we need to determine if we need to:
        //     // first drop off any passengers,
        //     // then pick up any passengers
        //     // if there is overlap, then we have to add new picked-up passenger to our current car

        //     // drop off passengers
        //     while (!dropPq.isEmpty() && dropPq.front()[2] <= location) {
        //         const [np, f, t] = dropPq.pop();
        //         curr -= np;
        //     }

        //     // pick up any passengers
        //     while (!pickPq.isEmpty() && pickPq.front()[1] <= location) {
        //         const trip = pickPq.pop();
        //         dropPq.push(trip);
        //         curr += trip[0];

        //         if (curr > capacity) {
        //             return false;
        //         }
        //     }

        //     // location should be next pickup spot?
        //     if (!pickPq.isEmpty()) {
        //         location = pickPq.front()[1];
        //     }
        //     else {
        //         location++;
        //     }
        // }

        // return true;
    }
}
