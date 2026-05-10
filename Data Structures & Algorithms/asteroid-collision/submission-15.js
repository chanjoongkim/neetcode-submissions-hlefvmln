class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        // use stack to keep track of asteroids we encounter and handle collisions as we see them
        const stack = [];

        for (const asteroid of asteroids) {
            stack.push(asteroid);
            this.handleCollisions(stack);
        }

        return stack;
    }

    handleCollisions(stack) {
        while (stack.length > 1) {
            const lastAsteroid = stack.pop();
            // no more collisions (same directions)
            // OR top of stack is going left (negative) and lastAsteroid is going right (positive)
            if ((lastAsteroid < 0 && stack.at(-1) < 0) || (lastAsteroid > 0 && stack.at(-1) > 0) || (stack.at(-1) < 0 && lastAsteroid > 0)) {
                stack.push(lastAsteroid);
                return;
            }
            // collision
            if (Math.abs(lastAsteroid) === Math.abs(stack.at(-1))) {
                stack.pop();
            }
            // remove top of stack and push lastAsteroid
            else if (Math.abs(lastAsteroid) > Math.abs(stack.at(-1))) {
                stack.pop();
                stack.push(lastAsteroid);
            }
            // lastAsteroid should not be in stack, which already occurred so continue
            else {
                continue;
            }
        }
    }
}
