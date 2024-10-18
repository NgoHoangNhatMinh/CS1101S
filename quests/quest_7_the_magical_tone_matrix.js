// Question 1

// copy generate_list_of_note from Mission "Musical Diversions"
function generate_list_of_note(letter_name, list_of_interval) {
    function helper(note, list_of_intervals) {
        return is_null(list_of_intervals) ? pair(note, null)
                                          : pair(note, helper(note + head(list_of_intervals), tail(list_of_intervals)));
    }
    return helper(letter_name_to_midi_note(letter_name), list_of_interval);
}

const pentatonic_list_of_interval = list(2, 2, 3, 2, 3);

// repeat_pattern from Lecture L2

function repeat_function(n, f, x) {
    return n === 0 ? x : repeat_function(n - 1, f, f(x));
}

function repeated_scale(note, list_of_interval, n, duration, instrument) {
    // your solution goes here
    const repeated_list = repeat_function(n - 1,
                                          x => append(x, list_of_interval),
                                          list_of_interval);
    const list_of_note = generate_list_of_note(note, repeated_list);
    const list_of_sound = map(x => instrument(x, duration), list_of_note);
    return list_of_sound;
}

play(consecutively(repeated_scale("C4", pentatonic_list_of_interval,
                                  2, 1, cello)));

// Question 2

function play_matrix(duration, list_of_sounds) {
    /* your answer here */
    const lst = list(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
    /* simultaneous(map y and (filter y)) check each row if it's pressed
    and map it to sounds which is then played simultaneously
    map x (simultaneous) do the same for all columns and map
    to list of sounds of each column */
    const column_sound_list = map(x => simultaneously(map(y => list_ref(sounds, y),
                                                          filter(y => list_ref(list_ref(get_matrix(), y), 
                                                                 x),
                                                          lst))),
                                  lst);
    const matrix_sound = accumulate((x, wish) => consecutively(list(x, silence_sound(duration - get_duration(x)), wish)),
                                    silence_sound(0), 
                                    column_sound_list);
    play(matrix_sound);
    set_timeout(() => play_matrix(duration, list_of_sounds), get_duration(matrix_sound) * 1000);
}

function stop_matrix() {
    /* your answer here */
    clear_all_timeout();
}

// copy your functions generate_list_of_note and repeated_scale
// from Question 1 here
function generate_list_of_note(letter_name, list_of_interval) {
    function helper(note, list_of_intervals) {
        return is_null(list_of_intervals) ? pair(note, null)
                                          : pair(note, helper(note + head(list_of_intervals), tail(list_of_intervals)));
    }
    return helper(letter_name_to_midi_note(letter_name), list_of_interval);
}

const pentatonic_list_of_interval = list(2, 2, 3, 2, 3);

// repeat_pattern from Lecture L2

function repeat_function(n, f, x) {
    return n === 0 ? x : repeat_function(n - 1, f, f(x));
}

function repeated_scale(note, list_of_interval, n, duration, instrument) {
    // your solution goes here
    const repeated_list = repeat_function(n - 1,
                                          x => append(x, list_of_interval),
                                          list_of_interval);
    const list_of_note = generate_list_of_note(note, repeated_list);
    const list_of_sound = map(x => instrument(x, duration), list_of_note);
    return list_of_sound;
}


const sounds = repeated_scale("C4", pentatonic_list_of_interval, 3, 0.2, piano);

play_matrix(0.5, sounds);
