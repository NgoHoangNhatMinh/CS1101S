function dot_product(A, B) {
    // YOUR SOLUTION HERE
    let result = 0;
    for(let i = 0; i < array_length(A); i = i + 1) {
        result = result + A[i] * B[i];
    }
    return result;
}

function accumulate_array(op, init, A) {
    // YOUR SOLUTION HERE
    const len = array_length(A);
    let result = op(init, A[0]);
    
    for (let i = 1; i < len; i = i + 1) {
        result = op(result, A[i]);    
    }
    return result;
}

function filter_array(pred, A) {
    // YOUR SOLUTION HERE
    const len = array_length(A);
    const new_A = [];
    let pos = 0;
    
    for (let i = 0; i < len; i = i + 1) {
        if (pred(A[i])) {
            new_A[pos] = A[i];
            pos = pos + 1;
        }
    }
    return new_A;
}

function transpose(M) {
    // YOUR SOLUTION HERE
    const m = array_length(M);
    const n = array_length(M[0]);
    const new_M = [];
    
    for (let c = 0; c < n; c = c + 1) {
        new_M[c] = [];
        for (let r = 0; r < m; r = r + 1) {
            new_M[c][r] = M[r][c];
        }
    }
    return new_M;
}
