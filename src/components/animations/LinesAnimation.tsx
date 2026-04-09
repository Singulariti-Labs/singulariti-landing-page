import React, { useRef, useEffect } from "react";

const LinesAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const blockW = 124, blockH = 110, lineSpacing = 8, offsetX = 62;
    const amplitude = 34;
    let animationFrameId: number;

    const drawBlock = (x: number, y: number, color: string) => {
      const cols = Math.floor(blockW / lineSpacing);
      for (let i = 0; i <= cols; i++) {
        const lx = x + i * lineSpacing;
        ctx.beginPath();
        ctx.moveTo(lx, y);
        ctx.lineTo(lx, y + blockH);
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.stroke();
      }
    };

    const draw = (t: number) => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const ease = Math.sin(t * 1.5);

      const b1x = 0;
      const b2x = b1x + offsetX;
      const b3x = b1x + offsetX * 2;

      const dynamicMidY = (H - blockH) / 2;

      drawBlock(b1x, dynamicMidY + ease * amplitude, "#141413");
      drawBlock(b2x, dynamicMidY, "#7A7872");
      drawBlock(b3x, dynamicMidY - ease * amplitude, "#141413");
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
      width={248}
      height={248}
      className="w-[248px] h-[248px]"
    />
  );
};

export default LinesAnimation;