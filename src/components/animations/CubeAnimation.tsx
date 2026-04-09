import React, { useRef, useEffect } from "react";

const CubeAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cx = 100, cy = 100, size = 60;
    let animationFrameId: number;

    const project = (x: number, y: number, z: number, ay: number) => {
      const cosY = Math.cos(ay), sinY = Math.sin(ay);
      const x1 = x * cosY + z * sinY;
      const z1 = -x * sinY + z * cosY;
      const scale = 340 / (340 + z1);
      return { x: cx + x1 * scale, y: cy + y * scale, z: z1 };
    };

    const easeInOut = (t: number) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, 200, 200);

      const cycle = 9.0;
      const raw_t = (t % cycle) / cycle;
      const eased = easeInOut(raw_t);
      const ay = eased * Math.PI * 2;

      const raw = [
        [-size, -size, -size],
        [size, -size, -size],
        [size, size, -size],
        [-size, size, -size],
        [-size, -size, size],
        [size, -size, size],
        [size, size, size],
        [-size, size, size],
      ];

      const v = raw.map(([x, y, z]) => project(x, y, z, ay));

      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7],
      ];

      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.setLineDash([]);
      ctx.strokeStyle = "#141413";
      ctx.lineWidth = 1.2;
      ctx.globalAlpha = 1;

      edges.forEach(([a, b]) => {
        ctx.beginPath();
        ctx.moveTo(v[a].x, v[a].y);
        ctx.lineTo(v[b].x, v[b].y);
        ctx.stroke();
      });

      const sp = project(0, 0, 0, ay);
      ctx.beginPath();
      ctx.arc(sp.x, sp.y, 7, 0, Math.PI * 2);
      ctx.fillStyle = "#c0392b";
      ctx.fill();
    };

    const loop = (t: number) => {
      draw(t / 1000);
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width="200"
      height="200"
      className="w-[200px] h-[200px]"
    />
  );
};

export default CubeAnimation;
