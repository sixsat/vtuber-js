export default function drawGreenPoints(ctx, points) {
  for (const point of points) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = 'green';
    ctx.fill();
  }
}
