// Task 1A

function delta_encode(L) {

    // WRITE YOUR SOLUTION HERE.
    let D = is_null(L) ? null : list(head(L));
    while (!is_null(L) && !is_null(tail(L))) {
        D = pair(head(tail(L)) - head(L), D);
        L = tail(L);
    }
    return reverse(D);
}

// Task 1B

function delta_decode(D) {

    // WRITE YOUR SOLUTION HERE.
    let L = is_null(D) ? null : list(head(D));
    let temp = D;
    while (!is_null(temp) && !is_null(tail(temp))) {
        L = pair(head(L) + head(tail(temp)), L);
        temp = tail(temp);
    }
    return reverse(L);
}

// Task 2A

function runlength_encode(L) {

    // WRITE YOUR SOLUTION HERE.
    function count_list(last_elem, L, count, counts, corr_list) {
        return is_null(L)
            ? [pair(count, counts), pair(last_elem, corr_list)]
            : head(L) === last_elem
            ? count_list(last_elem, tail(L), count + 1, counts, corr_list)
            : count_list(head(L), tail(L), 1, pair(count, counts), pair(last_elem, corr_list));
    }
    
    if (length(L) <= 1) {
        return L;
    }
    
    const codes = (count_list(head(L), L, 0, null, null));
    const counts = reverse(codes[0]);
    const nums = reverse(codes[1]);
    
    return map(i => list_ref(counts, i) > 1
                    ? [list_ref(nums, i), list_ref(counts, i)]
                    : list_ref(nums, i),
                enum_list(0, length(counts) - 1));
}

// Task 2B

function runlength_decode(R) {

    // WRITE YOUR SOLUTION HERE.
    const L = map(r => is_number(r)
                        ? list(r)
                        : build_list(x => r[0], r[1]),
                    R);
    return accumulate(append, null, L);
}

// Task 3A

// Feel free to use these functions:
const get_x = (aar) => list_ref(aar, 0);
const get_y = (aar) => list_ref(aar, 1);
const get_width = (aar) => list_ref(aar, 2);
const get_height = (aar) => list_ref(aar, 3);


function smallest_bounding_AAR_area(rs) {

    // WRITE YOUR SOLUTION HERE.
    let min_x = get_x(head(rs));
    let min_y = get_y(head(rs));
    let max_x = min_x + get_width(head(rs));
    let max_y = min_y + get_height(head(rs));

    while (!is_null(rs)) {
        min_x = math_min(min_x, get_x(head(rs)));
        min_y = math_min(min_y, get_y(head(rs)));
        max_x = math_max(max_x, min_x + get_width(head(rs)));
        max_y = math_max(max_y, min_y + get_height(head(rs))); 
        rs = tail(rs);
    }
    return (max_x - min_x) * (max_y - min_y);
}

// Task 3B

// Feel free to use these functions:
const get_x = (aar) => list_ref(aar, 0);
const get_y = (aar) => list_ref(aar, 1);
const get_width = (aar) => list_ref(aar, 2);
const get_height = (aar) => list_ref(aar, 3);


function optimized_smallest_bounding_AAR_area(rs) {

    // WRITE YOUR SOLUTION HERE.
    let max_width = math_max(get_width(head(rs)), get_height(head(rs)));
    let max_height = math_min(get_width(head(rs)), get_height(head(rs)));
    
    while (!is_null(rs)) {
        let temp_width = math_max(get_width(head(rs)), get_height(head(rs)));
        let temp_height = math_min(get_width(head(rs)), get_height(head(rs)));

        max_width = math_max(max_width, temp_width);
        max_height = math_max(max_height, temp_height);
        
        rs = tail(rs);
    }
    return max_height * max_width;
}

// Task 3C

// Feel free to use these functions:
const get_x = (aar) => list_ref(aar, 0);
const get_y = (aar) => list_ref(aar, 1);
const get_width = (aar) => list_ref(aar, 2);
const get_height = (aar) => list_ref(aar, 3);

function overlap_area(aar1, aar2) {

    // WRITE YOUR SOLUTION HERE.
    const min_x1 = get_x(aar1);
    const min_y1 = get_y(aar1);
    const max_x1 = min_x1 + get_width(aar1);
    const max_y1 = min_y1 + get_height(aar1);
    
    const min_x2 = get_x(aar2);
    const min_y2 = get_y(aar2);
    const max_x2 = min_x2 + get_width(aar2);
    const max_y2 = min_y2 + get_height(aar2);
    
    const upper_bound = math_min(max_y1, max_y2);
    const lower_bound = math_max(min_y1, min_y2);
    
    const left_bound = math_max(min_x1, min_x2);
    const right_bound = math_min(max_x1, max_x2);
    
    const width = right_bound - left_bound;
    const height = upper_bound - lower_bound;
    
    return width > 0 && height > 0
        ? width * height
        : 0;
}
