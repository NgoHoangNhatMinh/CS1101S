// Task 1

// Your program here.
const words = 'hello world';
ev3_speak(words);

// Task 2

// Your program here.
const motor_left = ev3_motorC();
const motor_right = ev3_motorA();

function move(motor_left, motor_right, distance) {
        ev3_runToRelativePosition(motor_left, distance,
                          185);
        ev3_runToRelativePosition(motor_right, distance,
                          185);
        ev3_pause(math_abs(distance));
}

move(motor_left, motor_right, 1000);

// Task 3

const motor_left = ev3_motorC();
const motor_right = ev3_motorA();

function turn(motor_left, motor_right, dir) {
    const speed = 163;
    if (dir === 0) { 
        //counterclockwise
        ev3_runForTime(motor_left, 1000, speed);
        ev3_runForTime(motor_right, 1000, -speed);
        ev3_pause(1000);
    } else { 
        //clockwise
        ev3_runForTime(motor_left, 1000, -speed);
        ev3_runForTime(motor_right, 1000, speed);
        ev3_pause(1000);
    }
}

turn(motor_left, motor_right, 0);

// Task 4

const motor_left = ev3_motorC();
const motor_right = ev3_motorA();

function move(motor_left, motor_right, distance) {
        ev3_runToRelativePosition(motor_left, distance,
                          185);
        ev3_runToRelativePosition(motor_right, distance,
                          185);
        ev3_pause(math_abs(distance));
}

function turn(motor_left, motor_right, dir) {
    const speed = 163;
    if (dir === 0) { 
        //counterclockwise
        ev3_runForTime(motor_left, 1000, speed);
        ev3_runForTime(motor_right, 1000, -speed);
        ev3_pause(1000);
    } else { 
        //clockwise
        ev3_runForTime(motor_left, 1000, -speed);
        ev3_runForTime(motor_right, 1000, speed);
        ev3_pause(1000);
    }
}

function combine(distance1, turn1, distance2, turn2, distance3) {
    move(motor_left, motor_right, distance1); 
    ev3_pause(1000);
    turn(motor_left, motor_right, turn1);
    ev3_pause(1000);
    move(motor_left, motor_right, distance2);
    ev3_pause(1000);
    turn(motor_left, motor_right, turn2);
    ev3_pause(1000);
    move(motor_left, motor_right, distance3);
    ev3_pause(1000);
}

combine(1000, 0, 500, 1, 1500);
