import React from "react";
import { Play } from "lucide-react";

interface VideoTestimonialCardProps {
  name: string;
  role: string;
  onPlay?: () => void;
}

const VideoTestimonialCard: React.FC<VideoTestimonialCardProps> = ({
  name,
  role,
  onPlay,
}) => {
  return (
    <div className="relative border-white/40 w-full  md:w-52 rounded-3xl border border- bg-black shadow-2xl overflow-hidden">
      {/* Video placeholder */}
      <div className="relative h-72 md:h-52 w-full bg-[#1D232A] flex items-center justify-center">
        <button
          onClick={onPlay}
          className="flex h-20 md:h-14 w-20 md:w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition"
        >
          <Play className="h-19 md:h-6 w-9 md:w-6 text-white ml-1" />
        </button>
      </div>

      {/* Info */}
      <div className="px-6 py-4 text-center bg-black">
        <p className="text-2xl md:text-lg font-medium text-white">{name}</p>
        <p className="text-lg md:text-sm text-white/60">{role}</p>
      </div>

      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_65%)]" />
    </div>
  );
};

export default VideoTestimonialCard;