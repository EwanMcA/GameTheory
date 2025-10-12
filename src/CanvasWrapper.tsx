import { useRef, useEffect } from "react";

const CanvasWrapper = ({ nodes, links }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // links
      ctx.strokeStyle = "rgba(200, 200, 255, 0.3)";
      links.forEach((link) => {
        const a = nodes[link.source];
        const b = nodes[link.target];
        if (!a || !b) return;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });

      // nodes
      ctx.fillStyle = "#4f46e5";
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, [nodes, links]);

  return (
    <canvas
      ref={canvasRef}
      width={1200}
      height={600}
    />
  );
}

export default CanvasWrapper;
