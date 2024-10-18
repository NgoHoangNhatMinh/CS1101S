// Task 1

function partition(xs, p) {
    // your answer here
    return pair(filter(x => x <= p, xs), 
                filter(x => x > p, xs));
}

// Test
const my_list = list(1, 2, 3, 4, 5, 6);
partition(my_list, 4);

// Task 2

function partition(xs, p) {
    // your answer here
    return pair(filter(x => x <= p, xs), 
                filter(x => x > p, xs));
}

function quicksort(xs) {
    // your answer here
    if (is_null(xs)) {
        return null;
    } else {
        const p = partition(tail(xs), head(xs));
        return append(quicksort(head(p)),
                      pair(head(xs),
                           quicksort(tail(p))));
    }
}

// Test
// const my_list = list(23, 12, 56, 92, -2, 0);
// quicksort(my_list);
