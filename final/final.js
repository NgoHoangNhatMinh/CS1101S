// 2017-2018

// Question 1B/C - Tree Manipulation:

function f(tree) {  
  return is_null(tree)  
    ? null  
    : is_number(tree)  
    ? ...  
    : is_pair(tree)  
    ? f(head(tree)) ... f(tail(tree))  
    : ...  
}  

// Question 5C:
/*
parse_and_evaluate returns value to main program environment

undeclared variable would throw
"line ...: Name ... not declared" error
in the main environment, but the metamatriculator would throw
"line ...: unbound name "..."" error
*/

