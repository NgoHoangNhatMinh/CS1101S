// Task 1

function backward(sound) {
    /* replace dummy below with your solution */
    return make_sound(t => get_wave(sound)(get_duration(sound) - t), get_duration(sound));
}

//                                      // step 0: press "Run"

// init_record();                       // step 1 in REPL

// const my_voice = record_for(2, 0.2); // step 2 in REPL

// play(backward(my_voice()));          // step 3 in REPL

// Task 2

function repeat(n, sound) {
    /* replace dummy below with your solution */
    return n === 0 ? silence_sound(0)
                   : consecutively(list(sound, repeat(n - 1, sound)));
}

// Test
const my_sound = consecutively(
    list(sine_sound(400, 1), sine_sound(800, 1)));
const my_repeated = repeat(3, my_sound);
play(my_repeated);

// Task 3

function fast_forward(n, sound) {
    /* replace dummy below with your solution */
    return make_sound(t => get_wave(sound)(n * t), get_duration(sound) / n);
}

//                                      // step 0: press "Run"

// init_record();                       // step 1 in REPL

// const my_voice = record_for(2, 0.2); // step 2 in REPL

// play(fast_forward(2, my_voice()));   // step 3 in REPL

// Task 4

function echo(n, d, sound) {
    /* replace dummy below with your solution */
    return n === -1 
           ? silence_sound(0)
           : consecutively(list(sound,
                                silence_sound(d),
                                echo(n - 1, d, make_sound(t => get_wave(sound)(t) / 2, get_duration(sound)))));
}

// Test
const test_sound = sine_sound(800, 0.2);
play(echo(2, 0.4, test_sound));

// Task 5

// Copy your functions backward, repeat,
// fast_forward and echo here.
function backward(sound) {
    /* replace dummy below with your solution */
    return make_sound(t => get_wave(sound)(get_duration(sound) - t), get_duration(sound));
}

function repeat(n, sound) {
    /* replace dummy below with your solution */
    return n === 0 ? silence_sound(0)
                   : consecutively(list(sound, repeat(n - 1, sound)));
}

function fast_forward(n, sound) {
    /* replace dummy below with your solution */
    return make_sound(t => get_wave(sound)(n * t), get_duration(sound) / n);
}

function echo(n, d, sound) {
    /* replace dummy below with your solution */
    return n === -1 
           ? silence_sound(0)
           : consecutively(list(sound,
                                silence_sound(d),
                                echo(n - 1, d, make_sound(t => get_wave(sound)(t) / 2, get_duration(sound)))));
}

function make_alien_jukebox(sound) {
    // your answer here
    return x => play(list_ref(list(sound,
                                   backward(sound),
                                   fast_forward(1/2, sound),
                                   repeat(3, fast_forward(2, sound)),
                                   echo(4, 0.3, backward(sound))), x));
}

// Press "Run"

// Then test in REPL:

// init_record();

// const erksh_voice = record_for(1, 0.2);

// const j = make_alien_jukebox(erksh_voice());

// j(0);  // plays original recording

// j(1);  // plays it backward

// j(2);  // plays it at half speed

// j(3);  // plays it at double speed, three times in a row

// j(4);  // plays it backward with 4-times echo,
//        //     with 0.3 seconds echo delay
