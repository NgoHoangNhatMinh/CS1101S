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

// Question 2

function bubblesort_list(L) {
    // Your solution here.
    const len = length(L);
    
    for (let i = len - 1; i >= 1; i = i - 1) {
        let curr = L;
        let next = tail(L); 
        for (let j = 0; j < i; j = j + 1) {
            if (head(curr) > head(next)) {
                const a = head(curr);
                const b = head(next);
                set_head(next, a);
                set_head(curr, b);
                
                curr = next;
                next = tail(next);
            } else {
                curr = next;
                next = tail(next);
            }
        }
    }
}


const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL; // should show [1, [2, [3, [4, [5, null]]]]]
