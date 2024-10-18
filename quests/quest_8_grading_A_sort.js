// Task 1

/*

Describe your solution here, including
its order of growth.

You will get full XP only for
a solution that has an order of growth
O(n²) and that does not have an order
of growth Θ(n²).

Use a merge sort to count the number of swaps needed to get
an ordered list -> implement an iterative version of merge function
with a count variable to keep track of the nubmer of inversions
and sum them up to get the total grade.

*/

// Task 2

function graderVer1(arr) {
    // your solution here
    // I dont even understand what I'm writing anymore atp...
    
    // merge count returns a pair of merged list and count
    // where count is the number of swaps
    function merge_count(xs, ys) {
        function merge_helper(xs, ys, result, count) {
            if (is_null(xs)) {
                return pair(append(reverse(result), ys), count);
            } else if (is_null(ys)) {
                return pair(append(reverse(result), xs), count);
            } else {
                const x = head(xs);
                const y = head(ys);
                return x < y
                    ? merge_helper(tail(xs), ys, pair(head(xs), result), count)
                    : merge_helper(xs, tail(ys), pair(head(ys), result), count + length(xs));
            }
        }    
        return merge_helper(xs, ys, null, 0);
    }
    
    // At each iteration, we merge the first 2 elements of xs
    // with the result until xs is null or tail(xs) is null.
    // We update the count variable with the number of swaps
    // from merging and return the count
    function merge_sort_iter(xs, result, count) {
        if (is_null(xs)) {
            return count;    
        } else if (is_null(tail(xs))) {
            const merged_result = merge_count(result, xs);
            return count + tail(merged_result);
        } else {
            if (head(xs) < head(tail(xs))) {
                const merged_result = merge_count(result, list(head(xs), head(tail(xs))));
                return merge_sort_iter(tail(tail(xs)), 
                                       head(merged_result),
                                       count + tail(merged_result));
            } else {
                const merged_result = merge_count(result, list(head(tail(xs)), head(xs)));
                return merge_sort_iter(tail(tail(xs)), 
                                       head(merged_result),
                                       count + tail(merged_result) + 1);
            }
        }
    }
    return merge_sort_iter(arr, null, 0);
}

// Task 3

/* Describe your solution here

Since there's no constraint, I'm just going to find all possible 
triples from left to right and see which one is strictly decreasing.

There's 2 functions:
The first function generates all the possible combinations of triples
--> we can do this through an iterative function that has 
x, y, z variable to keep track of the first, second and third 
number in the triple.

The second function check if they are strictly decreasing.

*/

// Task 4

function graderVer2(arr) {
  // your solution here
    function left_to_right_triples(xs) {
        function helper(x, y, z, n, result) {
            return x > n
                ? result
                : y > n
                ? helper(x + 1, x + 2, x + 3, n, result)
                : z > n
                ? helper(x, y + 1, y + 2, n, result)
                : helper(x, y, z + 1, n, pair(list(list_ref(xs, x),
                                                   list_ref(xs, y),
                                                   list_ref(xs, z)), 
                                                   result));
        }
        const N = length(xs);
        return N < 3
            ? list(null)
            : helper(0, 1, 2, N - 1, null);
    }
    
    function strictly_decreasing(triplets, score) {
        return accumulate((t, ts) => head(t) > head(tail(t)) && head(tail(t)) > head(tail(tail(t)))
                               ? 1 + ts
                               : ts,
                          0,
                          triplets);
    }
    
    const triplets = left_to_right_triples(arr);
    
    return strictly_decreasing(triplets, 0);
}

// test your program!
graderVer2(list(5, 2, 3, 1, 4)); // should return 2
