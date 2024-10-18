// Question 1
// feel free to add helper functions!

function fractal(level, transformation, curve) {
    // your answer here
    return level === 1 ? curve : fractal(level - 1, transformation, transformation(curve));
}

function levycize(curve) {
    const f = math_sqrt(2) / 2;
    const scaled_curve = (scale(f, f, 1))(curve);
    return connect_rigidly(
        (rotate_around_origin(0, 0, math_PI / 4))(scaled_curve),
        (translate(0.5, 0.5, 0))
            ((rotate_around_origin(0, 0, -math_PI / 4))(scaled_curve)));
}

// Test
draw_connected_2d(10000)
    (fractal(11, levycize, unit_line));

// Question 2
// copy your fractal function here
function fractal(level, transformation, curve) {
    // your answer here
    return level === 1 ? curve : fractal(level - 1, transformation, transformation(curve));
}

function dragonize(curve) {
    // your answer here
    return put_in_standard_position(connect_ends
                   ((rotate_around_origin(0, 0, -math_PI / 2))(invert(curve)), curve));
}

// Test
draw_connected_2d(10000)
    (fractal(11, dragonize, unit_line));

// Question 3
function kochize(curve) {
    const up_60 = rotate_around_origin(0, 0, math_PI / 3);
    const down_60 = rotate_around_origin(0, 0, - math_PI / 3);
    return put_in_standard_position(
               connect_ends(curve,
                            connect_ends(up_60(curve),
                                         connect_ends(down_60(curve),
                                                      curve))));
}

// copy your fractal function here
function fractal(level, transformation, curve) {
    // your answer here
    return level === 1 ? curve : fractal(level - 1, transformation, transformation(curve));
}

function snowflake(n) {
    // your answer here
    const down_120 = rotate_around_origin(0, 0, -2 * math_PI / 3);
    const curve = fractal(n, kochize, unit_line);
    return connect_ends(curve, connect_ends(down_120(curve), down_120(down_120(curve))));
}

// Test
draw_connected_2d(10000)(snowflake(5));
