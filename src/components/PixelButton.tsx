import React from 'react';

interface PixelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  active?: boolean;
  className?: string;
}

export function PixelButton({ 
  children, 
  onClick, 
  variant = 'primary',
  active = false,
  className = ''
}: PixelButtonProps) {
  const variantStyles = {
    primary: 'bg-primary text-primary-foreground hover:opacity-80 border-primary',
    secondary: 'bg-secondary text-secondary-foreground hover:opacity-80 border-secondary',
    accent: 'bg-accent text-accent-foreground hover:opacity-80 border-accent',
  };

  const activeStyles = active 
    ? 'shadow-[0_0_20px_rgba(255,0,110,0.8)]' 
    : '';

  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 
        border-4 
        transition-all 
        duration-100 
        active:translate-y-1
        pixel-corners
        ${variantStyles[variant]}
        ${activeStyles}
        ${className}
      `}
      style={{
        boxShadow: active 
          ? '0 0 20px rgba(255, 0, 110, 0.8), inset 0 -4px 0 rgba(0, 0, 0, 0.3)'
          : 'inset 0 -4px 0 rgba(0, 0, 0, 0.3)',
      }}
    >
      {children}
    </button>
  );
}
