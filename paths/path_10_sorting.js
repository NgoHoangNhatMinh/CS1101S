// put the first n elements of xs into a list
function take(xs, n) {
    // YOUR SOLUTION HERE
    return n === 0 ? null : pair(head(xs), take(tail(xs), n - 1));
}

// drop the first n elements from list, return rest
function drop(xs, n) {
    // YOUR SOLUTION HERE
    return n === 0 ? xs : drop(tail(xs), n - 1);
}

function min(a, b) {
    return a < b ? a : b;
}

// given a non-empty list xs, returns the smallest item in xs
function smallest(xs) {
    // YOUR SOLUTION HERE
    return is_null(tail(xs))
        ? head(xs)
        : smallest(pair(min(head(xs), head(tail(xs))), 
                   tail(tail(xs))));
}

// removes the first instance of x from xs
function remove(x, xs) {
    // YOUR SOLUTION HERE
    return is_null(xs)
        ? null
        : equal(head(xs), x)
        ? tail(xs)
        : pair(head(xs), remove(x, tail(xs)));
}

function selection_sort(xs) {
    if (is_null(xs)) {
        return null;
    } else {
        // We pick the smallest element, where should it go?
        // What should we recurse on?
        // YOUR SOLUTION HERE
        const min = smallest(xs);
        return pair(min, selection_sort(remove(min, xs)));
    }
}
