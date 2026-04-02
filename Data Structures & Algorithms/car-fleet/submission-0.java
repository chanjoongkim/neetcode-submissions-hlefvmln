class Solution {
    class Car implements Comparable<Car> {
        int position;
        int speed;

        Car(int position, int speed) {
            this.position = position;
            this.speed = speed;
        }

        // want to sort by reverse order (so largest position is first)
        public int compareTo(Car b) {
            return (-1) * (this.position - b.position);
        }
    }
    public int carFleet(int target, int[] position, int[] speed) {
        if (position.length == 1) {
            return 1;
        }

        Car[] cars = new Car[position.length];
        for (int i = 0; i < position.length; i++) {
            cars[i] = new Car(position[i], speed[i]);
        }

        // sort by position
        Arrays.sort(cars);

        Stack<Car> stack = new Stack<>();

        // push the car in the furthest position first
        stack.push(cars[0]);

        for (int i = 1; i < cars.length; i++) {
            Car currentCar = cars[i];
            double timeForCurrentCar = findTimeToReachTarget(currentCar, target);
            
            Car topCar = stack.peek();
            double timeForTopCar = findTimeToReachTarget(topCar, target);

            // if time for current car is less than time for top car, then that means current car will catch up to the top car
            // so they will form a fleet
            // so only need to check if current time is greater than (because it forms a new fleet)
            if (timeForCurrentCar > timeForTopCar) {
                stack.push(currentCar);
            } 
        }

        return stack.size();
    }

    private double findTimeToReachTarget(Car car, int target) {
        return ((target - car.position) / (1.0 * car.speed));
    }
}
