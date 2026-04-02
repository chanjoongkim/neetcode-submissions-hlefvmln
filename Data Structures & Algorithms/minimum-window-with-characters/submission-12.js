class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) {
            return "";
        }

        const sMap = new Map();
        const tMap = new Map();

        for (let i = 0; i < t.length; i++) {
            const sChar = s.charAt(i);
            const tChar = t.charAt(i);
            sMap.set(s.charAt(i), 1 + (sMap.get(sChar) ?? 0));
            tMap.set(t.charAt(i), 1 + (tMap.get(tChar) ?? 0));
        }

        let needs = 0;
        for (const [key, tCount] of tMap.entries()) {
            if (!sMap.has(key)) {
                needs++;
            } else {
                const sCount = sMap.get(key);
                if (tCount > sCount) {
                    needs += (tCount - sCount);
                }
            }
        }

        let left = 0;
        let right = t.length;
        let substring = null;

        while (right < s.length) {
            while (needs === 0) {
                if (substring === null || (right - left) < substring.length) {
                    substring = s.slice(left, right);
                }

                const oldLeftChar = s.charAt(left);
                let leftCount = sMap.get(oldLeftChar);
                leftCount--;
                if (leftCount === 0) {
                    sMap.delete(oldLeftChar);
                    
                    if (tMap.has(oldLeftChar)) {
                        needs++;
                    }
                } else {
                    sMap.set(oldLeftChar, leftCount);
                    if (tMap.has(oldLeftChar) && tMap.get(oldLeftChar) > leftCount) {
                        needs++;
                    }
                }
                left++;
            }

            const rightChar = s.charAt(right);
            let rightCount = sMap.get(rightChar) ?? 0;
            rightCount++;
            sMap.set(rightChar, rightCount);

            if (tMap.has(rightChar) && sMap.get(rightChar) == tMap.get(rightChar)) {
                needs--;
            }
            right++;
        }

        while (needs === 0) {
            if (substring === null || (right - left) < substring.length) {
                substring = s.slice(left, right);
            }

            const oldLeftChar = s.charAt(left);
            let leftCount = sMap.get(oldLeftChar);
            leftCount--;
            if (leftCount === 0) {
                sMap.delete(oldLeftChar);
                
                if (tMap.has(oldLeftChar)) {
                    needs++;
                }
            } else {
                sMap.set(oldLeftChar, leftCount);
                if (tMap.has(oldLeftChar) && tMap.get(oldLeftChar) > leftCount) {
                    needs++;
                }
            }
            left++;
        }

        return (substring == null) ? "" : substring;
    }
}
