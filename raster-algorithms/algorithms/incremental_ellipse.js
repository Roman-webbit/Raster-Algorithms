function incrementalEllipse(context, xc, yc, rx, ry) {
    let rxSq = rx * rx;
    let rySq = ry * ry;
    let x = 0;
    let y = ry;
    let px = 0;
    let py = 2 * rxSq * y;

    plotEllipsePoints(context, xc, yc, x, y);

    let p1 = rySq - (rxSq * ry) + (0.25 * rxSq);
    while (px < py) {
        x++;
        px += 2 * rySq;
        if (p1 < 0) {
            p1 += rySq + px;
        } else {
            y--;
            py -= 2 * rxSq;
            p1 += rySq + px - py;
        }
        plotEllipsePoints(context, xc, yc, x, y);
    }

    let p2 = (rySq) * ((x + 0.5) * (x + 0.5)) + (rxSq) * ((y - 1) * (y - 1)) - (rxSq * rySq);
    while (y > 0) {
        y--;
        py -= 2 * rxSq;
        if (p2 > 0) {
            p2 += rxSq - py;
        } else {
            x++;
            px += 2 * rySq;
            p2 += rxSq - py + px;
        }
        plotEllipsePoints(context, xc, yc, x, y);
    }
}

function plotEllipsePoints(context, xc, yc, x, y) {
    context.fillRect(xc + x, yc + y, 1, 1);
    context.fillRect(xc - x, yc + y, 1, 1);
    context.fillRect(xc + x, yc - y, 1, 1);
    context.fillRect(xc - x, yc - y, 1, 1);
}
