import React, { useEffect, useRef } from 'react';

/**
 * TechBackground Component
 * Renders an ultra-refined, interactive tech constellation network & blueprint dot-matrix
 * - Crisp, modern tech aesthetic suitable for a high-end software development company
 * - Interactive node connections on hover
 * - Subtle ambient depth glows in DUDI brand red (#D71920)
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

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
    };

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
      initNodes();
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

    // Interactive Tech Node Class
    class TechNode {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + Math.random() * 30;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = -(Math.random() * 0.3 + 0.15);
        this.radius = Math.random() < 0.7 ? (Math.random() * 1.5 + 1.2) : (Math.random() * 2.2 + 2.5);
        this.baseAlpha = Math.random() * 0.25 + 0.25;
        this.pulseAngle = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.pulseAngle += this.pulseSpeed;
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around
        if (this.y < -20) this.reset(false);
        if (this.x < -20) this.x = width + 20;
        else if (this.x > width + 20) this.x = -20;

        // Mouse interaction
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * force * 1.2;
          this.y += Math.sin(angle) * force * 1.2;
        }
      }

      draw() {
        const pulse = Math.sin(this.pulseAngle);
        const currentAlpha = Math.max(0.15, Math.min(0.8, this.baseAlpha + pulse * 0.15));

        ctx.save();
        ctx.fillStyle = `rgba(215, 25, 32, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    let nodes = [];
    const initNodes = () => {
      nodes = [];
      const isMobile = width < 768;
      const count = isMobile ? 32 : Math.min(65, Math.floor(width / 26));
      for (let i = 0; i < count; i++) {
        nodes.push(new TechNode());
      }
    };

    resize();

    // Render loop: Nodes + Connecting Circuit Lines
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const maxConnectDist = width < 768 ? 95 : 125;

      // Draw connecting lines between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const lineAlpha = (1 - dist / maxConnectDist) * 0.16;
            ctx.save();
            ctx.strokeStyle = `rgba(215, 25, 32, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Draw lines to mouse
      if (mouse.x > 0 && mouse.y > 0) {
        for (let i = 0; i < nodes.length; i++) {
          const dx = nodes[i].x - mouse.x;
          const dy = nodes[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const lineAlpha = (1 - dist / mouse.radius) * 0.28;
            ctx.save();
            ctx.strokeStyle = `rgba(215, 25, 32, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Update & draw nodes
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].update();
        nodes[i].draw();
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
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#FAFAFC] dark:bg-[#090A0F] transition-colors duration-500"
      aria-hidden="true"
    >
      {/* Precision Engineering Dot-Matrix Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(215, 25, 32, 0.12) 1px, transparent 0)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient Red Glow Accents */}
      <div className="absolute top-[10%] -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-[#D71920]/6 via-[#EF4444]/3 to-transparent dark:from-[#D71920]/10 dark:via-[#EF4444]/5 dark:to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[45%] -right-32 w-[700px] h-[700px] bg-gradient-to-bl from-[#D71920]/6 via-[#EF4444]/3 to-transparent dark:from-[#D71920]/10 dark:via-[#EF4444]/5 dark:to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[80%] left-1/4 w-[600px] h-[600px] bg-gradient-to-t from-[#D71920]/5 via-transparent to-transparent dark:from-[#D71920]/8 dark:via-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Interactive Circuit Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}




