// TASK 1

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function my_first_filter(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let y = 0; y < height; y = y + 1) {
        for (let x = 0; x < width; x = x + 1) {
            dest[y][x][0] = y / height * 255; // red increases down the height
            dest[y][x][1] = x / width * 255; // green increases across the width
            dest[y][x][2] = 255 - (x + y) / (width + height) * 255; // blue decreases down the diagonal
            dest[y][x][3] = 255;                // always 255
        }
    }
}

install_filter(my_first_filter);
set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();

// TASK 2

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function copy(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1) {
        for (let j = 0; j < width; j = j + 1) {
           dest[i][j][0] = src[i][j][0];
           dest[i][j][1] = src[i][j][1];
           dest[i][j][2] = src[i][j][2];
           dest[i][j][3] = src[i][j][3];
        }
    }
}

function crosshair(src, dest) {
    const width = image_width();
    const height = image_height();
    
    // create an list of intervals with blue circles (eg: 25-50; 75-100; ...)
    const circle_intervals = map(x => [25 * (2 * x - 1), 25 * (2 * x)], 
                                enum_list(1, math_ceil(width / 4 / 25) + 1));


    for (let i = 0; i < height; i = i + 1) {
        for (let j = 0; j < width; j = j + 1) {
            // if i or j is at the center, displays red
           dest[i][j][0] = i === height / 2 || j === width / 2 ? 255 : src[i][j][0];
           dest[i][j][1] = src[i][j][1];
           
           // calculate the radius from the center
           // if radius is within the interval of blue circles, then in_intervals === true
           const radius = math_sqrt((i - height / 2) * (i - height / 2) 
                                    + (j - width / 2) * (j - width / 2));
           const in_intervals = accumulate((p, wish) => head(p) <= radius && radius <= tail(p) || wish, 
                                            false, 
                                            circle_intervals);
           
           dest[i][j][2] = in_intervals ? 255 : src[i][j][2];
           dest[i][j][3] = src[i][j][3];
        }
    }
}

install_filter(copy);
install_filter(crosshair);  // use this filter when crosshair function is ready.
set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();

// TASK 3

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function zoom(factor) {
    function zoom_helper(src, dest) {
        const width = image_width();
        const height = image_height();
        
        const x_offset = math_floor(width * (factor - 1) / (2 * factor));
        const y_offset = math_floor(height * (factor - 1) / (2 * factor));
    
        for (let i = 0; i < height; i = i + 1) {
            for (let j = 0; j < width; j = j + 1) {
                // find the coordinates of the magnified upper left corner
                // then offset downward and rightward to the center
                const new_i = math_floor(i / factor) + y_offset;
                const new_j = math_floor(j / factor) + x_offset;
                
                dest[i][j][0] = src[new_i][new_j][0];
                dest[i][j][1] = src[new_i][new_j][1];
                dest[i][j][2] = src[new_i][new_j][2];
                dest[i][j][3] = src[new_i][new_j][3];
            }
        }        
    }
    return zoom_helper;
}


install_filter(zoom(2));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();

// TASK 4

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function flip_vertically(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1) {
        for (let j = 0; j < width; j = j + 1) {
            for (let k = 0; k < 4; k = k + 1) {
                dest[i][j][k] = src[height - 1 - i][j][k];
            }
        }
    }
}

function color_invert(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1){
        for (let j = 0; j < width; j = j + 1){
            for (let c = 0; c < 4; c = c + 1) {
                dest[i][j][c] = c < 3 ? 255 - src[i][j][c] : src[i][j][c];
            }
        }
    }
}


// Copy your solution for Task 3 (zoom) here.
function zoom(factor) {
    function zoom_helper(src, dest) {
        const width = image_width();
        const height = image_height();
        
        // Since we want to focus on the center, we offset the magnified image 
        // to the right and down by these values
        const x_offset = math_floor(width * (factor - 1) / (2 * factor));
        const y_offset = math_floor(height * (factor - 1) / (2 * factor));
    
        for (let i = 0; i < height; i = i + 1) {
            for (let j = 0; j < width; j = j + 1) {
                // find the coordinates of the magnified upper left corner
                // then offset downward and rightward to the center
                const new_i = math_floor(i / factor) + y_offset;
                const new_j = math_floor(j / factor) + x_offset;
                
                dest[i][j][0] = src[new_i][new_j][0];
                dest[i][j][1] = src[new_i][new_j][1];
                dest[i][j][2] = src[new_i][new_j][2];
                dest[i][j][3] = src[new_i][new_j][3];
            }
        }        
    }
    return zoom_helper;
}

function make_image(width, height) {
    const img = [];
    for (let i = 0; i < height; i = i + 1) {
        const row = [];
        img[i] = row;
        for (let j = 0; j < width; j = j + 1) {
            const pixel = [];
            row[j] = pixel;
            for (let z = 0; z < 4; z = z + 1) {
                pixel[z] = 255;
            }
        }
    }
    return img;
}

function stack(filter1, filter2) {
    const temp1 = make_image(WIDTH, HEIGHT);
    const temp2 = make_image(WIDTH, HEIGHT);

    return (src, dest) => {
        const width = image_width();
        const height = image_height();
        const half_height = math_floor(height / 2);

        filter1(src, temp1);
        filter2(src, temp2);

        for (let i = 0; i < half_height; i = i + 1) {
            dest[i] = temp1[i * 2];
            dest[i + half_height] = temp2[i * 2];
        }

        // take last row from temp2, if height is odd
        for (let i = half_height * 2; i < height; i = i + 1) {
            dest[i] = temp2[i];
        }
    };
}

function beside(filter1, filter2) {
    const temp1 = make_image(WIDTH, HEIGHT);
    const temp2 = make_image(WIDTH, HEIGHT);

    return (src, dest) => {
        const width = image_width();
        const height = image_height();
        const half_width = math_floor(width / 2);

        filter1(src, temp1);
        filter2(src, temp2);

        for (let i = 0; i < height; i = i + 1) {
            for (let j = 0; j < half_width; j = j + 1) {
                dest[i][j] = temp1[i][j * 2];
                dest[i][j + half_width] = temp2[i][j * 2];  
                
            // take last column from temp2, if width is odd
            for (let j = half_width * 2; j < width; j = j + 1) {
                dest[i][j] = temp2[i][j];
            }
            }
        }


    };
}

install_filter(stack(beside(flip_vertically, color_invert),
                     beside(copy_image, zoom(2))));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();

// TASK 5

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function flip_vertically(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1) {
        for (let j = 0; j < width; j = j + 1) {
            for (let k = 0; k < 4; k = k + 1) {
                dest[i][j][k] = src[height - 1 - i][j][k];
            }
        }
    }
}

function color_invert(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1){
        for (let j = 0; j < width; j = j + 1){
            for (let c = 0; c < 4; c = c + 1) {
                dest[i][j][c] = c < 3 ? 255 - src[i][j][c] : src[i][j][c];
            }
        }
    }
}

function make_image(width, height) {
    const img = [];
    for (let i = 0; i < height; i = i + 1) {
        const row = [];
        img[i] = row;
        for (let j = 0; j < width; j = j + 1) {
            const pixel = [];
            row[j] = pixel;
            for (let z = 0; z < 4; z = z + 1) {
                pixel[z] = 255;
            }
        }
    }
    return img;
}

function compose(filter1, filter2) {
    // your program goes here
    const temp = make_image(WIDTH, HEIGHT);
    function helper(src, dest) {
        filter1(src, temp);
        return filter2(temp, dest);
    }
    return helper;
}

install_filter(compose( flip_vertically, color_invert));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();
