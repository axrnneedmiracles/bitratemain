'use client';

import React from 'react';
import { cn } from '@/lib/utils';

type GlitchTextProps = {
  children: React.ReactNode;
  className?: string;
};

const GlitchText: React.FC<GlitchTextProps> = ({ children, className }) => {
  const text = typeof children === 'string' ? children : '';
  return (
    <div className={cn('glitch', className)} data-text={text}>
      {text}
    </div>
  );
};

export default GlitchText;
