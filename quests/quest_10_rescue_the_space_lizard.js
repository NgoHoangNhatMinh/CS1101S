// TASK 1

function max_flies_to_eat(tile_flies) {

    // *** Your answer here. ***
    const ROW = array_length(tile_flies);
    const COL = array_length(tile_flies[0]);
    
    function helper(row, col) {
        if (row < 0 || row >= ROW || col < 0 || col >= COL) {
            return 0;
        } else {
            // assuming the max values have been calculated for the 3 tiles 
            // below the current tile, add the max tile to the current tile
            return tile_flies[row][col] 
            + math_max(helper(row + 1, col - 1),
                        helper(row + 1, col),
                        helper(row + 1, col + 1));
        }
    }
    
    let max_flies = 0;
    
    // loop through the first row to find the max tile
    for (let c = 0; c < COL; c = c + 1) {
        max_flies = math_max(max_flies, helper(0, c));
    }
    
    return max_flies;
    
}

// TEST:
const tile_flies = [[3, 1, 7, 4, 2],
                    [2, 1, 3, 1, 1],
                    [1, 2, 2, 1, 8],
                    [2, 2, 1, 5, 3],
                    [2, 1, 4, 4, 4],
                    [5, 7, 2, 5, 1]];

max_flies_to_eat(tile_flies); // Expected result: 32

// TASK 2

let mem = [];

function read(n, k) {
    return mem[n] === undefined
           ? undefined
           : mem[n][k];
}

function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}

function memo_max_flies_to_eat(tile_flies) {
    mem = [];

    // *** Your answer here. ***
    const ROW = array_length(tile_flies);
    const COL = array_length(tile_flies[0]);
    
    function helper(row, col) {
        if (row < 0 || row >= ROW || col < 0 || col >= COL) {
            return 0;
        } else if (read(row, col) !== undefined) {
            return read(row, col);
        } else {
            // assuming the max values have been calculated for the 3 tiles 
            // below the current tile, add the max tile to the current tile
            const result = tile_flies[row][col] 
            + math_max(helper(row + 1, col - 1),
                        helper(row + 1, col),
                        helper(row + 1, col + 1));
            write(row, col, result);
            return result;
        }
    }  
    
    let max_flies = 0;
    
    // loop through the first row to find the max tile
    for (let c = 0; c < COL; c = c + 1) {
        max_flies = math_max(max_flies, helper(0, c));
    }
    
    return max_flies;
}

// TEST:
// const tile_flies = [[3, 1, 7, 4, 2],
//                     [2, 1, 3, 1, 1],
//                     [1, 2, 2, 1, 8],
//                     [2, 2, 1, 5, 3],
//                     [2, 1, 4, 4, 4],
//                     [5, 7, 2, 5, 1]];
//
// memo_max_flies_to_eat(tile_flies); // Expected result: 32
