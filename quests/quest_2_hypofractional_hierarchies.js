// Task 1

import { repeat_pattern } from 'rune';
import {stack, beside} from 'rune';

// your helper functions, if needed, go here

function sierpinski(shape) {
    // your program goes here
    return scale(union(union(union(translate(shape, -1/2, -1/2, -1/2),
                 translate(shape, -1/2, 1/2, -1/2)),
                 union(translate(shape, 1/2, -1/2, -1/2),
                 translate(shape, 1/2, 1/2, -1/2))),
                 translate(shape, 0, 0, 1/2)), 1/2, 1/2, 1/2);
}

function hypofractional(n, shape) {
    // your program goes here
    return repeat_pattern(n, sierpinski, shape);
}

// Testing

//render(sierpinski(unit_pyramid));
//render(sierpinski(unit_cylinder));
//render(hypofractional(3, unit_cube));
render(hypofractional(5, unit_pyramid));
