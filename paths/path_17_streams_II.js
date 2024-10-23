// Task 1

const alternating_ones = pair(1, () => pair(-1, () => alternating_ones)); // YOUR SOLUTION HERE

// Taks 2

function make_alternating_stream(s) {

    // YOUR SOLUTION HERE
    if (is_null(tail(s))) {
        return pair(head(s), null);
    } else {
        return pair(head(s), 
                    () => pair(-head(stream_tail(s)), 
                               () => make_alternating_stream(stream_tail(stream_tail(s)))));
    }
}

// Task 3

function zip_streams(s1, s2) {

    // YOUR SOLUTION HERE
    return pair(head(s1), 
                () => pair(head(s2), 
                            () => zip_streams(stream_tail(s1),
                                              stream_tail(s2))));
}

// Task 4

function every_other(s) {

    // YOUR SOLUTION HERE
    return pair(head(s), () => every_other(stream_tail(stream_tail(s))));
}

// Task 5

function partial_sums(s) {

    // YOUR SOLUTION HERE
    function add_streams(s1, s2) {
        return is_null(s1)
            ? s2
            : is_null(s1)
            ? s1
            : pair(head(s1) + head(s2),
                () => add_streams(stream_tail(s1),
                                  stream_tail(s2)));
    }
    
    function helper(s) {
        return pair(0, 
            () => add_streams(s, helper((s)))); 
    }
    return stream_tail(helper(s));
}
