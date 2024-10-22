/*

Julia Set

You can uncomment each block below to get super cool shapes!!!
Orrrrr, you can tinker with the ca, cb values and see what you get

If the rendering is too slow, I suggest either lowering the 
resolution (but don't go below 360) or the convergence_limit.
You can also zoom in the image by increasing magnification. 

*/

const resolution = 600;
const magnification = 3.2;

// UNCOMMENT EACH BLOCK HERE

const ca = -0.4; 
const cb = 0.6;
const convergence_limit = 200;

// const ca = -0.8; 
// const cb = 0.156;
// const convergence_limit = 200;

// const ca = 0.285;
// const cb = 0.01;
// const convergence_limit = 150;

// const ca = -0.7269;
// const cb = 0.1889;
// const convergence_limit = 200;

/*

Some other ca, cb values you can try
(ca, cb)
(0.285, 0)
(0.45, 0.1428)
(-0.835, -0.2321)
(-0.7269, 0.1889)
(0.8, 0)
(0.35, 0.35)
(0.4, 0.4)
(-0.70176, -0.3842)

*/

function julia(t) {
    const a = ((t * resolution * resolution) % resolution) / resolution * magnification - magnification / 2;
    const b = t * magnification - magnification / 2;
    
    const convergence_n = converge(a, b, ca, cb, 0, convergence_limit);
    
    const brightness = convergence_n === convergence_limit + 1 ? 0 : 256 - convergence_n / convergence_limit * 256;

    return make_color_point(a, b, brightness, brightness, brightness);
}

function converge(a, b, ca, cb, count, n) {
    const aa = a * a - b * b;
    const bb = 2 * a * b;
    if (count > n) {
        return count;
    } else if (aa > 2 || bb > 2) {
        return count;
    } else {
        return converge(aa + ca, bb + cb, ca, cb, count + 1, n);
    }
} 

draw_points_full_view(resolution * resolution)(julia);
