'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Preloader() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => setShow(false), 500); // Corresponds to fade-out duration
    }, 1000); // Show for 1 second

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500',
        fade ? 'opacity-0' : 'opacity-100'
      )}
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="loader"></div>
    </div>
  );
}
