class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        if (!bills) {
            return true;
        }

        // we always need $5 from the first customer to get change I think
        if (bills[0] !== 5) {
            return false;
        }

        // array for bills we have
        const change = [1, 0, 0];

        for (let i = 1; i < bills.length; i++) {
            const bill = bills[i];
            if (bill === 5) {
                change[0]++;
            }
            else if (bill === 10) {
                change[1]++;
            }
            else {
                change[2]++;
            }
            let requiredChange = bills[i] - 5;

            // greedily always give back the largest denominator we have
            while (requiredChange >= 20 && change[2] > 0) {
                change[2]--;
                requiredChange -= 20;
            }

            while (requiredChange >= 10 && change[1] > 0) {
                change[1]--;
                requiredChange -= 10;
            }

            while (requiredChange >= 5 && change[0] > 0) {
                change[0]--;
                requiredChange -= 5;
            }

            if (requiredChange !== 0) {
                return false;
            }
        }

        return true;
    }
}
