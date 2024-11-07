function n_of_n_stream() {
    // YOUR SOLUTION HERE
    function helper(count, n) {
        return count > n
            ? helper(1, n + 1)
            : pair(n, () => helper(count + 1, n));
    }
    return helper(1, 1);
}

function shorten_stream(s, k) {
    // YOUR SOLUTION HERE
    return is_null(s)
        ? null
        : k === 0
        ? null
        : pair(head(s), () => shorten_stream(stream_tail(s), k - 1));
}
