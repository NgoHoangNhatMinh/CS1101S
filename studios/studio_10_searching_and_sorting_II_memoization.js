// Question 1

function linear_search(A, v) {
    const len = array_length(A);
    let i = 0;
    while (i < len && A[i] !== v) {
        i = i + 1;
    }
    return (i < len);
}

function make_search(A) {
    return x => linear_search(A, x);
}

const my_array = [3,41,20,1,5,16,4,0,14,6,17,8,4,0,2];
const my_search = make_search(my_array);

my_search(14); // returns true
// many more calls to my_search
// ...
my_search(30); // returns false

function make_optimized_search(A) {
    const mem = [];
    return x => {
        if (is_undefined(mem[x])) {
            mem[x] = linear_search(A, x);
            return mem[x];
        } else {
            return mem[x];
        }  
    };
}
