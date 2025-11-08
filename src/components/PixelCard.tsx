import React from 'react';

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  glitch?: boolean;
}

export function PixelCard({ children, className = '', glitch = false }: PixelCardProps) {
  return (
    <div
      className={`
        bg-card 
        text-card-foreground 
        border-4 
        border-foreground 
        p-6 
        pixel-corners
        ${glitch ? 'hover:animate-[glitch_0.3s_ease-in-out]' : ''}
        ${className}
      `}
      style={{
        boxShadow: '8px 8px 0 rgba(0, 255, 65, 0.3)',
      }}
    >
      {children}
    </div>
  );
}
