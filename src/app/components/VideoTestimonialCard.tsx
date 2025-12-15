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
    <div className="relative w-52 rounded-3xl border border-white/40 bg-black shadow-2xl overflow-hidden">
      {/* Video placeholder */}
      <div className="relative h-52 w-full bg-[#1D232A] flex items-center justify-center">
        <button
          onClick={onPlay}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition"
        >
          <Play className="h-6 w-6 text-white ml-1" />
        </button>
      </div>

      {/* Info */}
      <div className="px-6 py-4 text-center bg-black">
        <p className="text-lg font-medium text-white">{name}</p>
        <p className="text-sm text-white/60">{role}</p>
      </div>

      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_65%)]" />
    </div>
  );
};

export default VideoTestimonialCard;