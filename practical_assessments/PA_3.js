// Task 1A

function is_pa_word(s) {
    // your solution goes here
    let paw = pa_words;
    while (!is_null(paw)) {
        if (s === head(paw)) {
            return true;
        } else {
            paw = tail(paw);
        }
    }
    return false;
}

// testing

// is_pa_word("exhilarating");   // should return true
// is_pa_word("tintinnabulate"); // should return false

// Task 1B

function count_matches(char, pos) {
    // your solution goes here
    return length(filter(s => char_at(s,pos) === char, pa_words));
}

// testing

// count_matches("q", 2);  // should return 3
// count_matches("y", 26); // should return 1

// Task 1C

// your helper functions go here

function char_stream(s) {
    // your solution goes here
    function helper(s, i) {
        return pair(char_at(s, i), () => helper(s, i + 1));
    }
    return helper(s, 0);
}

// testing

// const my_stream = char_stream("hello");
// stream_ref(my_stream, 4);  // returns "o"

// Task 1D

function solve(n, constraints) {
    // your solution goes here
    
    function solve_constrains(s, constraints) {
        return is_null(constraints)
            ? true
            : char_at(s, head(constraints)[0]) === head(constraints)[1]
            && solve_constrains(s, tail(constraints));
    }
    
    let paw = pa_words;
    let ans = null;
    
    while (!is_null(paw)) {
        const word = head(paw);
        if (string_length(word) === n) {
            if (solve_constrains(word, constraints)) {
                ans = pair(word, ans);
            }
        }
        paw = tail(paw);
    }
    
    return reverse(ans);
}

// testing

// display_list(solve(13, list(pair(2, "s"), pair(4, "u"), pair(7, "e"), pair(9, "u"))));
        //   should display list("resourcefully")

// Task 2A

function eval_poly(poly) {

    // WRITE YOUR SOLUTION HERE.
    function helper(poly, x) {
        return is_null(poly)
            ? 0
            : head(poly)[0] * math_pow(x, head(poly)[1])
            + helper(tail(poly), x);
    }
    return x => helper(poly, x);
}

// Task 2B

function add_poly(poly1, poly2) {
    if (is_null(poly1)) {

        // WRITE YOUR SOLUTION HERE.
        return poly2;

    } else if (is_null(poly2)) {

        // WRITE YOUR SOLUTION HERE.
        return poly1;

    } else {
        const coeff1 = head(head(poly1));
        const coeff2 = head(head(poly2));
        const exp1 = tail(head(poly1));
        const exp2 = tail(head(poly2));

        if (exp1 === exp2) {

            // WRITE YOUR SOLUTION HERE.
            return coeff1 + coeff2 !== 0
                ? pair([coeff1 + coeff2, exp1], add_poly(tail(poly1), tail(poly2)))
                : add_poly(tail(poly1), tail(poly2));
                
        } else if (exp1 < exp2) {

            // WRITE YOUR SOLUTION HERE.
            return pair([coeff1, exp1], add_poly(tail(poly1), poly2));

        } else {

            // WRITE YOUR SOLUTION HERE.
            return pair([coeff2, exp2], add_poly(poly1, tail(poly2)));

        }
    }
}

// Task 2C

// The add_poly function for the preceding task has been
// pre-declared here for you to use in this task.
// Do not declare your own add_poly function.
/*
function add_poly(poly1, poly2) {
    // Pre-declared
}
*/

function multiply_poly(poly1, poly2) {

    // WRITE YOUR SOLUTION HERE.
    if (is_null(poly1) || is_null(poly2)) {
        return null;
    } else {
        const mul_poly = map(p2 => map(p1 => [head(p1) * head(p2),
                                             tail(p1) + tail(p2)],
                                      poly1),
                            poly2);
        return accumulate(add_poly, null, mul_poly);
    }
}

// Task 3

function alt_column_matrix(R, C) {
    const M = [];

    // WRITE YOUR SOLUTION HERE.
    let n = 1;
    for (let y = 0; y < R; y = y + 1) {
        M[y] = [];
    }
    
    for (let x = 0; x < C; x = x + 1) {
        for (let y = 0; y < R; y = y + 1) {
            const alt_y = x % 2 === 0 ? y : R - y - 1; 
            M[alt_y][x] = n;
            n = n + 1;
        }
    }
    
    return M;
}

alt_column_matrix(4, 5);
