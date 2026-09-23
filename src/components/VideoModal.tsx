"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function VideoModal() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const { t } = useLanguage();

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 group cursor-pointer shadow-2xl"
      onClick={togglePlay}
    >
      <div className="aspect-video relative">
        {/* Placeholder if video is not available */}
        <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-500 font-mono text-sm z-0">
          {t.video.placeholder}
        </div>
        
        <video
          ref={videoRef}
          src="/photodata/intro-demo.mp4"
          poster="/photodata/photo_video.jpg"
          className="absolute inset-0 w-full h-full object-cover z-10"
          playsInline
          muted={isMuted}
          onEnded={() => setIsPlaying(false)}
        />
        
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-20" />

        {/* Play/Pause Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <motion.div
            animate={{ scale: isPlaying ? 0.9 : 1, opacity: isPlaying ? 0 : 1 }}
            className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white fill-white" />
            ) : (
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            )}
          </motion.div>
        </div>

        {/* Controls Overlay */}
        <div className="absolute bottom-4 right-4 z-40">
          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white transition-colors"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
