// USEFUL FUNCTIONS

// Arrays
function list_to_array(L) {
    const A = [];
    let i = 0;
    for (let p = L; !is_null(p); p = tail(p)) {
        A[i] = head(p);
        i = i + 1;
    }
    return A;
}

function array_to_list(a) {
    return build_list((i) => a[i], array_length(a));
}

// tree list to tree array ??

function array_append(arr1, arr2) {
    return list_to_array(append(
                            array_to_list(arr1),
                            array_to_list(arr2)));     
}

function init_2D_array(R, C, init) {
    const ret_arr = [];
    for (let row_iter = 0; row_iter < R; row_iter = row_iter + 1) {
        ret_arr[row_iter] = [];
        for (let col_iter = 0; col_iter < C; col_iter = col_iter + 1) {
            ret_arr[row_iter][col_iter] = init;
        }
    }
    
    return ret_arr;
}

function flatten_array(A) {
    let flatten_A = [];
    const n = array_length(A);
    for (let i = 0; i < n; i = i + 1) {
        if (is_array(A[i])) {
            flatten_A = array_append(flatten_A, flatten_array(A[i]));
        } else {
            flatten_A = array_append(flatten_A, [A[i]]);
        }
    }
    return flatten_A;
}

function search_array(A, x) {
    const len = array_length(A);
    let i = 0;
    while (i < len && A[i] !== x) {
        i = i + 1;
    }
    return i < len ? i : -1;
}

// List
function flatten_list(LoL) {
	return accumulate(append, null, LoL);
}

function flatten_tree(tree) {
	return accumulate((x, wish) => is_number(x)
	                                ? append(list(x), flatten_tree(wish))
	                                : append(x, flatten_tree(wish))
                        , null
                        , tree);
}

function accumulate_tree(f, op, initial, tree) {
	return accumulate((x, wish) => is_list(x)
					  			   ? op(accumulate_tree(f, op, initial, x), wish)
								   : op(f(x), wish),
					  initial,
					  tree);
}

function map_tree(f, tree) {
    return is_null(tree)
        ? null
        : accumulate((x, wish) => is_number(x)
                                    ? pair(f(x), wish)
                                    : pair(map_tree(f, x), wish),
                        null,
                        tree);
}

// + map and filter tree

function remove_duplicates(lst) {
    return is_null(lst)
      ? null
      : pair(head(lst),
             remove_duplicates(filter(x => x !== head(lst), tail(lst))));
  }

// Usage: Make a complete copy of any list / array based data structure.
function deep_copy(x) {
    if (is_pair(x)) {
        return pair(deep_copy(head(x)), deep_copy(tail(x)));
    } else if (is_array(x)) {
        const a = [];
        for (let i = 0; i < array_length(x); i = i + 1) {
            a[i] = deep_copy(x[i]);
        }
        return a;
    } else {
        return x;
    }
}



// STACK: LIFO
const stack = [];
let stack_length = 0;

// Add an element to the top of the stack
function push(x) {
    stack[stack_length] = x;
    stack_length = stack_length + 1;
}
// Pop the top element of the stack
function pop() {
    if (stack_length === 0) {
        error('calling pop() on an empty stack.');
    }
    stack_length = stack_length- 1;
    return stack[stack_length];
}



// QUEUE: FIFO
let queue = list();

// Add an element to the end of the queue
function enqueue(x) {
    queue = append(queue, list(x));
}

// Remove the first element of the queue
function dequeue() {
    if (is_null(queue)) {
        error('calling dequeue() on an empty stack.');
    }
    const ans = head(queue);
    queue = tail(queue);
    return ans;
}



/*
Permutations
Input: List
Output: List of all permutations
*/
function flatmap(f, seq) {
    return accumulate(append, null, map(f, seq));
}

function permutations(s) {
    return is_null(s)
        ? list(null)
        : flatmap(
                (x) => map((p) => pair(x, p),
                permutations(remove(x, s))), s
                );
}



/*
/*
Subsets
Input: List
Output: List of all subsets
*/
function subsets(s) {
    if (is_null(s)) {
        return list(null);
    } else {
        const rest = subsets(tail(s));
        return append(
            rest,
            map((x) => pair(head(s), x), rest)
        );
    }
}



/*
Bubble Sort
Input: Array
Output: Sorted Array
Time: O(n^2), Space: O(1)
*/
function bubble_sort(a) {
    function swap(a, i, j) {
        const tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    const n = array_length(a);
    for (let i = 0; i < n- 1; i = i + 1) {
        for (let j = 0; j < n- i- 1; j = j + 1) {
            if (a[j] > a[j + 1]) {
                swap(a, j, j + 1);
            }
        }
    }
    return a;
}



/* Merge Sort
Input: List
Output: Sorted List
Time: O(nlogn), Space: O(n)
*/
function merge_sort(xs) {
    if (is_null(xs) || is_null(tail(xs))) {
        return xs;
    } else {
        const mid = middle(length(xs));
        return merge(merge_sort(take(xs, mid)), merge_sort(drop(xs, mid)));
    }
}

function middle(n) {
    return math_floor(n / 2);
}

function merge(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } else if (is_null(ys)) {
        return xs;
    } else {
        const x = head(xs);
        const y = head(ys);
        if (x <= y) {
            return pair(x, merge(tail(xs), ys));
        } else {
            return pair(y, merge(xs, tail(ys)));
        }
    }
}

function take(xs, n) {
    return n === 0 ? null : pair(head(xs), take(tail(xs), n- 1));
}

function drop(xs, n) {
    return n === 0 ? xs : drop(tail(xs), n- 1);
}

// Binary tree

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

function bin_tree_to_BST(T) {

    // WRITE YOUR SOLUTION HERE.
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
    const sorted_list = merge_sort(flatten_bin_tree(T));
    return helper(T, sorted_list)[0];
}


// ONLINE CHEAT SHEET

