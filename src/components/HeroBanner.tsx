import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Calendar, ShieldCheck, Truck } from "lucide-react";
import { BANNER_SLIDES } from "../data";

export default function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length);
  };

  return (
    <section id="hero-banner-section" className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#009DA0]/5 aspect-[21/9] min-h-[300px] flex items-center md:min-h-[380px] border border-[#009DA0]/25">
          
          {/* Slides */}
          {BANNER_SLIDES.map((slide, idx) => {
            const isActive = idx === activeSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 flex flex-col md:flex-row items-center justify-between p-6 sm:p-12 gap-6 ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
                dir="rtl"
              >
                {/* Text Content */}
                <div className="flex-1 text-right max-w-xl z-20">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#009DA0]/10 text-[#009DA0] text-xs font-bold mb-4">
                    {slide.tag}
                  </span>
                  
                  <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-3">
                    {slide.title}
                  </h2>
                  
                  <p className="text-xs sm:text-sm md:text-base text-gray-500 font-normal leading-relaxed mb-6">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#products-grid-section"
                      className="inline-flex items-center justify-center bg-[#009DA0] hover:bg-teal-500 text-white text-xs sm:text-sm font-black px-6 py-3 rounded-xl shadow-lg shadow-[#009DA0]/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                    >
                      مشاهده و خرید آثار سنتی
                    </a>
                    <a
                      href="#special-offers-section"
                      className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-750 border border-gray-200 text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-all"
                    >
                      تخفیف‌های ویژه غرفه‌داران
                    </a>
                  </div>
                </div>

                {/* Styled Image Frame with beautiful layered shadows */}
                <div className="flex-1 w-full md:w-auto h-40 md:h-[300px] flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#009DA0]/10 to-transparent rounded-2xl md:rounded-full blur-2xl opacity-60"></div>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full md:max-h-[260px] object-cover rounded-2xl md:rounded-3xl shadow-2xl border-4 border-white/60 relative z-10 transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            );
          })}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/70 hover:bg-white text-slate-700 shadow-md backdrop-blur-sm cursor-pointer hover:scale-110 active:scale-95 transition-all"
            aria-label="اسلاید قبلی"
          >
            <ChevronLeft size={18} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/70 hover:bg-white text-slate-700 shadow-md backdrop-blur-sm cursor-pointer hover:scale-110 active:scale-95 transition-all"
            aria-label="اسلاید بعدی"
          >
            <ChevronRight size={18} />
          </button>

          {/* Bullet Ticks */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {BANNER_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeSlide ? "w-6 bg-[#009DA0]" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`تغییر به اسلاید ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Feature Highlights beneath */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 border-t border-gray-100 pt-6" dir="rtl">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50/50 hover:bg-[#009DA0]/5 transition-colors group">
            <div className="p-3 rounded-xl bg-white text-[#009DA0] shadow-sm group-hover:bg-[#009DA0] group-hover:text-white transition-colors">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-gray-900">تضمین اصالت مادی و معنوی</h4>
              <p className="text-[10px] text-gray-450 font-light mt-0.5">شناسنامه انحصاری و تضمین بازگشت وجه</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50/50 hover:bg-[#009DA0]/5 transition-colors group">
            <div className="p-3 rounded-xl bg-white text-amber-600 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Truck size={18} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-gray-900">ارسال ایمن و اختصاصی</h4>
              <p className="text-[10px] text-gray-450 font-light mt-0.5">بسته‌بندی ضربه‌گیر ویژه حمل ظروف شکننده</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50/50 hover:bg-[#009DA0]/5 transition-colors group">
            <div className="p-3 rounded-xl bg-white text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Calendar size={18} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-gray-900">حمایت مستقیم از خالق اثر</h4>
              <p className="text-[10px] text-gray-450 font-light mt-0.5">دریافت سود گرانبها بدون واسطه‌های صنعتی و دلالان</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
