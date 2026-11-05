import React, { useEffect, useRef } from 'react';

interface BiomedicalGraphicBackgroundProps {
  isDarkMode: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseX: number;
  baseY: number;
  color: string;
  shape: 'circle' | 'hexagon' | 'cross' | 'ring' | 'dna-node';
  angle: number;
  angularSpeed: number;
}

interface FloatingFigure {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  type: 'helix' | 'molecule' | 'neural-cluster' | 'waveform-ring';
  rotation: number;
  rotationSpeed: number;
  pulsePhase: number;
}

export const BiomedicalGraphicBackground: React.FC<BiomedicalGraphicBackgroundProps> = ({ isDarkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates for interactive particle movement
    let mouse = { x: -1000, y: -1000, radius: 150 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Color palettes for Light and Dark modes
    const colors = isDarkMode
      ? ['#06b6d4', '#818cf8', '#a855f7', '#38bdf8', '#ec4899']
      : ['#0891b2', '#6366f1', '#9333ea', '#0284c7', '#db2777'];

    // Generate floating moving particles
    const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
    const particles: Particle[] = [];
    const shapes: Particle['shape'][] = ['circle', 'hexagon', 'cross', 'ring', 'dna-node'];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.02
      });
    }

    // Generate large distinct floating moving graphic figures
    const figures: FloatingFigure[] = [
      {
        x: width * 0.15,
        y: height * 0.25,
        size: 55,
        vx: 0.25,
        vy: 0.18,
        type: 'helix',
        rotation: 0,
        rotationSpeed: 0.008,
        pulsePhase: 0
      },
      {
        x: width * 0.82,
        y: height * 0.2,
        size: 65,
        vx: -0.2,
        vy: 0.22,
        type: 'molecule',
        rotation: Math.PI / 4,
        rotationSpeed: -0.006,
        pulsePhase: Math.PI / 2
      },
      {
        x: width * 0.88,
        y: height * 0.7,
        size: 50,
        vx: -0.15,
        vy: -0.2,
        type: 'neural-cluster',
        rotation: 0,
        rotationSpeed: 0.009,
        pulsePhase: Math.PI
      },
      {
        x: width * 0.12,
        y: height * 0.75,
        size: 60,
        vx: 0.2,
        vy: -0.18,
        type: 'waveform-ring',
        rotation: 0,
        rotationSpeed: 0.005,
        pulsePhase: (Math.PI * 3) / 2
      }
    ];

    // Traveling ECG Pulse line state
    let ecgProgress = 0;

    // Helper: draw regular polygon / hexagon
    const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number, angle: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI) / 3;
        const px = r * Math.cos(a);
        const py = r * Math.sin(a);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    };

    // Helper: draw cross / plus figure
    const drawCross = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number, angle: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(-r, 0);
      ctx.lineTo(r, 0);
      ctx.moveTo(0, -r);
      ctx.lineTo(0, r);
      ctx.stroke();
      ctx.restore();
    };

    // Helper: draw large graphic figure
    const drawGraphicFigure = (fig: FloatingFigure, time: number) => {
      ctx.save();
      ctx.translate(fig.x, fig.y);
      ctx.rotate(fig.rotation);

      const alpha = isDarkMode ? 0.35 : 0.25;
      const primaryColor = isDarkMode ? 'rgba(6, 182, 212, ' : 'rgba(8, 145, 178, ';
      const secondaryColor = isDarkMode ? 'rgba(168, 85, 247, ' : 'rgba(147, 51, 234, ';

      if (fig.type === 'helix') {
        // Double-helix ladder figure
        const r = fig.size;
        ctx.strokeStyle = primaryColor + alpha + ')';
        ctx.lineWidth = 1.5;
        
        ctx.beginPath();
        for (let i = -r; i <= r; i += 8) {
          const wave1 = Math.sin((i / r) * Math.PI * 2 + time * 2) * 14;
          const wave2 = -wave1;
          
          // Outer strands
          ctx.fillStyle = primaryColor + (alpha + 0.2) + ')';
          ctx.beginPath();
          ctx.arc(i, wave1, 2, 0, Math.PI * 2);
          ctx.arc(i, wave2, 2, 0, Math.PI * 2);
          ctx.fill();

          // Base-pair rungs
          if (Math.abs(i) % 16 === 0) {
            ctx.strokeStyle = secondaryColor + (alpha * 0.8) + ')';
            ctx.beginPath();
            ctx.moveTo(i, wave1);
            ctx.lineTo(i, wave2);
            ctx.stroke();
          }
        }
      } else if (fig.type === 'molecule') {
        // Hexagonal aromatic ring with orbital satellite nodes
        const r = fig.size;
        ctx.strokeStyle = secondaryColor + alpha + ')';
        ctx.lineWidth = 1.5;
        drawHexagon(ctx, 0, 0, r * 0.5, fig.rotation * 0.5);

        // Satellites
        for (let i = 0; i < 6; i++) {
          const a = (i * Math.PI) / 3 + fig.rotation;
          const sx = Math.cos(a) * r * 0.85;
          const sy = Math.sin(a) * r * 0.85;
          
          ctx.strokeStyle = primaryColor + (alpha * 0.7) + ')';
          ctx.beginPath();
          ctx.moveTo(Math.cos(a) * r * 0.5, Math.sin(a) * r * 0.5);
          ctx.lineTo(sx, sy);
          ctx.stroke();

          ctx.fillStyle = i % 2 === 0 ? primaryColor + (alpha + 0.2) + ')' : secondaryColor + (alpha + 0.2) + ')';
          ctx.beginPath();
          ctx.arc(sx, sy, 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (fig.type === 'neural-cluster') {
        // Neural network node cluster
        const r = fig.size * 0.6;
        const nodes = [
          { x: 0, y: 0, r: 4 },
          { x: -r * 0.7, y: -r * 0.6, r: 3 },
          { x: r * 0.8, y: -r * 0.5, r: 3.5 },
          { x: -r * 0.5, y: r * 0.8, r: 3 },
          { x: r * 0.7, y: r * 0.7, r: 3.2 }
        ];

        ctx.lineWidth = 1.2;
        ctx.strokeStyle = primaryColor + (alpha * 0.8) + ')';
        nodes.forEach((n, idx) => {
          nodes.slice(idx + 1).forEach((target) => {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
          });
        });

        nodes.forEach((n) => {
          ctx.fillStyle = secondaryColor + (alpha + 0.3) + ')';
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (fig.type === 'waveform-ring') {
        // High-tech circular telemetry ring with tick marks
        const r = fig.size * 0.7;
        ctx.strokeStyle = primaryColor + alpha + ')';
        ctx.lineWidth = 1.2;

        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, r * 0.4, 0, Math.PI * 2);
        ctx.stroke();

        // 8 radiating ticks
        for (let i = 0; i < 8; i++) {
          const a = (i * Math.PI) / 4;
          ctx.beginPath();
          ctx.moveTo(Math.cos(a) * (r - 4), Math.sin(a) * (r - 4));
          ctx.lineTo(Math.cos(a) * (r + 4), Math.sin(a) * (r + 4));
          ctx.stroke();
        }
      }

      ctx.restore();
    };

    // Main animation loop
    let startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const elapsed = (now - startTime) / 1000;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle moving ECG Pulse Line across lower third
      const ecgY = height * 0.82;
      ctx.lineWidth = 1;
      ctx.strokeStyle = isDarkMode ? 'rgba(6, 182, 212, 0.12)' : 'rgba(8, 145, 178, 0.1)';
      ctx.beginPath();
      ctx.moveTo(0, ecgY);
      for (let x = 0; x < width; x += 10) {
        // Periodic P-Q-R-S-T wave cycle
        const cycle = ((x + ecgProgress) % 360) / 360;
        let dy = 0;
        if (cycle > 0.3 && cycle < 0.35) {
          dy = -Math.sin(((cycle - 0.3) / 0.05) * Math.PI) * 7; // P wave
        } else if (cycle > 0.42 && cycle < 0.44) {
          dy = 5; // Q
        } else if (cycle > 0.44 && cycle < 0.48) {
          dy = -35; // R peak
        } else if (cycle > 0.48 && cycle < 0.5) {
          dy = 12; // S
        } else if (cycle > 0.55 && cycle < 0.65) {
          dy = -Math.sin(((cycle - 0.55) / 0.1) * Math.PI) * 11; // T wave
        }
        ctx.lineTo(x, ecgY + dy);
      }
      ctx.stroke();

      // Laser glowing pulse head for ECG line
      const headX = (ecgProgress * 2.2) % width;
      const gradient = ctx.createRadialGradient(headX, ecgY, 0, headX, ecgY, 35);
      gradient.addColorStop(0, isDarkMode ? 'rgba(6, 182, 212, 0.6)' : 'rgba(8, 145, 178, 0.4)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(headX, ecgY, 35, 0, Math.PI * 2);
      ctx.fill();

      ecgProgress += 0.85;

      // Update & Draw large floating graphic figures
      figures.forEach((fig) => {
        fig.x += fig.vx;
        fig.y += fig.vy;
        fig.rotation += fig.rotationSpeed;
        fig.pulsePhase += 0.02;

        // Bounce gently off borders
        if (fig.x < fig.size || fig.x > width - fig.size) fig.vx *= -1;
        if (fig.y < fig.size || fig.y > height - fig.size) fig.vy *= -1;

        drawGraphicFigure(fig, elapsed);
      });

      // Update & Draw connective lines between nearby particles (Bio-Constellation Network)
      const maxDistance = 110;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (isDarkMode ? 0.2 : 0.12);
            ctx.strokeStyle = isDarkMode
              ? `rgba(56, 189, 248, ${alpha})`
              : `rgba(8, 145, 178, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update & Draw particles with shapes
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.angularSpeed;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Interactive mouse repulsion/reaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const dirX = dx / dist;
          const dirY = dy / dist;
          p.x -= dirX * force * 3;
          p.y -= dirY * force * 3;
        }

        // Draw particle shape
        ctx.fillStyle = p.color;
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1;

        const alpha = isDarkMode ? '0.45' : '0.35';
        ctx.globalAlpha = parseFloat(alpha);

        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.7, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === 'ring') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.stroke();
        } else if (p.shape === 'hexagon') {
          drawHexagon(ctx, p.x, p.y, p.size * 1.3, p.angle);
        } else if (p.shape === 'cross') {
          drawCross(ctx, p.x, p.y, p.size * 1.2, p.angle);
        } else if (p.shape === 'dna-node') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDarkMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 60FPS Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ opacity: isDarkMode ? 0.85 : 0.75 }}
      />

      {/* Floating Animated Graphic SVG Figures for Depth & Visual Richness */}
      <div className="absolute top-20 left-[8%] w-48 h-48 pointer-events-none opacity-20 dark:opacity-25 animate-[spin_60s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-600 dark:text-cyan-400">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 6" />
          <polygon points="50,12 85,32 85,68 50,88 15,68 15,32" fill="none" stroke="currentColor" strokeWidth="0.7" />
          <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="0.6" />
        </svg>
      </div>

      <div className="absolute top-[55%] right-[6%] w-56 h-56 pointer-events-none opacity-15 dark:opacity-20 animate-[spin_80s_linear_infinite_reverse]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-purple-600 dark:text-purple-400">
          <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" />
        </svg>
      </div>
    </div>
  );
};
