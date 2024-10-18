// Question 1
// s_generator from Mission "Curve Introduction" is predeclared
const s_curve = s_generator(make_point(0, 0));

// drawing S-curve from Mission "Curve Introduction"
draw_connected_2d(200)(s_curve);

function reflect_through_y_axis(curve) {
    return t => make_point(-x_of(curve(t)), y_of(curve(t))); // replace with your answer
}

const reflected_s_curve = reflect_through_y_axis(s_curve);
draw_connected_2d(200)(reflected_s_curve);

// Question 2
// s_generator from Mission "Curve Introduction" is predeclared
const s_curve = s_generator(make_point(0, 0));

function reflect_through_y_axis(curve) {
    return t => make_point(-x_of(curve(t)), y_of(curve(t))); // replace by your answer to Question 1
}

const reflected_s_curve = reflect_through_y_axis(s_curve);

function close(curve) {
    // replace by your answer
    return connect_ends(curve, t => curve(1-t));
}

draw_connected_2d(200)
   (connect_ends(close(s_curve), reflected_s_curve));
