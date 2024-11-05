// Q1

function my_map(f, xs) {
  retrun accumulate((x, y) => pair(f(x), y), null, xs);
}

// Q2

function remove_duplicates(lst) {
  return is_null(lst)
    ? null
    : pair(head(lst),
           remove_duplicates(filter(x => x !== head(lst), tail(lst))));
}

// Q3

function makeup_amuont(x, coins) {
  if (x === 0) {
    return list(null);
  } else if (x < 0 || is_null(coins)) {
    return null;
  } else {
    const combi_A = makeup_amount(x, tail(coins));
    const combi_B = makeup_amount(x - head(coins), tail(coins));
    const combi_C = map(x => pair(head(coins), x), combi_B);

    return append(combi_A, combi_C);
  }
}
