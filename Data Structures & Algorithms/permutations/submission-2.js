class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let perms = [[]];

        for (const num of nums) {
            let newPerms = [];
            for (const perm of perms) {
                for (let i = 0; i <= perm.length; i++) {
                    const permCopy = [...perm];
                    permCopy.splice(i, 0, num);
                    newPerms.push(permCopy);
                }
            }
            perms = newPerms;
        }

        return perms;
    }
}
