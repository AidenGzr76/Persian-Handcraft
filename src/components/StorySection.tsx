import { useState, useEffect } from "react";
import { X, ChevronRight, ChevronLeft, ArrowUp, Award } from "lucide-react";
import { Story, Product } from "../types";

interface StorySectionProps {
  stories: Story[];
  onSelectProduct: (product: Product) => void;
  products: Product[];
}

export default function StorySection({
  stories,
  onSelectProduct,
  products
}: StorySectionProps) {
  const [activeStoryIdx, setActiveStoryIdx] = useState<number | null>(null);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-progress slide effect
  useEffect(() => {
    if (activeStoryIdx === null) return;

    setProgress(0);
    const intervalTime = 100; // Tick every 100ms
    const totalDuration = 5000; // 5 seconds per slide
    const increment = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [activeStoryIdx, activeSlideIdx]);

  const handleOpenStory = (index: number) => {
    setActiveStoryIdx(index);
    setActiveSlideIdx(0);
    setProgress(0);
  };

  const handleCloseStory = () => {
    setActiveStoryIdx(null);
    setActiveSlideIdx(0);
    setProgress(0);
  };

  const handleNextSlide = () => {
    if (activeStoryIdx === null) return;
    const currentStory = stories[activeStoryIdx];
    if (activeSlideIdx < currentStory.slides.length - 1) {
      setActiveSlideIdx((prev) => prev + 1);
      setProgress(0);
    } else {
      // Go to next story if available
      if (activeStoryIdx < stories.length - 1) {
        setActiveStoryIdx((prev) => prev! + 1);
        setActiveSlideIdx(0);
        setProgress(0);
      } else {
        handleCloseStory();
      }
    }
  };

  const handlePrevSlide = () => {
    if (activeStoryIdx === null) return;
    if (activeSlideIdx > 0) {
      setActiveSlideIdx((prev) => prev - 1);
      setProgress(0);
    } else {
      // Go to previous story if available
      if (activeStoryIdx > 0) {
        setActiveStoryIdx((prev) => prev! - 1);
        const prevStory = stories[activeStoryIdx - 1];
        setActiveSlideIdx(prevStory.slides.length - 1);
        setProgress(0);
      } else {
        // Just restart current slide
        setProgress(0);
      }
    }
  };

  const currentStory = activeStoryIdx !== null ? stories[activeStoryIdx] : null;
  const currentSlide = currentStory ? currentStory.slides[activeSlideIdx] : null;

  // Find associated product
  const linkedProduct = currentSlide && currentSlide.productId
    ? products.find((p) => p.id === currentSlide.productId)
    : null;

  return (
    <section id="stories-section" className="py-6 bg-white border-b border-gray-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Horizontal Bubble List */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-3 pt-1 scrollbar-none justify-start" dir="rtl">
          {stories.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => handleOpenStory(idx)}
              className="flex flex-col items-center gap-1.5 focus:outline-none flex-shrink-0 group cursor-pointer"
            >
              {/* Animated Border Circle */}
              <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-amber-500 via-[#009DA0] to-teal-400 group-hover:scale-105 transition-all duration-300 shadow-md">
                <div className="p-0.5 rounded-full bg-white">
                  <img
                    src={story.imageUrl}
                    alt={story.title}
                    referrerPolicy="no-referrer"
                    className="h-16 w-16 sm:h-18 sm:w-18 rounded-full object-cover"
                  />
                </div>
                {/* Live Badge */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#009DA0] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-white">
                  کارگاه زنده
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-700 tracking-tight group-hover:text-[#009DA0] transition-colors">
                {story.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Story Viewer Modal overlay */}
      {activeStoryIdx !== null && currentStory && currentSlide && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-0 sm:p-4">
          <div className="relative w-full max-w-lg h-full sm:h-[85vh] sm:rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between">
            
            {/* Top Info overlay */}
            <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-10 flex flex-col gap-3">
              
              {/* Multiple Slide progress bar */}
              <div className="flex gap-1">
                {currentStory.slides.map((slide, sIdx) => (
                  <div key={slide.id} className="h-1 flex-1 bg-white/25 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#009DA0] to-teal-400 transition-all duration-100 ease-linear rounded-full"
                      style={{
                        width:
                          sIdx < activeSlideIdx
                            ? "100%"
                            : sIdx === activeSlideIdx
                            ? `${progress}%`
                            : "0%"
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Artist Details */}
              <div className="flex items-center justify-between" dir="rtl">
                <div className="flex items-center gap-3">
                  <img
                    src={currentStory.avatarUrl}
                    alt={currentStory.artistName}
                    referrerPolicy="no-referrer"
                    className="h-9 w-9 rounded-full object-cover border-2 border-[#009DA0]"
                  />
                  <div>
                    <h3 className="text-white text-sm font-bold flex items-center gap-1">
                      {currentStory.artistName}
                      <Award size={14} className="text-amber-500 fill-amber-500" />
                    </h3>
                    <p className="text-slate-300 text-[10px] font-light">اصفهان، کارگاه مرکزی مرمت و نگارگری</p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleCloseStory}
                  className="p-1 rounded-full bg-black/30 hover:bg-black/50 text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Tap areas to navigate slides */}
            <div className="absolute inset-y-0 inset-x-0 flex justify-between z-0">
              <button
                onClick={handlePrevSlide}
                className="w-1/4 h-full focus:outline-none cursor-west-resize"
                title="قبلی"
              />
              <button
                onClick={handleNextSlide}
                className="w-3/4 h-full focus:outline-none cursor-east-resize"
                title="بعدی"
              />
            </div>

            {/* Background Craft Image/Media */}
            <div className="flex-1 bg-black flex items-center justify-center">
              <img
                src={currentSlide.mediaUrl}
                alt={currentSlide.caption}
                referrerPolicy="no-referrer"
                className="w-full max-h-full object-contain"
              />
            </div>

            {/* Bottom Section - Caption & Product linkage */}
            <div className="bg-gradient-to-t from-black/95 via-black/85 to-transparent p-6 z-10 text-right" dir="rtl">
              <p className="text-slate-100 text-sm leading-relaxed mb-6 font-medium">
                {currentSlide.caption}
              </p>

              {linkedProduct && (
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 hover:bg-white/15 transition-all duration-300 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={linkedProduct.imageUrl}
                      alt={linkedProduct.title}
                      referrerPolicy="no-referrer"
                      className="h-12 w-12 rounded-xl object-cover border border-white/10"
                    />
                    <div>
                      <h4 className="text-white text-xs font-bold line-clamp-1 max-w-[180px]">
                        {linkedProduct.title}
                      </h4>
                      <p className="text-emerald-400 text-xs font-semibold mt-0.5">
                        {linkedProduct.discountPrice
                          ? linkedProduct.discountPrice.toLocaleString("fa-IR")
                          : linkedProduct.price.toLocaleString("fa-IR")}{" "}
                        تومان
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onSelectProduct(linkedProduct);
                      handleCloseStory();
                    }}
                    className="bg-[#009DA0] hover:bg-teal-500 text-white text-xs font-black px-4 py-2.5 rounded-xl shadow-lg shadow-[#009DA0]/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowUp size={14} className="animate-bounce" />
                    <span>خرید مستقیم اثر</span>
                  </button>
                </div>
              )}
            </div>

            {/* Navigation Buttons for larger screens */}
            <div className="absolute top-1/2 -left-16 -translate-y-1/2 hidden lg:block">
              <button
                onClick={handlePrevSlide}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute top-1/2 -right-16 -translate-y-1/2 hidden lg:block">
              <button
                onClick={handleNextSlide}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
