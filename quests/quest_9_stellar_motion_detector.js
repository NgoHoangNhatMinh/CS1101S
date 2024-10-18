// TASK 1

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

// Any helper functions and constants go here.

function stellar_motion_detector(src, dest) {
    const width = image_width();
    const height = image_height();
    
    // initiallize the (x, y) coordinates of the blue box
    let max_x = 0;
    let min_x = width;
    let max_y = 0;
    let min_y = height;
    
    // adjust the coordinates of the box to contain only reddish pixels
    // reddish ~ r > 250; g, b, < 110 (can adjust the rgb limit to capture more/less reddish obj)
    for (let y = 0; y < height; y = y + 1) {
        for (let x = 0; x < width; x = x + 1) {
               if (src[y][x][0] > 250 && src[y][x][1] < 110 && src[y][x][2] < 110) {
                   max_x = math_max(max_x, x);
                   max_y = math_max(max_y, y);
                   min_x = math_min(min_x, x);
                   min_y = math_min(min_y, y);
               }
        }
    }
    
    // calculate the square coordinate for the box
    const side = math_max(max_x - min_x, max_y - min_y) + 20;
    max_x = math_floor((max_x + min_x + side) / 2);
    min_x = max_x - side;
    max_y = math_floor((max_y + min_y + side) / 2);
    min_y = max_y - side;

    // if pixel within the blue box, increase max blue color
    for (let y = 0; y < height; y = y + 1) {
        for (let x = 0; x < width; x = x + 1) {
            dest[y][x][0] = src[y][x][0];
            dest[y][x][1] = src[y][x][1];
            dest[y][x][2] = (min_y < y && y < max_y)
                            && (min_x < x && x < max_x) ? 255 : src[y][x][2];
            dest[y][x][3] = 255;                // always 255
        }
    }
}

install_filter(stellar_motion_detector);

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();
