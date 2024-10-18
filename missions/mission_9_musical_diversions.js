// Question 1

const drum_envelope = adsr(0.05, 0.95, 0, 0);

function snare_drum(note, duration) {
    return drum_envelope(noise_sound(duration));
}

function bass_drum(note, duration) {
    const prime_freqs = list(79, 83, 89, 97, 101, 103, 107,109, 113, 127, 131, 137, 139, 149);
    const prime_waves = map(x => sine_sound(x, duration), prime_freqs);
    const bass_sound = accumulate((x, y) => simultaneously(list(x, y)), silence_sound(0), prime_waves);
    return drum_envelope(bass_sound);
}

function mute(note, duration) {
    return drum_envelope(silence_sound(duration));
}

// Test
play(snare_drum(50, 0.2));
play(bass_drum(50, 0.2));

play(consecutively(list(snare_drum(50, 0.2), mute(0, 0.2), bass_drum(50, 0.2),
                        mute(0, 0.2),
                        snare_drum(50, 0.2), mute(0, 0.2), bass_drum(50, 0.2))));

// Question 2

function generate_list_of_note(letter_name, list_of_interval) {
    function helper(note, list_of_intervals) {
        return is_null(list_of_intervals) ? pair(note, null)
                                          : pair(note, helper(note + head(list_of_intervals), tail(list_of_intervals)));
    }
    return helper(letter_name_to_midi_note(letter_name), list_of_interval);
}

const major_scale_interval = list(2, 2, 1, 2, 2, 2, 1, -1, -2, -2, -2, -1, -2, -2);
const c_major_scale = generate_list_of_note("C4", major_scale_interval);

// display(c_major_scale);

function list_to_sound(list_of_midi_note, duration, instrument) {
    return is_null(list_of_midi_note) ? silence_sound(0)
                                      : consecutively(list(instrument(head(list_of_midi_note), duration),
                                                      list_to_sound(tail(list_of_midi_note), duration, instrument)));
}

const c_major_scale_sound = list_to_sound(c_major_scale, 0.4, cello);
// play(c_major_scale_sound);

const harmonic_minor_scale_interval = list(2, 1, 2, 2, 1, 3, 1, -1, -3, -1, -2, -2, -1, -2);

const melodic_minor_scale_interval = list(2, 1, 2, 2, 2, 2, 1, -2, -2, -1, -2, -2, -1, -2);


const c_harmonic_minor_scale = generate_list_of_note("C4", harmonic_minor_scale_interval);
const c_harmonic_minor_scale_sound = list_to_sound(c_harmonic_minor_scale, 0.4, cello);
// play(c_harmonic_minor_scale_sound);

const c_melodic_minor_scale = generate_list_of_note("C4", melodic_minor_scale_interval);
const c_melodic_minor_scale_sound = list_to_sound(c_melodic_minor_scale, 0.4, cello);
play(c_melodic_minor_scale_sound);

// Question 3

// copy your functions generate_list_of_note and list_to_sound
// from the previous Question here
function generate_list_of_note(letter_name, list_of_interval) {
    function helper(note, list_of_intervals) {
        return is_null(list_of_intervals) ? pair(note, null)
                                          : pair(note, helper(note + head(list_of_intervals), tail(list_of_intervals)));
    }
    return helper(letter_name_to_midi_note(letter_name), list_of_interval);
}

function list_to_sound(list_of_midi_note, duration, instrument) {
    return is_null(list_of_midi_note) ? silence_sound(0)
                                      : consecutively(list(instrument(head(list_of_midi_note), duration),
                                                      list_to_sound(tail(list_of_midi_note), duration, instrument)));
}

const major_arpeggio_interval = list(4, 3, 5, 4, 3, 5);
const minor_arpeggio_interval = list(3, 4, 5, 3, 4, 5);

function generate_arpeggio(letter_name, list_of_interval) {
    return generate_list_of_note(letter_name, list_of_interval);
}

function arpeggiator_up(arpeggio, duration_each, instrument) {
    /* your answer here */
    function helper(arpeggio) {
        if (length(arpeggio) < 4) {
            return null;
        } else {
            const arpeggio_four = list(list_ref(arpeggio, 0),
                                  list_ref(arpeggio, 1),
                                  list_ref(arpeggio, 2),
                                  list_ref(arpeggio, 3));
            return append(arpeggio_four, helper(tail(arpeggio)));
        }
    }
    const arpeggio_up = helper(arpeggio);
    return is_null(arpeggio_up) ? silence_sound(0)
                                : list_to_sound(arpeggio_up, duration_each, instrument);
}

// Test
play(arpeggiator_up(generate_arpeggio("C4", major_arpeggio_interval), 0.1, cello));

// Question 4

function simplify_rhythm(rhythm) {
    /* your answer here */
    function repeat(rhythm, n) {
        return n === 0 ? null : append(rhythm, repeat(rhythm, n - 1));
    }
    
    if (is_number(head(rhythm))){
        return rhythm;
    } else if (is_number(tail(rhythm))){
        const simplified_rhythm = simplify_rhythm(head(rhythm));
        return repeat(simplified_rhythm, tail(rhythm));
    } else {
        return accumulate((x, wish) => is_list(x) ? append(x, wish)
                                                  : append(simplify_rhythm(x), wish), null, rhythm);
    }
}

// Test
const my_rhythm = pair(list(pair(list(1,2,0,1), 2), list(1,3,0,1,3,1,0,3)), 3);
const my_simple_rhythm = simplify_rhythm(my_rhythm);
display_list(my_simple_rhythm);

const correct_simple_rhythm = list(1,2,0,1,1,2,0,1,1,3,0,1,3,1,0,3,1,2,0,1,1,
        2,0,1,1,3,0,1,3,1,0,3,1,2,0,1,1,2,0,1,1,3,0,1,3,1,0,3);
equal(my_simple_rhythm, correct_simple_rhythm);

// Question 5

const drum_envelope = adsr(0.05, 0.95, 0, 0);

// paste your snare_drum, mute and simplify_rhythm
// from Questions 1 and 4 here
function snare_drum(note, duration) {
    return drum_envelope(noise_sound(duration));
}

function mute(note, duration) {
    return drum_envelope(silence_sound(duration));
}

function simplify_rhythm(rhythm) {
    /* your answer here */
    function repeat(rhythm, n) {
        return n === 0 ? null : append(rhythm, repeat(rhythm, n - 1));
    }
    
    if (is_number(head(rhythm))){
        return rhythm;
    } else if (is_number(tail(rhythm))){
        const simplified_rhythm = simplify_rhythm(head(rhythm));
        return repeat(simplified_rhythm, tail(rhythm));
    } else {
        return accumulate((x, wish) => is_list(x) ? append(x, wish)
                                                  : append(simplify_rhythm(x), wish), null, rhythm);
    }
}

function percussions(distance, list_of_sounds, rhythm) {
    /* your answer here */
    function offset(distance, s1, s2) {
        if (!is_null(s2)) {
            return make_sound(t => t < distance ? get_wave(s1)(t)
                                                : get_wave(s1)(t) + get_wave(s2)(t - distance),
                              distance + get_duration(s2));
        } else {
            return s1;
        }
    }
    return is_null(rhythm) ? null
                           : offset(distance, 
                                    list_ref(list_of_sounds, head(rhythm)),
                                    percussions(distance, list_of_sounds, tail(rhythm)));
}

// Test
const my_mute_sound = mute(50, 0.7);
const my_snare_drum = snare_drum(50, 0.7);
const my_cello = cello(50, 0.7);
const my_bell = bell(72, 1);
play(percussions(0.5,
         list(my_mute_sound,
              my_snare_drum,
              my_cello,
              my_bell),
         list(1,2,1,0,3,1,0)));
