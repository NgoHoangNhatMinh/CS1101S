// TASK 1

function red_rectangle_stream(s) {
    // your solution goes here
    function red_rectangle_image(img) {
        // initiallize the (x, y) coordinates of the blue box
        let max_x = 0;
        let min_x = WIDTH;
        let max_y = 0;
        let min_y = HEIGHT;
        
        // adjust the coordinates of the box to contain only (255, 0, 0) pixels
        for (let y = 0; y < HEIGHT; y = y + 1) {
            for (let x = 0; x < WIDTH; x = x + 1) {
                   if (img[y][x][0] === 255 && img[y][x][1] === 0 && img[y][x][2] === 0) {
                       max_x = math_max(max_x, x);
                       max_y = math_max(max_y, y);
                       min_x = math_min(min_x, x);
                       min_y = math_min(min_y, y);
                   }
            }
        }
        return [[min_y, min_x], [max_y, max_x]];
    }
    return stream_map(red_rectangle_image, s);
}

head(red_rectangle_stream(anomaly_stream));
// should evaluate to: [[141, 191], [159, 209]]

// TASK 2

// Copy your function red_rectangle_stream from TASK 1 here.
function red_rectangle_stream(s) {
    // your solution goes here
    function red_rectangle_image(img) {
        // initiallize the (x, y) coordinates of the blue box
        let max_x = 0;
        let min_x = WIDTH;
        let max_y = 0;
        let min_y = HEIGHT;
        
        // adjust the coordinates of the box to contain only (255, 0, 0) pixels
        for (let y = 0; y < HEIGHT; y = y + 1) {
            for (let x = 0; x < WIDTH; x = x + 1) {
                   if (img[y][x][0] === 255 && img[y][x][1] === 0 && img[y][x][2] === 0) {
                       max_x = math_max(max_x, x);
                       max_y = math_max(max_y, y);
                       min_x = math_min(min_x, x);
                       min_y = math_min(min_y, y);
                   }
            }
        }
        return [[min_y, min_x], [max_y, max_x]];
    }
    return stream_map(red_rectangle_image, s);
}

function stream_combine(f, s1, s2) {
    // your solution goes here
    return pair(f(head(s1), head(s2)), () => stream_combine(f, stream_tail(s1), stream_tail(s2)));
}


// Trim the given image using the given rectangle.
// Returns an image that includes all purely red
// pixels of the given image.

function trim(image, rectangle) {
    const trimmed = [];
    const i_min = head(head(rectangle));
    const j_min = tail(head(rectangle));
    const i_max = head(tail(rectangle));
    const j_max = tail(tail(rectangle));

    for (let i = i_min; i <= i_max; i = i + 1) {
        const new_i = i - i_min;
        trimmed[new_i] = [];
        for (let j = j_min; j <= j_max; j = j + 1) {
            const new_j = j - j_min;
            trimmed[new_i][new_j] = image[i][j];
        }
    }
    return trimmed;
}

// Example:

const focused_stream = stream_combine(
                           trim,
                           anomaly_stream,
                           red_rectangle_stream(anomaly_stream));
head(focused_stream);

// Should return a close-up of the anomaly, a 19x19 image of black,
// red and white pixels.

// Use your solutions of the previous tasks and
// write other functions HERE that might be helpful
// to answer the questions in this task.

/*
Q1: What color it might absorb?
ANS: (write your answer here)
It mostly absorb green and blue color, which form cyan color, as 
red is mostly reflected. (as the first element of the pixel array
is 255, so all the red ligth is reflected)


Q2: What color of laser beam would you use?
ANS: (write your answer here)
Green + blue = cyan.


Q3: Which part of the shield would you target?
ANS: (write your answer here)
The surrounding red part?


Q4: How did you find the answer?
ANS: (answer in at most three sentences how
      you found the color and the target)
The pixel array is mostly [255, 0, 0], which shows that it 
mostly reflects red light and absorb blue and green light.
*/
