class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        const closestIndex = this.modBinarySearch(arr, x);
        const result = [];
        
        let l = closestIndex - 1;
        let r = closestIndex;

        while ((r - l - 1) < k) {
            if (l < 0) {
                r++;
            }
            else if (r === arr.length) {
                l--;
            }
            else {
                if (Math.abs(arr[l] - x) <= Math.abs(arr[r] - x)) {
                    l--;
                }
                else {
                    r++;
                }
            }
        }

        return arr.slice(l + 1, r);


        // // special case where closestIndex is either start or end of arr
        // if (closestIndex === 0) {
        //     for (let i = 0; i < k; i++) {
        //         result.push(arr[i]);
        //     }

        //     result.sort((a, b) => a - b);
        //     return result;
        // }
        // else if (closestIndex === arr.length) {
        //     for (let i = 0; i < k; i++) {
        //         result.push(arr[arr.length - 1 - i]);
        //     }

        //     result.sort((a, b) => a - b);
        //     return result;
        // }

        // let l = closestIndex - 1;
        // let r = closestIndex;

        // while (result.length !== k && l >= 0 && r < arr.length) {
        //     // compare abs(arr[l]) and abs(arr[r])
        //     if (Math.abs(arr[l] - x) <= Math.abs(arr[r] - x)) {
        //         result.push(arr[l]);
        //         l--;
        //     }
        //     else {
        //         result.push(arr[r]);
        //         r++;
        //     }
        // }

        // while (result.length !== k) {
        //     // means we ran out of r
        //     if (l >= 0) {
        //         result.push(arr[l]);
        //         l--;
        //     }
        //     else {
        //         result.push(arr[r]);
        //         r++;
        //     }
        // }

        // result.sort((a, b) => a - b);
        // return result;
    }

    modBinarySearch(arr, target) {
        let l = 0;
        let r = arr.length - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (target === arr[mid]) {
                return mid;
            }
            else if (target < arr[mid]) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }

        return l;
    }
}
