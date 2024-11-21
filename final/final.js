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

// 2018-2019

// const :=

// 2019-2020

/* Question 8:
permutations/combinations may have 2 different base case: when input is 0, and when input < 0 --> which is not a valid input. 
*/
    
if (input === 0) {
  return list(null); // as input 0 is still a valid combination/permutation
else if (input < 0) {
  return null; // invalid input
}

// 2D memoization:

function 2d_memoize(fun) {
  const mem = [];

  function read(x,y) {
    if (mem[x] === undefined) {
      return undefined;
    } else {
      return mem[x][y];
    }
  }

  function write(x,y,val) {
    if (mem[x] === undefined) {
      mem[x] = [];
    }
    mem[x][y] = val;
  }

  function mf(x,y) {
    const mem_val = read(x,y);
    if (mem_val !== undefined) {
      return mem_val;
    } else {
      const result = f(x,y);
      write(x,y,result);
      return result;
    }
  }

  return mf;
}

// However, the passed in function is also slightly modified

/* Q9: metacirculator

  in apply(fun, args) --> names = list("a","b",...)
                      --> values = list(1,2,...)
*/

// 2020-2021: revise stream (and memoize stream)

// 2021-2022:

// Question 10: modify list in place does not have a return value --> need to return if required

// Question 15: for array, it might be faster for array operations to use for loop indexing, rather than recursive

// Question 20/21: partial_sums create several instances of streams and add them up everytime --> leading to O(n^2) complexity
