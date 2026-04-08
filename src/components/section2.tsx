import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Section2: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        // Increase resolution for crisper noise/blur
        canvas.width = parent.offsetWidth * window.devicePixelRatio;
        canvas.height = parent.offsetHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const noiseCanvas = document.createElement("canvas");
    const noiseCtx = noiseCanvas.getContext("2d");
    if (noiseCtx) {
      noiseCanvas.width = 400;
      noiseCanvas.height = 400;
      const id = noiseCtx.createImageData(400, 400);
      const d = id.data;
      for (let i = 0; i < d.length; i += 4) {
        d[i] = 0;
        d[i + 1] = 0;
        d[i + 2] = 0;
        d[i + 3] = Math.random() < 0.25 ? Math.floor(Math.random() * 55 + 10) : 0;
      }
      noiseCtx.putImageData(id, 0, 0);
    }

    const draw = (t: number) => {
      const W = canvas.width / window.devicePixelRatio;
      const H = canvas.height / window.devicePixelRatio;
      ctx.clearRect(0, 0, W, H);

      const s = t * 0.00055;
      const waveX = Math.sin(s) * 0.5;
      const waveY = Math.cos(s * 0.8) * 0.06;

      ctx.save();
      if (typeof ctx.filter === 'string') {
        ctx.filter = "blur(44px)";
      }

      ctx.beginPath();
      // Wave logic contained within the canvas
      ctx.moveTo(-100, -100);
      ctx.lineTo(W + 100, -100);
      ctx.lineTo(W + 100, H * (1.1 + waveY));

      ctx.bezierCurveTo(
        W * (0.75 + waveX * 0.3),
        H * (0.35 + waveY),
        W * (0.25 + waveX * 0.3),
        H * (1.25 + waveY),
        -100,
        H * (1.0 + waveY)
      );

      ctx.closePath();
      ctx.fillStyle = "#141413";
      ctx.fill();

      ctx.restore();

      const pattern = ctx.createPattern(noiseCanvas, "repeat");
      if (pattern) {
        ctx.fillStyle = pattern;
        ctx.globalAlpha = 0.3;
        ctx.fillRect(0, 0, W, H);
        ctx.globalAlpha = 1;
      }
    };

    const loop = (t: number) => {
      draw(t);
      animationFrameId = requestAnimationFrame(loop);
    };
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full mt-32 pt-10 pb-10 bg-transparent flex items-center justify-center overflow-visible">
      <div className="relative w-full h-[360px] flex items-center justify-center rounded-[40px] overflow-hidden group z-10">
        {/* Animated Background Canvas Container */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full px-8 md:px-24 pointer-events-none">
          <motion.p
            className="text-[#F0EEE6] font-darker font-semibold text-[62px] leading-[1.05] text-center tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            “ Everyone will have there own personal general assistant, as we have personal phones and computers today ”
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
