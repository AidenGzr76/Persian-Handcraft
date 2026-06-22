import React, { useState, useRef } from "react";
import { Play, Heart, MessageCircle, ShoppingBag, Eye, X, Volume2, VolumeX, Sparkles } from "lucide-react";
import { VideoItem, Product } from "../types";

interface HandicraftVideosProps {
  videos: VideoItem[];
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export default function HandicraftVideos({
  videos,
  products,
  onSelectProduct
}: HandicraftVideosProps) {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [videoLikes, setVideoLikes] = useState<Record<string, number>>({});
  const [isMuted, setIsMuted] = useState(true);
  const videoPlayerRef = useRef<HTMLVideoElement | null>(null);

  const handleLikeVideo = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setVideoLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleOpenPlayer = (video: VideoItem) => {
    setActiveVideo(video);
  };

  const handleClosePlayer = () => {
    setActiveVideo(null);
  };

  const toggleMute = () => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.muted = !videoPlayerRef.current.muted;
      setIsMuted(videoPlayerRef.current.muted);
    }
  };

  return (
    <section id="videos-feed" className="py-8 bg-white border-y border-gray-100" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 text-right">
          <div>
            <span className="text-xs font-bold text-[#009DA0] tracking-wider uppercase flex items-center gap-1.5 justify-end">
              <Sparkles size={14} className="animate-pulse text-amber-500" />
              کوییک ویدیو آراسته
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-gray-900 mt-1">
              مراحل خلق آثار هنری به روایت تصویر
            </h3>
            <p className="text-xs text-gray-400 font-light mt-1">
              ویدیوی کوتاه از نحوه ساخت، جزییات دکوراسیون و غرفه‌داران بومی
            </p>
          </div>
        </div>

        {/* Video Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {videos.map((video) => {
            const likedAmount = video.likes + (videoLikes[video.id] || 0);
            const linkedProduct = products.find((p) => p.id === video.productId);

            return (
              <div
                key={video.id}
                onClick={() => handleOpenPlayer(video)}
                className="relative rounded-xl overflow-hidden aspect-[9/16] bg-gray-900 transition-all duration-300 group cursor-pointer"
              >
                {/* Thumbnail Layer */}
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />

                {/* Dark Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-black/40 z-10" />

                {/* Status Indicator / Play button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg group-hover:bg-[#009DA0]/80">
                    <Play size={24} className="fill-white translate-x-1" />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-4 z-20 text-right flex flex-col justify-end h-1/2">
                  
                  {/* Shop & Artisans */}
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={video.shopAvatar}
                      alt={video.shopName}
                      referrerPolicy="no-referrer"
                      className="h-7 w-7 rounded-full object-cover border border-white/20"
                    />
                    <span className="text-xs font-bold text-white shadow-sm">
                      غرفه {video.shopName}
                    </span>
                  </div>

                  {/* Title of the short */}
                  <h4 className="text-xs sm:text-sm font-black text-white leading-relaxed mb-3 line-clamp-2">
                    {video.title}
                  </h4>

                  {/* Intersecting Product Sticker */}
                  {linkedProduct && (
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(linkedProduct);
                      }}
                      className="mt-1 bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/10 hover:bg-white/20 transition-all flex items-center gap-2"
                    >
                      <img
                        src={linkedProduct.imageUrl}
                        alt={linkedProduct.title}
                        referrerPolicy="no-referrer"
                        className="h-10 w-10 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-bold text-white line-clamp-1">
                          {linkedProduct.title}
                        </p>
                        <p className="text-teal-300 text-[10px] font-semibold">
                          مشاهده و خرید اثر 🛍️
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Feedback Action Row */}
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                    <button
                      onClick={(e) => handleLikeVideo(video.id, e)}
                      className="flex items-center gap-1.5 text-white/90 hover:text-red-500 transition-colors focus:outline-none cursor-pointer"
                    >
                      <Heart size={14} className={videoLikes[video.id] ? "fill-red-500 text-red-500" : ""} />
                      <span className="text-[10px] font-bold">{likedAmount.toLocaleString("fa-IR")} پسند</span>
                    </button>

                    <span className="text-[10px] font-semibold text-slate-300 flex items-center gap-1">
                      <Eye size={12} />
                      {(likedAmount * 4).toLocaleString("fa-IR")} بازدید
                    </span>
                  </div>
                </div>

                {/* Live video symbol */}
                <span className="absolute top-4 right-4 bg-red-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 z-20 select-none">
                  <span className="h-1.5 w-1.5 bg-white rounded-full animate-ping"></span>
                  کارگاه زنده
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Vertical Video Shorts Overlay Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-0 sm:p-4">
          <div className="relative w-full max-w-md h-full sm:h-[85vh] sm:rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between">
            
            {/* Top Close Bar */}
            <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-10 flex items-center justify-between" dir="rtl">
              <div className="flex items-center gap-2">
                <img
                  src={activeVideo.shopAvatar}
                  alt={activeVideo.shopName}
                  referrerPolicy="no-referrer"
                  className="h-8 w-8 rounded-full border border-[#009DA0]"
                />
                <span className="text-white text-xs font-semibold">غرفه {activeVideo.shopName}</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <button
                  onClick={handleClosePlayer}
                  className="p-1.5 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Main Video Body Frame */}
            <div className="flex-1 flex items-center justify-center bg-black relative">
              <video
                ref={videoPlayerRef}
                src={activeVideo.videoUrl}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Floating Info Frame */}
            <div className="bg-gradient-to-t from-black via-black/85 to-transparent p-6 z-10 text-right" dir="rtl">
              <h4 className="text-white text-sm font-bold leading-relaxed mb-4">
                {activeVideo.title}
              </h4>

              {/* Connected product direct shelf option */}
              {(() => {
                const lp = products.find((p) => p.id === activeVideo.productId);
                if (!lp) return null;
                return (
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 hover:bg-white/15 transition-all duration-300 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={lp.imageUrl}
                        alt={lp.title}
                        referrerPolicy="no-referrer"
                        className="h-10 w-10 rounded-xl object-cover"
                      />
                      <div>
                        <h5 className="text-white text-xs font-bold line-clamp-1 max-w-[170px]">{lp.title}</h5>
                        <p className="text-emerald-400 text-xs font-semibold mt-0.5">
                          {lp.price.toLocaleString("fa-IR")} تومان
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onSelectProduct(lp);
                        handleClosePlayer();
                      }}
                      className="bg-[#009DA0] hover:bg-teal-500 text-white text-[10px] font-black px-4 py-2.5 rounded-xl shadow-lg transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <ShoppingBag size={12} />
                      <span>خرید سریع اثر</span>
                    </button>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
