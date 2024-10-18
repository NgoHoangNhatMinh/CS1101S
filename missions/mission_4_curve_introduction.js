// Question 1
// Part 1
// your answer here (keep your answer commented)
// the type of unit_line_at is Number -> Curve

// Part 2
function vertical_line(pt, length) {
    // your answer here
    return t => make_point(x_of(pt), t*length + y_of(pt));
}

// Part 3
// your answer here (keep your answer commented)
// the type of vertical_line is (Point, Number) -> Curve

// Part 4
// your answer here
const point = make_point(0.5, 0.5-0.5/2);
draw_connected_2d(100)(vertical_line(point, 0.5));

// Question 2
function three_quarters(pt) {
    // your answer here
    return t => make_point(math_cos(3/2 * math_PI * t) + x_of(pt),
                            math_sin(3/2 * math_PI * t) + y_of(pt));
}

// Test
draw_connected_2d(200)(three_quarters(make_point(0.5, 0.25)));

// Question 3
function s_generator(pt) {
    // your answer here
    return t => t < 0.5 ? make_point(math_cos(3 * math_PI * t) + x_of(pt),
                            math_sin(3 * math_PI * t) + y_of(pt) + 1)
                        : make_point(math_cos(3 * math_PI * t) + x_of(pt),
                            -(math_sin(3 * math_PI * t)) + y_of(pt) - 1);
}

// Test
draw_connected_2d(200)(s_generator(make_point(0.5, 0.25)));
