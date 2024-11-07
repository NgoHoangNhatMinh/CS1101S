function diagonal(t) {
    // your answer here
    return make_point(t, t);
}

// Test
draw_points(50)(diagonal);

function unit_square(t) {
    // your answer here
    return t < 1/4 ? make_point(t*4, 0)
        : t < 1/2 ? make_point(1, t*4-1)
        : t < 3/4 ? make_point(-t*4+3, 1)
        : make_point(0, -t*4+4);
}

// Test
draw_points_full_view_proportional(80)(unit_square);
