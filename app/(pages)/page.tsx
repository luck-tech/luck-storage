"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/app/components/ui/button";

export default function Component() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = ["/video1.mp4", "/video2.mp4", "/video3.mp4"];

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleVideoEnd = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    videoElement.addEventListener("ended", handleVideoEnd);

    return () => {
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 min-h-full min-w-full object-cover"
        src={videos[currentVideoIndex]}
        autoPlay
        muted
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl text-black mb-8">luck storage</h1>
        <div className="flex space-x-4">
          {[0, 1, 2].map((index) => (
            <Button
              key={index}
              className={`px-6 py-2 text-black transition-colors
                ${
                  index === currentVideoIndex
                    ? "bg-custom-button-hover"
                    : "bg-custom-button hover:bg-custom-button-hover"
                }`}
              onMouseEnter={() => setCurrentVideoIndex(index)}
            >
              Button {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
