import React, { useEffect, useRef } from 'react';

/**
 * TechBackground Component
 * Scoped behind middle content sections (z-0, backmost layer)
 * - Soft Warm Blush / Peach Gradient background with subtle radial glow
 * - Floating coral red dots & diamond shapes (◆)
 * - Clean, elegant, no distracting concentric ring lines
 */
export default function TechBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160,
    };

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('resize', resize, { passive: true });

    // Floating Particle Class (Circles & Diamonds)
    class FloatingParticle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + Math.random() * 40;
        
        // 65% Circles (3px - 7px), 35% Diamonds (◆ 4px - 8px)
        const rand = Math.random();
        if (rand < 0.65) {
          this.shape = 'circle';
          this.size = Math.random() < 0.5 ? (Math.random() * 2 + 3) : (Math.random() * 3 + 5);
        } else {
          this.shape = 'diamond';
          this.size = Math.random() * 3 + 4.5;
        }

        this.speedY = -(Math.random() * 0.45 + 0.2);
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.baseAlpha = Math.random() * 0.35 + 0.5; // High vibrant visibility
        this.alpha = this.baseAlpha;
        this.colorType = Math.random() < 0.65 ? 'coral' : 'rose';
        this.swayAngle = Math.random() * Math.PI * 2;
        this.swaySpeed = Math.random() * 0.018 + 0.008;
        this.swayAmplitude = Math.random() * 1.0 + 0.4;
        this.pulseAngle = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.025 + 0.01;
      }

      update() {
        this.swayAngle += this.swaySpeed;
        this.pulseAngle += this.pulseSpeed;

        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.swayAngle) * this.swayAmplitude;

        const pulse = Math.sin(this.pulseAngle);
        this.alpha = Math.max(0.35, Math.min(0.95, this.baseAlpha * (1 + pulse * 0.25)));

        // Subtle gentle mouse repulsion
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * force * 1.8;
          this.y += Math.sin(angle) * force * 1.8;
          this.alpha = Math.min(1.0, this.alpha + force * 0.35);
        }

        if (this.y < -30) {
          this.reset(false);
        }
        if (this.x < -30) this.x = width + 20;
        else if (this.x > width + 30) this.x = -20;
      }

      draw() {
        ctx.save();
        const fillRgba = this.colorType === 'coral' 
          ? `rgba(215, 25, 32, ${this.alpha})` 
          : `rgba(235, 75, 85, ${this.alpha})`;
        ctx.fillStyle = fillRgba;

        if (this.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Draw delicate Diamond shape (rhombus)
          ctx.beginPath();
          ctx.moveTo(this.x, this.y - this.size);
          ctx.lineTo(this.x + this.size * 0.75, this.y);
          ctx.lineTo(this.x, this.y + this.size);
          ctx.lineTo(this.x - this.size * 0.75, this.y);
          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();
      }
    }

    let particles = [];
    const initParticles = () => {
      particles = [];
      const isMobile = width < 768;
      // Rich density so particles are clearly visible throughout
      const count = isMobile ? 36 : Math.min(78, Math.floor(width / 22));
      for (let i = 0; i < count; i++) {
        particles.push(new FloatingParticle());
      }
    };

    resize();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none bg-gradient-to-b from-[#FFF6F3] via-[#FDF1ED] to-[#F9ECE7] dark:from-[#110D10] dark:via-[#161014] dark:to-[#0D090C] transition-colors duration-500"
      aria-hidden="true"
    >
      {/* ─── LAYER 1: Soft Peach Radial Atmosphere Mesh ─── */}
      {/* Top Ambient Radial Glow */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[85vw] h-[85vw] max-w-[1000px] max-h-[1000px] bg-gradient-to-r from-[#FEE6E1]/80 via-[#FEDFD9]/50 to-transparent dark:from-[#44161E]/30 dark:via-transparent rounded-full blur-[130px]" />

      {/* Center Ambient Radial Glow */}
      <div className="absolute top-[52%] left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] max-w-[1100px] max-h-[1100px] bg-gradient-to-r from-[#FEE5E0]/75 via-[#FEDFD9]/45 to-transparent dark:from-[#44161E]/25 dark:via-transparent rounded-full blur-[140px]" />

      {/* Bottom Ambient Radial Glow */}
      <div className="absolute top-[82%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[950px] max-h-[950px] bg-gradient-to-r from-[#FEE6E1]/70 via-[#FEDFD9]/40 to-transparent dark:from-[#44161E]/20 dark:via-transparent rounded-full blur-[130px]" />

      {/* ─── LAYER 2: Floating Circular Dots & Diamond Sparkles Canvas ─── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}




