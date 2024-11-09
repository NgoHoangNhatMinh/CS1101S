const bae_tree1 = 123;
const bae_tree2 = list(56, '+', 23);
const bae_tree3 = list(list(2, '+', 5), '*', 100);
const bae_tree4 = list(list(10, '/', 2), '-', list(3, '*', 4));

function evaluate(bae_tree) {
    if (is_number(bae_tree)) {
        return bae_tree;
    }
    const left_expr = list_ref(bae_tree, 0);
    const mid_expr = list_ref(bae_tree,1);
    const right_expr = list_ref(bae_tree, 2);

    const left = is_number(left_expr)
                ? left_expr
                : evaluate(left_expr);
    const right = is_number(right_expr)
                ? right_expr
                : evaluate(right_expr);
    const op = mid_expr === '+'
            ? (x,y) => x+y
            : mid_expr === '-'
            ? (x,y) => x-y
            : mid_expr === '*'
            ? (x,y) => x*y
            : (x,y) => x/y;
    return op(left, right); 
}

const bae_list = list('(','(',2,'+',5,')','*',100,')');
function bae_list_separator(bae_list) {
    let first = list();
    let curr_bae = bae_list;
    let op = '';
    let second = list();
    let bracket_counts = 0;
    for (let b = tail(bae_list); 
        (head(b) !== '+' && head(b) !== '-' && head(b) !== '*' && head(b) !== '/') || bracket_counts !== 0;
        b = tail(b)) {
            if (head(b) === '(') {
                bracket_counts = bracket_counts + 1;
            } else if (head(b) === ')') {
                bracket_counts = bracket_counts - 1;
            }
            first = pair(head(b), first);
            curr_bae = b;
        }
    curr_bae = tail(curr_bae);
    op = head(curr_bae);
    second = reverse(tail(reverse(tail(curr_bae))));
    return [reverse(first), op, second];
}

display_list(bae_list_separator(bae_list));

function build_BAE_tree(bae_list) {
    const first_op_second = bae_list_separator(bae_list);
    let first = first_op_second[0];
    let op = first_op_second[1];
    let second = first_op_second[2];
    
    first = is_number(head(first))
            ? head(first)
            : build_BAE_tree(first);
    second = is_number(head(second))
            ? head(second)
            : build_BAE_tree(second);
    return list(first, op, second);
}

build_BAE_tree(bae_list);

function evaluate_BAE(bae_list) {
    return evaluate(build_BAE_tree(bae_list));
}

evaluate_BAE(bae_list);
