// Question 1

function flatten_list(LoL) {
	return accumulate(append, null, tree);
}

// Question 2

function tree_sum(tree) {
	if (is_null(tree)) {
		return 0;
  	} else {
  		return (is_list(head(tree)) ? tree_sum(head(tree)) : head(tree))
				+ tree_sum(tail(tree));
	}
}

// Question 3
function accumulate_tree(f, op, initial, tree) {
	return accumulate((x, wish) => is_list(x)
					  			   ? op(accumulate_tree(f, op, initial, x), wish)
								   : op(f(x), wish),
					  initial,
					  tree);
}
