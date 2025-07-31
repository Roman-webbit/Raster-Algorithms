function bresenhamCircle(context, xc, yc, r) {
    let x = 0;
    let y = r;
    let d = 3 - 2 * r;

    while (y >= x) {
        context.fillRect(xc + x, yc + y, 1, 1);
        context.fillRect(xc - x, yc + y, 1, 1);
        context.fillRect(xc + x, yc - y, 1, 1);
        context.fillRect(xc - x, yc - y, 1, 1);
        context.fillRect(xc + y, yc + x, 1, 1);
        context.fillRect(xc - y, yc + x, 1, 1);
        context.fillRect(xc + y, yc - x, 1, 1);
        context.fillRect(xc - y, yc - x, 1, 1);
        if (d < 0) {
            d = d + 4 * x + 6;
        } else {
            d = d + 4 * (x - y) + 10;
            y--;
        }
        x++;
    }
}
