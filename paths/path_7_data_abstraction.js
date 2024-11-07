function lte(rat1, rat2) {
    // YOUR SOLUTION HERE
    const rat3 = sub_rat(rat1, rat2);
    return (numer(rat3) <= 0 && denom(rat3) > 0) || (numer(rat3) >= 0 && denom(rat3) < 0);
}

// The function lte has been pre-declared for you.

function gte(x, y) {
    // YOUR SOLUTION HERE
    return lte(y, x);
}

function eq(x, y) {
    // YOUR SOLUTION HERE
    return lte(x, y) && lte(y, x);
}

function lt(x, y) {
    // YOUR SOLUTION HERE
    return lte(x, y) && !(lte(x, y) && lte(y, x));
}

function gt(x, y) {
    // YOUR SOLUTION HERE
    return lte(y, x) && !(lte(x, y) && lte(y, x));
}

function sum(xs) {
    // YOUR SOLUTION HERE
    return is_null(xs) ? 0 : head(xs) + sum(tail(xs));
}
