// Menger Sponge

const unit_cube = cube(silver);

function menger_sponge(shape, n) {
    if (n === 1) {
        return shape;
    } else {
        const sponge = scale(menger_sponge(shape, n - 1), 1/3, 1/3, 1/3);
        return iter(sponge, sponge, 0);
    }
}

function iter(curr_shape, shape, count) {
    if (count > 26) {
        return curr_shape;
    } else if (9 % (count - 13) === 0 || count - 13 === 0) {
        return iter(curr_shape, shape, count + 1);
    } else {
        const x = math_floor(count/9);
        const y = math_floor((count-x*9)/3);
        const z = math_floor((count-x*9-y*3)/1);
        return iter(union(curr_shape, translate(shape, x/3, y/3, z/3)), shape, count + 1);
    }
}

render(menger_sponge(unit_cube, 4));
