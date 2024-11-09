// Enter your FULL NAME and NUSNET ID (eXXXXXXX) here:
// * FULL NAME: Ngo Hoang Nhat Minh
// * NUSNET ID: e1355551

// TASK 1A

// You may write helper functions here.

function lookup_codeword(code_table, char) {

    // WRITE YOUR SOLUTION HERE.
    let pos = -1;
    const alphabet = code_table[0];
    const codewords = code_table[1];
    
    // Search for char in alphabet 
    // If it exists, update its index to pos
    for (let i = 0; i < array_length(alphabet); i = i + 1) {
        if (char === alphabet[i]) {
            pos = i;
        }
    }
    return pos !== -1
        ? codewords[pos]
        : null;
}

// Enter your FULL NAME and NUSNET ID (eXXXXXXX) here:
// * FULL NAME: Ngo Hoang Nhat Minh
// * NUSNET ID: e1355551

// TASK 1B

// You may write helper functions here.

function encode_message(code_table, msg) {

    // WRITE YOUR SOLUTION HERE.
    // map the list of chars in msg to its codes
    // then append all together
    return accumulate(append, null, map(c => lookup_codeword(code_table,c), msg));
}

// Enter your FULL NAME and NUSNET ID (eXXXXXXX) here:
// * FULL NAME: Ngo Hoang Nhat Minh
// * NUSNET ID: e1355551

// TASK 1C

// You may write helper functions here.
// add character to code tree at position
function add_char(tree, pos, char) {
    if (is_null(pos)) {
        set_head(tree, char);
        set_tail(tree, char);
    } else if(head(pos) === 0) {
        if (is_null(tree[0])) {
            set_head(tree, [null, null]);
        }
        add_char(tree[0], tail(pos), char);
    } else {
        if (is_null(tree[1])) {
            set_tail(tree, [null,null]);
        }
        add_char(tree[1], tail(pos), char);
    }
}

function build_code_tree(code_table) {

    // WRITE YOUR SOLUTION HERE.
    let code_tree = [null,null];
    let alphabet = code_table[0];
    let codewords = code_table[1];
    
    for (let i = 0; i < array_length(alphabet); i = i + 1) {
        add_char(code_tree, codewords[i], alphabet[i]);
    }
    
    return code_tree;
}

// Enter your FULL NAME and NUSNET ID (eXXXXXXX) here:
// * FULL NAME: Ngo Hoang Nhat Minh
// * NUSNET ID: e1355551

// TASK 1D

// You may write helper functions here.

function decode_message(code_tree, encoded_msg) {

    // WRITE YOUR SOLUTION HERE.
    let temp_tree = code_tree;
    let message = list();
    
    for (let m = encoded_msg; !is_null(m); m = tail(m)) {
        if (!is_array(temp_tree[head(m)][0])) {
            // if temp tree reach the end, add the letter to
            // the message
            // Reset temp_tree position to the root to find the
            // next letter
            message = pair(temp_tree[head(m)][0], message);
            temp_tree = code_tree;
        } else {
            // temp tree traverse to the letter to location
            temp_tree = temp_tree[head(m)];
        }
    }
    return reverse(message);
}

// Enter your FULL NAME and NUSNET ID (eXXXXXXX) here:
// * FULL NAME: Ngo Hoang Nhat Minh
// * NUSNET ID: e1355551

// TASK 2A

// You may write helper functions here.
function combine_array(A,B){
    let lenA = array_length(A);
    let lenB = array_length(B);
    for(let i = lenA; i<lenA+lenB; i=i+1) {
        A[i] = B[i-lenA];
    }
    return A;
}

function concentric_array(n) {

    // WRITE YOUR SOLUTION HERE.
    if (n === 1) {
        return [[1]];
    }
    
    let CA = [];
    // Wishful thinking, assuming concentric array (n - 1) has been found
    let CA_1 = concentric_array(n - 1);
    let row_of_n = [];
    
    for (let i = 0; i < 2*n - 1; i = i + 1) {
        CA[i] = [];
        row_of_n[i] = n;
    }
    
    // add n to the first and last positions of each row in CA_1
    for (let i = 0; i < 2*(n - 1) - 1; i = i + 1) {
        CA_1[i] = combine_array(combine_array([n], CA_1[i]), [n]);
    }
    // combine into [row_of_n, CA_1, row_of_n]
    CA = combine_array(combine_array([row_of_n], CA_1), [row_of_n]);
    return CA;
}

// Enter your FULL NAME and NUSNET ID (eXXXXXXX) here:
// * FULL NAME: Ngo Hoang Nhat Minh
// * NUSNET ID: e1355551

// TASK 2B

// IMPORTANT:
// You must write your solution in Source §2.
// This means you are not allowed to use variables, assignments, loops,
// and arrays in your program. Using them will result in errors,
// and you will not be awarded any mark for this task.

// You may write helper functions here.

function concentric_list(n) {

    // WRITE YOUR SOLUTION HERE.
    if (n === 1){
        return list(list(1));
    } else {
        const row_of_n = build_list(x => n, 2 * n - 1);
        // wishful thinking, assuming concentric list of n - 1 has been found
        const CL_1 = concentric_list(n - 1);
        // for each row, add n to first and last place
        const mid_rows = map(r => pair(n, append(r, list(n))),CL_1);
        
        return pair(row_of_n, append(mid_rows, list(row_of_n)));
    }
}