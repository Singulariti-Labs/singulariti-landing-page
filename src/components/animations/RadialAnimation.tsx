import React, { useRef, useEffect } from "react";

const RadialAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cx = 100, cy = 100;
    const orbitR = 32;
    const circleR = 34;
    const totalLines = 28;
    const outerR = 95;
    const gap = 4;
    let animationFrameId: number;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, 200, 200);

      const angle = t * 0.75;
      const bx = cx + Math.cos(angle) * orbitR;
      const by = cy + Math.sin(angle) * orbitR;

      for (let i = 0; i < totalLines; i++) {
        const a = (i / totalLines) * Math.PI * 2 - Math.PI / 2;
        const dx = Math.cos(a);
        const dy = Math.sin(a);

        const ex = cx + dx * outerR;
        const ey = cy + dy * outerR;

        const toCx = bx - ex;
        const toCy = by - ey;
        const dist = Math.sqrt(toCx * toCx + toCy * toCy);

        if (dist < circleR + gap) continue;

        const ndx = toCx / dist;
        const ndy = toCy / dist;

        const sx = ex + ndx * (dist - circleR - gap);
        const sy = ey + ndy * (dist - circleR - gap);

        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = "#141413";
        ctx.lineWidth = 2.2;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(bx, by, circleR, 0, Math.PI * 2);
      ctx.fillStyle = "#141413";
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

export default RadialAnimation;
