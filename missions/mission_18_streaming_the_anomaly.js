// TASK 1

function array_to_stream(a) {
    // your solution goes here
    
    // build a list of elements in a, then convert to a stream
    return list_to_stream(build_list(i => a[i], array_length(a)));
}


display(array_length(anomaly_data) ===
        stream_length(array_to_stream(anomaly_data)));
display(anomaly_data[7] ===
        stream_ref(array_to_stream(anomaly_data), 7));

// TASK 2

// Your array_to_stream function from TASK 1 goes here.
function array_to_stream(a) {
    // your solution goes here
    
    // build a list of elements in a, then convert to a stream
    return list_to_stream(build_list(i => a[i], array_length(a)));
}

function stream_to_filter(s) {
    // your solution goes here
    return (_, dest) => {
        let src = head(s);

        for (let i = 0; i < HEIGHT; i = i + 1) {
                dest[i] = src[i];
            }
        
        // increment the stream until there's no more
        if (!is_null(stream_tail(s))) {
            s = stream_tail(s);
        }
    };
}


install_filter(stream_to_filter(array_to_stream(anomaly_data)));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(10);
start();

// TASK 3

// Your array_to_stream function from TASK 1 goes here.

function array_to_stream(a) {
    // your solution goes here
    
    // build a list of elements in a, then convert to a stream
    return list_to_stream(build_list(i => a[i], array_length(a)));
}

// Your stream_to_filter function from TASK 2 goes here.

function stream_to_filter(s) {
    // your solution goes here
    return (_, dest) => {
        let src = head(s);

        for (let i = 0; i < HEIGHT; i = i + 1) {
                dest[i] = src[i];
            }
        
        // increment the stream until there's no more
        if (!is_null(stream_tail(s))) {
            s = stream_tail(s);
        }
    };
}

function loop(s) {
    // your solution goes here
    function helper(ss) {
        return !is_null(ss)
            ? pair(head(ss), () => helper(stream_tail(ss)))
            : loop(s);
    }
    return pair(head(s), () => helper(stream_tail(s)));
}


install_filter(
    stream_to_filter(
        loop(array_to_stream(anomaly_data))));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(10);
start();

// TASK 4

// Your array_to_stream function from TASK 1 goes here.
function array_to_stream(a) {
    // your solution goes here
    
    // build a list of elements in a, then convert to a stream
    return list_to_stream(build_list(i => a[i], array_length(a)));
}

// Your stream_to_filter function from TASK 2 goes here.
function stream_to_filter(s) {
    // your solution goes here
    return (_, dest) => {
        let src = head(s);

        for (let i = 0; i < HEIGHT; i = i + 1) {
                dest[i] = src[i];
            }
        
        // increment the stream until there's no more
        if (!is_null(stream_tail(s))) {
            s = stream_tail(s);
        }
    };
}

// Your loop function from TASK 3 goes here.
function loop(s) {
    // your solution goes here
    function helper(ss) {
        return !is_null(ss)
            ? pair(head(ss), () => helper(stream_tail(ss)))
            : loop(s);
    }
    return pair(head(s), () => helper(stream_tail(s)));
}

function time_lapse(s, n) {
    // your solution goes here
    function helper(s, i) {
        return i === 0
            ? pair(head(s), () => helper(s, n))
            : helper(stream_tail(s), i - 1);
    }
    
    return pair(head(s), () => helper(s, n));
}

install_filter(
    stream_to_filter(
        time_lapse(loop(array_to_stream(anomaly_data)),
                   3)));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(10);
start();
