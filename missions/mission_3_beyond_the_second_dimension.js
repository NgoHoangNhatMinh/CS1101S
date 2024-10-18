// Question 1:

function mosaic(r1, r2, r3, r4) {
    // your answer here
    return beside(stack(r4, r3), stack(r1, r2));
}

function steps(r1, r2, r3, r4) {
    return mosaic(r1, scale_vertical(r2, 3/4), scale_vertical(r3, 1/2), scale_vertical(r4, 1/4));
}

render(steps(unit_cube, unit_sphere, unit_pyramid, unit_cylinder));


// Question 2:

function cone(n, r) {
    return rec(n, n, r);
}

function rec(n, counter, r) {
    return counter === 1 ? r :
        overlay_frac(1/counter, 
                    scale_horizontal(r, (n-counter+1)/n), 
                    rec(n, counter-1, r));
}

render(cone(4, unit_cylinder));
