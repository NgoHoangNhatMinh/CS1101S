// Question 1:

//The function mirror shows a rune next to its mirror image.

function mirror(rune) {
    return beside(rune, flip_horiz(rune));
}


/*The function more_love takes a rune as
argument and returns a rune that shows
it next to a red heart.*/


function more_love(rune) {
    return beside(rune, red(heart));
}

show(more_love(mirror(sail)));


// Question 2:

function mosaic(r1, r2, r3, r4) {
    // your answer here
    return beside(stack(r4, r3), stack(r1, r2));
}

// Test
show(mosaic(rcross, sail, corner, nova));


// Question 3:

function mosaic(r1, r2, r3, r4) {
    // your answer from the previous question
    return beside(stack(r4, r3), stack(r1, r2));
}

function upside_down_mosaic(r1, r2, r3, r4) {
    // your answer here
    return quarter_turn_right(quarter_turn_right(mosaic(r1, r2, r3, r4)));
}

// Test
show(upside_down_mosaic(rcross, sail, corner, nova));


// Question 4:

function mosaic(r1, r2, r3, r4) {
    // your answer from a previous question
    return beside(stack(r4, r3), stack(r1, r2));
}

function transform_mosaic(r1, r2, r3, r4, transform) {
    // your answer here
    return transform(mosaic(r1, r2, r3, r4));
}

// Test
show(transform_mosaic(rcross, sail, corner, nova, make_cross));
