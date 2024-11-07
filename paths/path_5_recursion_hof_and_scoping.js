function choose(n, r) {
    return r > n // Change this condition.
           ? 0
           : r === 0 || r === n // Change this condition.
	       ? 1
           // Inductive case goes here.
           : choose(n-1, r - 1) + choose(n-1, r); // YOUR SOLUTION HERE.
}

// Sum the first n odd numbers less than or equal to n.
function sum_odd_lte(n) {
    // YOUR SOLUTION HERE
    function identity(n) {
        return n;
    }
    function add_two(n) {
        return n + 2;
    }
    return sum(identity, 1, add_two, n);
}

function accumulate(combiner, term, a, next, b, base) {
    // YOUR SOLUTION HERE
    return a > b
           ? base
           : combiner(term(a), accumulate(combiner, term, next(a), next, b, base));
    
}
