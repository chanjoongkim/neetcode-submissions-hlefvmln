class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        if (!position || position.length <= 1) {
            return position.length;
        }

        const cars = [];
        position.forEach((p, i) => {
            cars.push([p, speed[i]]);
        });

        // sort by position
        cars.sort((a, b) => b[0] - a[0]);

        const stack = [];
        stack.push(cars[0]);

        for (let i = 1; i < cars.length; i++) {
            const currentCar = cars[i];
            const currentTime = this.findTimeToReachTarget(currentCar, target);

            const topCar = stack[stack.length - 1];
            const topTime = this.findTimeToReachTarget(topCar, target);

            if (currentTime > topTime) {
                stack.push(currentCar);
            }
        }

        return stack.length;
    }

    findTimeToReachTarget(car, target) {
        return (target - car[0]) / car[1];
    }
}
