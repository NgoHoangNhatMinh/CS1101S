// Task 1A

function make_k_list(k, d) {

    // WRITE YOUR SOLUTION HERE.
    return d === 0
        ? 0
        : map(x => make_k_list(k, d - 1), enum_list(0, k - 1));
}

// Task 1B

function sum_k_list(klist) {

    // WRITE YOUR SOLUTION HERE.
    return is_null(klist)
        ? 0
        : is_number(klist)
        ? klist
        : is_number(head(klist))
        ? head(klist) + sum_k_list(tail(klist))
        : sum_k_list(head(klist)) + sum_k_list(tail(klist));
}

// Task 1C

function sum_k_list(klist) {

    // WRITE YOUR SOLUTION HERE.
    return is_null(klist)
        ? 0
        : is_number(klist)
        ? klist
        : is_number(head(klist))
        ? head(klist) + sum_k_list(tail(klist))
        : sum_k_list(head(klist)) + sum_k_list(tail(klist));
}

// Task 2A

function route_distance(mat, route) {

    // WRITE YOUR SOLUTION HERE.
    if (is_null(tail(tail(route)))) {
        return mat[head(route)][head(tail(route))];
    } else {
        return mat[head(route)][head(tail(route))] + route_distance(mat, tail(route));
    }
}

// Task 2B

// The route_distance function for the preceding task has been
// pre-declared here for you to use in this task.
// Do not declare your own route_distance function.
/*
function route_distance(mat, route) {
    // Pre-declared
}
*/

function shortest_paper_route(n, mat, start) {

    // You can keep, modify or remove the permutations function.
    function permutations(ys) {
        return is_null(ys)
            ? list(null)
            : accumulate(append, null,
                map(x => map(p => pair(x, p),
                             permutations(remove(x, ys))),
                    ys));
    }

    // WRITE YOUR SOLUTION HERE.
    let routes = start === 0
                    ? permutations(enum_list(1, n - 1))
                    : start === n
                    ? permutations(enum_list(0, n - 2))
                    : permutations(append(enum_list(0, start - 1),
                                          enum_list(start + 1, n - 1)));
    routes = map(r => append(pair(start, r), list(start)), routes);
    let min_route = head(routes);
    let min_distance = route_distance(mat, min_route);
    
    while (!is_null(routes)) {
        const temp = head(routes);
        const temp_distance = route_distance(mat, temp);
        if (temp_distance < min_distance) {
            min_route = temp;
            min_distance = temp_distance;
            routes = tail(routes);
        } else {
            routes = tail(routes);
        }
    }
    return pair(min_route, min_distance);
}

// Task 3A

function make_postfix_exp(bae) {

    // WRITE YOUR SOLUTION HERE.
    function make_postfix_exp_list(bae) {
        if (is_number(bae)) {
            return list(bae);
        } else {
            return append(make_postfix_exp_list(bae[0]),
                          append(make_postfix_exp_list(bae[2]),
                                 list(bae[1])));
        }
    }
    const pfe_list = make_postfix_exp_list(bae);
    let temp = pfe_list;
    const pfe = [];
    display(pfe_list);
    for (let i = 0; i < length(pfe_list); i = i + 1) {
        pfe[i] = head(temp);
        temp = tail(temp);
    }
    return pfe;
}

// Task 3B

function eval_postfix_exp(pfe) {

    // WRITE YOUR SOLUTION HERE.
    let control = [];
    let control_pos = 0;
    let n = array_length(pfe);
    for (let i = 0; i < n; i = i + 1) {
        if (is_number(pfe[i])) {
            control[control_pos] = pfe[i];
            control_pos = control_pos + 1;
        } else {
            if (pfe[i] === "+") {
                control[control_pos - 2] = control[control_pos - 2] 
                                            + 
                                            control[control_pos - 1];
                control_pos = control_pos - 1;
            } else if (pfe[i] === "-") {
                control[control_pos - 2] = control[control_pos - 2] 
                                            - 
                                            control[control_pos - 1];
            
                                control_pos = control_pos - 1;
            } else if (pfe[i] === "*") {
                control[control_pos - 2] = control[control_pos - 2] 
                                            * 
                                            control[control_pos - 1];
                control_pos = control_pos - 1;
            } else if (pfe[i] === "/") {
                control[control_pos - 2] = control[control_pos - 2] 
                                            / 
                                            control[control_pos - 1];
                control_pos = control_pos - 1;
            }
        }
    }
    return control[0];
}
