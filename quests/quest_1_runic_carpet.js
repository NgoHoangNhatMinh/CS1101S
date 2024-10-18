function persian(rune, count) {
    // your answer here
    const top_layer = quarter_turn_left(stackn(count, quarter_turn_right(rune)));
    const center_middle_layer = beside(stack(quarter_turn_right(rune), rune),
                                       stack(quarter_turn_right(quarter_turn_right(rune)), quarter_turn_left(rune)));
    const side_middle_layer = stackn(count-2, rune);
    const middle_layer = quarter_turn_left(stack_frac((count-1)/count, stack_frac(1/(count-1), quarter_turn_right(side_middle_layer), quarter_turn_right(center_middle_layer)), quarter_turn_right(side_middle_layer)));
    const complete_rune = stack_frac((count-1)/count, stack_frac(1/(count-1), top_layer, middle_layer), top_layer);
    
    return complete_rune;
}

// Tests
show(persian(heart, 7));
show(persian(make_cross(rcross), 5));
const paw = from_url("https://i.imgur.com/GJg95B8.png");
show(persian(paw, 5));
