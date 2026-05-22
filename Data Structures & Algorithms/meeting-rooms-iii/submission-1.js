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

        const rooms = Array.from({ length: n }, () => []);

        // sort meetings based on start time
        meetings.sort((a, b) => a[0] - b[0]);

        // index for meetings
        let index = 0;
        while (index < meetings.length) {
            const meeting = meetings[index];
            
            let roomFound = false;
            // find available room (going from lowest to highest room number)
            for (const room of rooms) {
                // free room, never had meetings
                if (room.length === 0) {
                    room.push(meeting);
                    roomFound = true;
                    break;
                }
                // check end time of last meeting in the room
                else {
                    const lastMeeting = room.at(-1);
                    // if end time is <= current meeting's start time, then we can use room
                    if (lastMeeting[1] <= meeting[0]) {
                        room.push(meeting);
                        roomFound = true;
                        break;
                    }
                }
            }

            // if we didn't find an available room, then we need to handle the delay
            if (!roomFound) {
                // find room with the earliest end time
                let earliestEndingRoomIndex = -1;
                let earliestEndingRoomTime = Number.MAX_SAFE_INTEGER;
                for (let i = 0; i < rooms.length; i++) {
                    // use < to favor smaller room numbers
                    if (rooms[i].at(-1)[1] < earliestEndingRoomTime) {
                        earliestEndingRoomTime = rooms[i].at(-1)[1];
                        earliestEndingRoomIndex = i;
                    }
                }

                if (earliestEndingRoomIndex === -1) {
                    // we should error here
                    throw new Error('impossible');
                }

                // append current meeting to our found room, and modify end time
                const delta = earliestEndingRoomTime - meeting[0];
                const updatedMeeting = [meeting[0] + delta, meeting[1] + delta];
                rooms[earliestEndingRoomIndex].push(updatedMeeting);
            }
            index++;
        }

        // at this point we should have booked all meetings, so now we go through our rooms array
        // and figure out the room with the most number of meetings

        let max = 0;
        let maxRoom = 0;

        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].length > max) {
                max = rooms[i].length;
                maxRoom = i;
            }
        }

        return maxRoom;
    }
}
