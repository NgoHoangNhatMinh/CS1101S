// Produces a list of integers from a to b,
// assuming a, b are integers.

function enum_list(a, b) {
    // YOUR SOLUTION HERE
    return a > b ? null : pair(a, enum_list(a + 1, b));
}

// Produces a list of integers from a to b,
// assuming a, b are integers.

function enum_list(a, b) {
    // YOUR SOLUTION HERE
    return build_list(x => x + a, b - a + 1);
}

enum_list(3, 7);

// You must use the supplied filter function.

// Given a list of integers xs, returns a list that
//   contains only the odd integers in xs.
function odd_only(xs) {
    // YOUR SOLUTION HERE
    return filter(x => x % 2 === 1, xs);
}

// Given a list of positive integers xs, returns a list that
//   contains only the prime numbers in xs.
// Hint: write a helper function.
function prime_only(xs) {
    // YOUR SOLUTION HERE
    function is_prime(x) {
        function helper(x, c, i) {
            return i === x ? c === 1
                            : x % i === 0 
                            ? helper(x, c + 1, i + 1)
                            : helper(x, c, i + 1);
        }
        return helper(x, 0, 1);
    }
    return filter(is_prime, xs);
}

const display = custom_display; // DO NOT EDIT.

// Calls display on every item in the tree xs.
function traverse(xs) {
    // Modify this function to work on trees.
    if (is_null(xs)) {
        return null;
    } else {
        if (is_list(head(xs))) {
            traverse(head(xs));
        } else {
            display(head(xs));
        }
        return traverse(tail(xs));
    }
}
