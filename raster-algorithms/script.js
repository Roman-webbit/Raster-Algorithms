document.getElementById('draw').addEventListener('click', () => {
    const algorithm = document.getElementById('algorithm').value;
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 2;

    switch (algorithm) {
        case 'bresenham_line':
            context.strokeStyle = 'red';
            bresenhamLine(context, 50, 50, 350, 250);
            break;
        case 'bresenham_circle':
            context.strokeStyle = 'blue';
            bresenhamCircle(context, 200, 150, 100);
            break;
        case 'incremental_ellipse':
            context.strokeStyle = 'green';
            incrementalEllipse(context, 200, 150, 150, 100);
            break;
        case 'jordan_incremental':
            context.strokeStyle = 'orange';
            jordanIncremental(context, 50, 50, 350, 250);
            break;
        case 'dda_line':
            context.strokeStyle = 'purple';
            ddaLine(context, 50, 50, 350, 250);
            break;
        case 'wu_line':
            context.strokeStyle = 'brown';
            wuLine(context, 50, 50, 350, 250);
            break;
    }
});
