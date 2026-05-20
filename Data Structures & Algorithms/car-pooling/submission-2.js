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

        const pickPq = new PriorityQueue((a, b) => a[1] - b[1]);
        const dropPq = new PriorityQueue((a, b) => a[2] - b[2]);

        for (const trip of trips) {
            pickPq.push(trip);
        }

        let location = 0;
        let curr = 0;
        while (!pickPq.isEmpty()) {
            // at each location we are at, we need to determine if we need to:
            // first drop off any passengers,
            // then pick up any passengers
            // if there is overlap, then we have to add new picked-up passenger to our current car

            // drop off passengers
            while (!dropPq.isEmpty() && dropPq.front()[2] <= location) {
                const [np, f, t] = dropPq.pop();
                curr -= np;
            }

            while (!pickPq.isEmpty() && pickPq.front()[1] <= location) {
                const trip = pickPq.pop();
                dropPq.push(trip);
                curr += trip[0];

                if (curr > capacity) {
                    return false;
                }
            }

            // location should be next pickup spot?
            if (!pickPq.isEmpty()) {
                location = pickPq.front()[1];
            }
            else {
                location++;
            }


            // // attempt to pick up passengers
            // if (pq.front()[1] <= location) {
            //     const [np, f, t] = pq.pop();
            //     // we have to include them in our current car
            //     if (f < location) {
            //         // we have no room for them
            //         if (curr + np > capacity) {
            //             console.log(location, curr, np, f, t);
            //             return false;
            //         }
            //         curr += np;
            //     }
            //     // we can drop off our old passengers
            //     else {
            //         curr = np;
            //     }

            //     location = t;
            // }
            // else {
            //     // since we jump from point to point we can assume we dropped off our passengers
            //     curr = 0;
            //     location = pq.front()[1];
            // }
        }

        return true;
    }
}
