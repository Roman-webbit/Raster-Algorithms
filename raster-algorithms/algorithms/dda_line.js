function ddaLine(context, x0, y0, x1, y1) {
    let dx = x1 - x0;
    let dy = y1 - y0;
    let steps = Math.max(Math.abs(dx), Math.abs(dy));
    let xIncrement = dx / steps;
    let yIncrement = dy / steps;
    let x = x0;
    let y = y0;

    for (let i = 0; i <= steps; i++) {
        context.fillRect(Math.round(x), Math.round(y), 1, 1);
        x += xIncrement;
        y += yIncrement;
    }
}
