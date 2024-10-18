// TASK 1

function d_split_list(xs) {

    // *** Your answer here. ***
    
    const p = [xs];
    let curr = xs;
    
    for (let i = 0; i < math_ceil(length(xs) / 2) - 1; i = i + 1) {
        curr = tail(curr);
    }
    
    p[1] = tail(curr);
    set_tail(curr, null);
    
    return p;
}

// TEST:
const my_list1 = list(1, 2, 3, 4, 5, 6);
const my_list2 = list(5, 4, 3, 2, 1);
d_split_list(my_list1);
d_split_list(my_list2);

// TASK 2

function d_merge(xs, ys) {

    // *** Your answer here. ***
    
    // temp will traverse along the result list
    let temp = head(xs) < head(ys) ? xs : ys;
    const result = temp;
    
    // curr1 and curr2 will traverse along list xs and ys respectively
    let curr1 = head(xs) < head(ys) ? tail(xs) : xs;
    let curr2 = head(xs) < head(ys) ? ys : tail(ys);
    
    while(!is_null(curr1) && !is_null(curr2)) {
        
        // to determine if the next element of temp (which stores the result)
        // will point to curr1 or curr2
        if (head(curr1) < head(curr2)) {
            set_tail(temp, curr1);
            curr1 = tail(curr1);
            temp = tail(temp);
        } else {
            set_tail(temp, curr2);
            curr2 = tail(curr2);
            temp = tail(temp);
        }
    }
    
    if (is_null(curr1) && is_null(curr2)) {
        return result;
    } else if (is_null(curr1)) {
        set_tail(temp, curr2);
        return result;
    } else {
        set_tail(temp, curr1);
        return result;
    }
}

// TEST:
// const my_list1 = list(2, 4, 5, 9);
// const my_list2 = list(3, 5, 8);
// d_merge(my_list1, my_list2);

// TASK 3

// Copy-and-paste your d_split_list function for Task 1 here.
function d_split_list(xs) {

    // *** Your answer here. ***
    
    const p = [xs];
    let curr = xs;
    
    for (let i = 0; i < math_ceil(length(xs) / 2) - 1; i = i + 1) {
        curr = tail(curr);
    }
    
    p[1] = tail(curr);
    set_tail(curr, null);
    
    return p;
}

// Copy-and-paste your d_merge function for Task 2 here.
function d_merge(xs, ys) {

    // *** Your answer here. ***
    
    // temp will traverse along the result list
    let temp = head(xs) < head(ys) ? xs : ys;
    const result = temp;
    
    // curr1 and curr2 will traverse along list xs and ys respectively
    let curr1 = head(xs) < head(ys) ? tail(xs) : xs;
    let curr2 = head(xs) < head(ys) ? ys : tail(ys);
    
    while(!is_null(curr1) && !is_null(curr2)) {
        
        // to determine if the next element of temp (which stores the result)
        // will point to curr1 or curr2
        if (head(curr1) < head(curr2)) {
            set_tail(temp, curr1);
            curr1 = tail(curr1);
            temp = tail(temp);
        } else {
            set_tail(temp, curr2);
            curr2 = tail(curr2);
            temp = tail(temp);
        }
    }
    
    if (is_null(curr1) && is_null(curr2)) {
        return result;
    } else if (is_null(curr1)) {
        set_tail(temp, curr2);
        return result;
    } else {
        set_tail(temp, curr1);
        return result;
    }
}

function d_merge_sort(xs) {

    // *** Your answer here. ***
    if (is_null(xs) || is_null(tail(xs))) {
        return xs;
    } else {
        const split_list = d_split_list(xs);
        const left_list = split_list[0];
        const right_list = split_list[1];
        
        return d_merge(d_merge_sort(left_list),
                       d_merge_sort(right_list));        
    }
}

// TEST:
const my_list = list(7, 2, 4, 6, 9, 1, 5, 8, 3, 6);
d_merge_sort(my_list);
