// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (head === null) {
            return null;
        }
        const map = new Map();

        let curr = head;
        while (curr != null) {
            map.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        curr = head;
        while (curr != null) {
            const copy = map.get(curr);
            if (curr.next !== null) {
                copy.next = map.get(curr.next);
            }
            if (curr.random !== null) {
                copy.random = map.get(curr.random);
            }
            curr = curr.next;
        }

        return map.get(head);
    }
}
