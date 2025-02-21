'use client';
import { useState } from 'react';

export default function VideoBackground({ children }: { children: React.ReactNode }) {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-black">
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 h-full w-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source src="/mainframe.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black" />
      )}
      <div className="fixed inset-0 bg-black/50" />
      <div className="relative">{children}</div>
    </div>
  );
}