// TASK 1A

// You may write helper functions here.


function split(S) {

    // WRITE YOUR SOLUTION HERE.
    const s_array = [];
    let i = 0;
    while (char_at(S, i) !== undefined) {
        s_array[i] = char_at(S, i);
        i = i + 1;
        
    }
    
    return s_array;
}

// TASK 1B

// You may write helper functions here.

function num_characters_from(A, B) {

    // WRITE YOUR SOLUTION HERE.
    let ans = 0;
    for (let i = 0; i < array_length(A); i = i + 1) {
        for (let j = 0; j < array_length(B); j = j + 1) {
            if (A[i] === B[j]) {
                ans = ans + 1;
            }
        }
    }
    return ans;
}

// TASK 1C

// You may write helper functions here.


function num_unique(A) {

    // WRITE YOUR SOLUTION HERE.
    let mem = null;
    let ans = 0;
    for (let i = 0; i < array_length(A); i = i + 1) {
        if (is_null(member(A[i], mem))) {
            ans = ans + 1;
            mem = pair(A[i], mem);
        }
    }
    return ans;
}

// TASK 2A

// You may write helper functions here.


// You are free to modify the following function and use it in your solution.
function search_array(A, x) {
    const len = array_length(A);
    let i = 0;
    while (i < len && A[i] !== x) {
        i = i + 1;
    }
    return i < len ? i : -1;
}


function baseN_to_value(X) {

    const DIGIT_SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                           "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                           "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                           "U", "V", "W", "X", "Y", "Z"];

    // WRITE YOUR SOLUTION HERE.
    const base = X[0];
    let digits = X[1];
    let n = length(digits) - 1;
    let sum = 0;
    
    while (!is_null(digits)) {
        sum = sum 
            + search_array(DIGIT_SYMBOLS, head(digits)) 
            * math_pow(base, n);
        n = n - 1;
        digits = tail(digits);
    }
    return sum;
}

// TASK 2B

// You may write helper functions here.


function value_to_baseN(N, x) {

    const DIGIT_SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                           "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                           "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                           "U", "V", "W", "X", "Y", "Z"];

    // WRITE YOUR SOLUTION HERE.
    let max_pow = 0;
    while (math_pow(N, max_pow) <= x) {
        max_pow = max_pow + 1;
    }
    max_pow = x !== 0 ? max_pow - 1 : 0;
    
    function helper(pow, x) {
        return pow === -1
            ? null
            : pair(DIGIT_SYMBOLS[math_floor(x / math_pow(N, pow))],
                    helper(pow - 1, x - math_pow(N, pow) * math_floor(x / math_pow(N, pow))));
    }
    
    return pair(N, helper(max_pow, x));
}

// TASK 3A

// You may write helper functions here.


function flatten_bin_tree(T) {

    // WRITE YOUR SOLUTION HERE.
    if (is_null(T)) {
        return null;
    } else {
        return append(flatten_bin_tree(list_ref(T, 1)), 
                    append(list(list_ref(T, 0)),
                            flatten_bin_tree(list_ref(T, 2))));
    }
}

// TASK 3B

// You may write helper functions here.
function insert(x, xs) {
    return is_null(xs)
           ? list(x)
           : x <= head(xs)
           ? pair(x, xs)
           : pair(head(xs), insert(x, tail(xs)));
}

function insertion_sort(xs) {
    return is_null(xs)
           ? xs
           : insert(head(xs), insertion_sort(tail(xs)));
}

function split_list(L) {
    const len = length(L);
    const mid = math_floor(len / 2);
    
    let take = null;
    let drop = null;
    let m = 0;
    
    for (let i = 0; i < len; i = i + 1) {
        if (i < mid) {
            take = pair(head(L), take);
        } else if (i === mid) {
            m = head(L);
        } else {
            drop = pair(head(L), drop);
        }
        L = tail(L);
    }
    return [m, reverse(take), reverse(drop)];
}

function make_balanced_BST(L) {

    // WRITE YOUR SOLUTION HERE.
    function helper(L) {
        if (is_null(L)) {
            return null;
        } else if(length(L) === 1) {
            return list(head(L), null, null);
        } else {
            let vals = split_list(L);
            return list(vals[0], helper(vals[1]), helper(vals[2]));
        }
    }
    let L_copy = accumulate(pair, null, L);
    return helper(insertion_sort(L_copy));
}

// TASK 3C

// You may write helper functions here.
function insert(x, xs) {
    return is_null(xs)
           ? list(x)
           : x <= head(xs)
           ? pair(x, xs)
           : pair(head(xs), insert(x, tail(xs)));
}

function insertion_sort(xs) {
    return is_null(xs)
           ? xs
           : insert(head(xs), insertion_sort(tail(xs)));
}

function helper(T, L) {
    if (is_null(T)) {
        return [null, L];
    } else {
        const left = helper(list_ref(T, 1), L);
        L = left [1];
        const center_vals = head(L);
        L = tail(L);
        const right = helper(list_ref(T, 2), L);
        L = right[1];
        return [list(center_vals, left[0], right[0]), L];
    }
}

function bin_tree_to_BST(T) {

    // WRITE YOUR SOLUTION HERE.
    const sorted_list = insertion_sort(flatten_bin_tree(T));
    return helper(T, sorted_list)[0];
}
