//  Task 1

// Your program here.
const sensor_port = ev3_ultrasonicSensor();

function measure() {
    let time = 0;
    let distance = ev3_ultrasonicSensorDistance(sensor_port);
    while (time < 10000) {
        distance = ev3_ultrasonicSensorDistance(sensor_port);
        display(distance / 10);
        time = time + 1000;
        ev3_pause(1000);
    }
}

measure();

// Task 2

// Your program here.
const motor_left = ev3_motorC();
const motor_right = ev3_motorA();
const sensor_port = ev3_ultrasonicSensor();

function move(motor_left, motor_right, distance) {
    ev3_runToRelativePosition(motor_left, distance, 185);
    ev3_runToRelativePosition(motor_right, distance, 185);
    ev3_pause(math_abs(distance));
}

function crash_prevention() {
    let time = 0;
    let distance = ev3_ultrasonicSensorDistance(sensor_port);

    while (distance > 10) {
        distance = ev3_ultrasonicSensorDistance(sensor_port)/10;
        display(distance);
        move(motor_left, motor_right, 50);
        ev3_pause(150);
    } 
    move(motor_left, motor_right, -3000);
}

crash_prevention();


// Task 3

// Your program here.
const motor_left = ev3_motorC();
const motor_right = ev3_motorA();
const sensor_port = ev3_ultrasonicSensor();

function move(motor_left, motor_right, distance) {
    ev3_runToRelativePosition(motor_left, distance, 185);
    ev3_runToRelativePosition(motor_right, distance, 185);
    ev3_pause(math_abs(distance));
}

function turn(motor_left, motor_right, dir) {
    // dir === -1 turns counterclockwise
    // dir === 1 turns clockwise
    
    const speed = 163;

    ev3_runForTime(motor_right, 1000, dir * speed);
    ev3_runForTime(motor_left, 1000, -dir * speed);
    ev3_pause(1000);
}

function around_box() {
     let distance = ev3_ultrasonicSensorDistance(sensor_port);
     while (distance > 10) {
        distance = ev3_ultrasonicSensorDistance(sensor_port) / 10;
        display(distance);
        move(motor_left, motor_right, 50);
        ev3_pause(150);
    } 
    const dir = math_random() > 0.5 ? 1 : -1;
    turn(motor_left, motor_right, dir);
    ev3_pause(1000);
    move(motor_left, motor_right, 5000);
    ev3_pause(1000);
    turn(motor_left, motor_right, -dir);
    ev3_pause(1000);
    move(motor_left, motor_right, 5000);
    ev3_pause(1000);
}

around_box();
