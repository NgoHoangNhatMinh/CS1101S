// Task 1

// Function type: Number -> pair_of_numbers
// where input is between 0 - 15 inclusive.
// where 0 - 9 represent the digits
// 10 represents *, 11 represents #,
// and 12 - 15 represent the letters A-D.

function get_dtmf_frequencies(number) {
    // your answer here
    const freq = list(pair(1336, 941),
                      pair(1209, 697),
                      pair(1336, 697),
                      pair(1477, 697),
                      pair(1209, 770),
                      pair(1336, 770),
                      pair(1477, 770),
                      pair(1209, 852),
                      pair(1336, 852),
                      pair(1477, 852),
                      pair(1209, 941),
                      pair(1477, 941),
                      pair(1633, 697),
                      pair(1633, 770),
                      pair(1633, 852),
                      pair(1633, 941));
    return list_ref(freq, number);
}

get_dtmf_frequencies(8);

// Task 2

// Copy your function get_dtmf_frequencies here.
function get_dtmf_frequencies(number) {
    // your answer here
    const freq = list(pair(1336, 941),
                      pair(1209, 697),
                      pair(1336, 697),
                      pair(1477, 697),
                      pair(1209, 770),
                      pair(1336, 770),
                      pair(1477, 770),
                      pair(1209, 852),
                      pair(1336, 852),
                      pair(1477, 852),
                      pair(1209, 941),
                      pair(1477, 941),
                      pair(1633, 697),
                      pair(1633, 770),
                      pair(1633, 852),
                      pair(1633, 941));
    return list_ref(freq, number);
}

function make_dtmf_tone(frequency_pair) {
    // your answer here
    return simultaneously(list(sine_sound(head(frequency_pair), 0.5), 
                               sine_sound(tail(frequency_pair), 0.5)));
}

// testing
play(make_dtmf_tone(get_dtmf_frequencies(15)));

// Task 3

// Copy your functions get_dtmf_frequencies and make_dtmf_tone here.
function get_dtmf_frequencies(number) {
    // your answer here
    const freq = list(pair(1336, 941),
                      pair(1209, 697),
                      pair(1336, 697),
                      pair(1477, 697),
                      pair(1209, 770),
                      pair(1336, 770),
                      pair(1477, 770),
                      pair(1209, 852),
                      pair(1336, 852),
                      pair(1477, 852),
                      pair(1209, 941),
                      pair(1477, 941),
                      pair(1633, 697),
                      pair(1633, 770),
                      pair(1633, 852),
                      pair(1633, 941));
    return list_ref(freq, number);
}

function make_dtmf_tone(frequency_pair) {
    // your answer here
    return simultaneously(list(sine_sound(head(frequency_pair), 0.5), 
                               sine_sound(tail(frequency_pair), 0.5)));
}

function dial(list_of_digits) {
    // your answer here
    return is_null(list_of_digits) 
           ? silence_sound (0)
           : consecutively(list(make_dtmf_tone(get_dtmf_frequencies(head(list_of_digits))),
                           silence_sound(0.1),
                           dial(tail(list_of_digits))));
}

// Test
play(dial(list(6,2,3,5,8,5,7,7)));

// Task 4

// Copy your functions get_dtmf_frequencies,
// make_dtmf_tone and dial here.
function get_dtmf_frequencies(number) {
    // your answer here
    const freq = list(pair(1336, 941),
                      pair(1209, 697),
                      pair(1336, 697),
                      pair(1477, 697),
                      pair(1209, 770),
                      pair(1336, 770),
                      pair(1477, 770),
                      pair(1209, 852),
                      pair(1336, 852),
                      pair(1477, 852),
                      pair(1209, 941),
                      pair(1477, 941),
                      pair(1633, 697),
                      pair(1633, 770),
                      pair(1633, 852),
                      pair(1633, 941));
    return list_ref(freq, number);
}

function make_dtmf_tone(frequency_pair) {
    // your answer here
    return simultaneously(list(sine_sound(head(frequency_pair), 0.5), 
                               sine_sound(tail(frequency_pair), 0.5)));
}

function dial(list_of_digits) {
    // your answer here
    return is_null(list_of_digits) 
           ? silence_sound (0)
           : consecutively(list(make_dtmf_tone(get_dtmf_frequencies(head(list_of_digits))),
                           silence_sound(0.1),
                           dial(tail(list_of_digits))));
}

function dial_all(list_of_numbers) {
    // your answer here
    function compare_list(num, evil) {
        return length(num) !== length(evil) ? false
                                            : is_null(evil) 
                                            ? true
                                            : head(num) === head(evil)
                                            ? compare_list(tail(num), tail(evil))
                                            : false;        
    }
    const filtered_list = filter(x => !compare_list(x, list(1,8,0,0,5,2,1,1,9,8,0)), list_of_numbers);
    const mapped_list = map(lst => consecutively(list(dial(lst), 
                                         make_dtmf_tone(get_dtmf_frequencies(10)), 
                                         silence_sound(0.1))), 
                    filtered_list);
    return consecutively(mapped_list);
}

// Test
play(dial_all(
       list(
         list(1,8,0,0,5,2,1,1,9,8,0),  // not played!!!
         list(6,2,3,5,8,5,7,7),
         list(0,0,8,6,1,3,7,7,0,9,5,0,0,6,1))
        ));
