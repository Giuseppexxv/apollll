/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';

interface TrailerPlayerProps {
  url: string;
  title: string;
}

export const TrailerPlayer: React.FC<TrailerPlayerProps> = ({ url, title }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Add enablejsapi=1 to the URL to allow programmatic control
  const trailerUrl = `${url}${url.includes('?') ? '&' : '?'}enablejsapi=1`;

  // Intersection observer removed to disable autoplay
  useEffect(() => {
    // No-op: Autoplay disabled as per request
  }, []);

  useEffect(() => {
    // No-op: Autoplay disabled as per request
  }, [isVisible]);

  return (
    <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black">
      <iframe 
        ref={iframeRef}
        width="100%" 
        height="100%" 
        src={trailerUrl} 
        title={title}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>
  );
};
