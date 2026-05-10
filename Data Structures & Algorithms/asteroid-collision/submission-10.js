class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        // use stack to keep track of asteroids we encounter that are rightwards
        // when we see a leftward one, we compare it with the top of the stack (since that's the first asteroid it will meet)

        const stack = [];

        for (const asteroid of asteroids) {
            stack.push(asteroid);
            this.handleCollisions(stack);
            // if (stack.length === 0) {
            //     stack.push(asteroid);
            //     continue;
            // }
            // // stack.peek
            // let lastAsteroid = stack.pop();
            // // if same direction, push both asteroids to stack
            // if (lastAsteroid < 0 && asteroid < 0 || lastAsteroid > 0 && asteroid > 0) {
            //     stack.push(lastAsteroid);
            //     stack.push(asteroid);
            //     continue;
            // }
            // // collision
            // else {
            //     // handle all collisions that are possible at the stack
            //     while ()


            //     // if both are equal, then continue (and don't add them back to the stack)
            //     if (Math.abs(lastAsteroid) === Math.abs(asteroid)) {
            //         continue;
            //     }
            //     // else, add the larger asteroid back to the stack
            //     else if (Math.abs(lastAsteroid) > Math.abs(asteroid)) {
            //         stack.push(lastAsteroid);
            //     }
            //     else {
            //         // remove all other asteroids that asteroid will collide with
            //         while (stack.length > 0 && ((asteroid < 0 && stack.at(-1) > 0) || (asteroid > 0 && stack.at(-1) < 0) && Math.abs(asteroid) > Math.abs(stack.at(-1)))) {
            //             stack.pop();
            //         }
            //         stack.push(asteroid);
            //     }
            // }
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
