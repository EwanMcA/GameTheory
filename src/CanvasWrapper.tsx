import { useRef, useEffect, memo } from "react";

const CanvasWrapper = memo(({ nodes, step }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((n) => {
        ctx.fillStyle = n.nextMove ? "#4f46e5" : "#f87171"; // blue or red
        ctx.beginPath();
        ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(200, 200, 255, 0.3)";
        n.links.forEach((link) => {
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(nodes[link].x, nodes[link].y);
          ctx.stroke();
        });
      });
    };

    draw();
  }, [step, nodes]);

  return (
    <canvas
      ref={canvasRef}
      width={1400}
      height={600}
    />
  );
});

export default CanvasWrapper;
