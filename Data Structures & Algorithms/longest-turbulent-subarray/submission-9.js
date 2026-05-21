class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        if (!arr) {
            return 0;
        }
        if (arr.length === 1) {
            return 1;
        }

        // greedily keep subarrays that constantly flip
        // reset indices whenever flipping stops?

        let result = 0;
        let curr = 0;
        let prev = arr[0];
        
        // will be boolean
        let prevUp = null;

        let index = 1;

        while (index < arr.length) {
            const num = arr[index];

            // we are at the "start" of a subarray, so we can do anything as long as it is not equal to prev
            if (prevUp === null) {
                // if prev === num, then we can't start a new subarray so we have to prolong the start of subarray
                if (num === prev) {
                    curr = 0;
                }
                else {
                    if (num > prev) {
                        prevUp = true;
                        curr++;
                    }
                    else {
                        prevUp = false;
                        curr++;
                    }
                }
                index++;
                prev = num;
            }
            else {
                // num must be "down" from prev
                if (prevUp) {
                    // we can continue with our turbulent subarray
                    if (num < prev) {
                        curr++;
                        index++;
                        prev = num;
                        prevUp = false;
                    }
                    // we have to reset our subarray
                    else {
                        prevUp = null;
                        curr = 0;
                    }
                }
                // num must be "up" from prev
                else {
                    // we can continue with our turbulent subarray
                    if (num > prev) {
                        curr++;
                        index++;
                        prev = num;
                        prevUp = true;
                    }
                    else {
                        prevUp = null;
                        curr = 0;
                    }
                }
            }

            result = Math.max(result, curr);

            // prev = num;
            // index++;
        }

        return result + 1;
    }
}
