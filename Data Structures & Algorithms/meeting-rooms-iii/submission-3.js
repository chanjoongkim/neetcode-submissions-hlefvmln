class Solution {
    /**
     * @param {number} n
     * @param {number[][]} meetings
     * @return {number}
     */
    mostBooked(n, meetings) {
        if (n === 0 || !meetings) {
            return 0;
        }

        // priority queue of available rooms, based on number
        const roomPq = new PriorityQueue((a, b) => a - b);
        for (let i = 0; i < n; i++) {
            roomPq.push(i);
        }
        // store [room, endTime] pairs for meetings. Prioritize by smallest end time, tie breaker is smaller room number
        const meetingPq = new PriorityQueue((a, b) => a[1] - b[1] || a[0] - b[0]);

        // sort meetings by start time
        meetings.sort((a, b) => a[0] - b[0]);

        // increment whenever we have a new meeting in a room
        const meetingCount = Array(n).fill(0);

        for (const [start, end] of meetings) {
            // check for meetings that have ended
            while (!meetingPq.isEmpty() && meetingPq.front()[1] <= start) {
                const [room, end] = meetingPq.pop();
                roomPq.push(room);
            }


            // if not empty, then we have an available room so we'll book it
            // pop off roomPq and push to meetingPq
            if (!roomPq.isEmpty()) {
                const room = roomPq.pop();
                meetingPq.push([room, end]);
                meetingCount[room]++;
            }
            // else we need to find the earliest ending meeting from meetingPq
            else {
                const [room, oldEnd] = meetingPq.pop();

                const delta = oldEnd - start;
                meetingCount[room]++;
                meetingPq.push([room, end + delta]);
            }
        }

        // find highest meetingCount
        let max = 0;
        let room = 0;
        for (let i = 0; i < meetingCount.length; i++) {
            if (meetingCount[i] > max) {
                max = meetingCount[i];
                room = i;
            }
        }

        return room;
    }
}
