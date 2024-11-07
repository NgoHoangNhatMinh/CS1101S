function eval_array_expression(expr) {
    // your solution goes here
    let expr_list = head(tail(expr));
    const eval_array = [];
    const n = length(expr_list);
    for (let i = 0; i < n; i = i + 1) {
        eval_array[i] = evaluate(head(expr_list));
        expr_list = tail(expr_list);
    }
    return eval_array;
}

function evaluate(expr) { 
    return is_literal(expr)
           ? literal_value(expr)
           : is_operator_combination(expr)
           ? apply(operator_combination_operator_symbol(expr),
               list_of_values( 
                 list(operator_combination_first_operand(expr),
                      operator_combination_second_operand(expr))))
           : error(expr, "Unknown expression: ");
}
function list_of_values(exprs) {
    return map(evaluate, exprs); 
}

function apply(operator, operands) {
    const first_op = head(operands);
    const second_op = head(tail(operands));
    return operator === "+"
           ? first_op + second_op
           : operator === "-"
           ? first_op - second_op 
           : operator === "*" 
           ? first_op * second_op 
           : operator === "/" 
           ? first_op / second_op
           : error(operator, "Unknown operator");
}

function is_literal(component) {
    return is_tagged_list(component, "literal");
}
function literal_value(component) {    
    return head(tail(component));
}

function is_tagged_list(component, the_tag) {
    return is_pair(component) && head(component) === the_tag;
}

function is_operator_combination(component) {	    
    return is_tagged_list(component, "binary_operator_combination");
}
function operator_combination_operator_symbol(component) {
    return list_ref(component, 1);
}
function operator_combination_first_operand(component) {
    return list_ref(component, 2);
}
function operator_combination_second_operand(component) {
    return list_ref(component, 3);
}

function pretty_print_operator_combination(expr) {
    const op = operator_combination_operator_symbol(expr);
    const lhs = operator_combination_first_operand(expr);
    const rhs = operator_combination_second_operand(expr);
    return "(" + pretty_print_expression(lhs) + " " + op +
           " " +  pretty_print_expression(rhs) + ")";
}

function pretty_print_expression(expr) {
    // your solution goes here
    if (is_literal(expr)) {
        return stringify(literal_value(expr));
    } else {
        return pretty_print_operator_combination(expr);
    }
}

function pretty_print(input) {
    return pretty_print_expression(parse(input)) + ";";
}

pretty_print("(1) + ((2));");

function parse_and_evaluate(input) {
    // your solution goes here
    return evaluate(parse(input));
}

parse_and_evaluate("1 + 2 * 3;");
