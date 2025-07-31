function wuLine(context, x0, y0, x1, y1) {
    let steep = Math.abs(y1 - y0) > Math.abs(x1 - x0);
    if (steep) {
        [x0, y0] = [y0, x0];
        [x1, y1] = [y1, x1];
    }
    if (x0 > x1) {
        [x0, x1] = [x1, x0];
        [y0, y1] = [y1, y0];
    }

    let dx = x1 - x0;
    let dy = y1 - y0;
    let gradient = dy / dx;
    let xEnd = Math.round(x0);
    let yEnd = y0 + gradient * (xEnd - x0);
    let xPixel1 = xEnd;
    let yPixel1 = Math.floor(yEnd);

    if (steep) {
        plot(context, yPixel1, xPixel1, 1 - (yEnd - yPixel1));
        plot(context, yPixel1 + 1, xPixel1, yEnd - yPixel1);
    } else {
        plot(context, xPixel1, yPixel1, 1 - (yEnd - yPixel1));
        plot(context, xPixel1, yPixel1 + 1, yEnd - yPixel1);
    }

    let intery = yEnd + gradient;

    xEnd = Math.round(x1);
    yEnd = y1 + gradient * (xEnd - x1);
    let xPixel2 = xEnd;
    let yPixel2 = Math.floor(yEnd);

    if (steep) {
        plot(context, yPixel2, xPixel2, 1 - (yEnd - yPixel2));
        plot(context, yPixel2 + 1, xPixel2, yEnd - yPixel2);
    } else {
        plot(context, xPixel2, yPixel2, 1 - (yEnd - yPixel2));
        plot(context, xPixel2, yPixel2 + 1, yEnd - yPixel2);
    }

    if (steep) {
        for (let x = xPixel1 + 1; x < xPixel2; x++) {
            plot(context, Math.floor(intery), x, 1 - (intery - Math.floor(intery)));
            plot(context, Math.floor(intery) + 1, x, intery - Math.floor(intery));
            intery += gradient;
        }
    } else {
        for (let x = xPixel1 + 1; x < xPixel2; x++) {
            plot(context, x, Math.floor(intery), 1 - (intery - Math.floor(intery)));
            plot(context, x, Math.floor(intery) + 1, intery - Math.floor(intery));
            intery += gradient;
        }
    }
}

function plot(context, x, y, brightness) {
    let color = Math.floor(brightness * 255);
    context.fillStyle = `rgb(${color},${color},${color})`;
    context.fillRect(x, y, 1, 1);
}
