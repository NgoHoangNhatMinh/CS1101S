function search_cond(A, cond) {

    // YOUR SOLUTION HERE
    for (let i = 0; i < array_length(A); i = i + 1) {
        if (cond(A[i])) {
            return i;
        }
    }
    return -1;
}

function insert(A, pos, x) {

    // YOUR SOLUTION HERE
    for (let i = array_length(A); i > pos; i = i - 1) {
        A[i] = A[i - 1];
    }
    A[pos] = x;
}

function insertion_sort(A) {

    // YOUR SOLUTION HERE
    let sorted_array = [];
    sorted_array[0] = A[0];
    
    for (let i = 1; i < array_length(A); i = i + 1) {
        const pos = search_cond(sorted_array, x => x > A[i]);
        if (pos !== -1) {
            insert(sorted_array, pos, A[i]);
        } else {
            sorted_array[i] = A[i];
        }
    }
    return sorted_array;
}
