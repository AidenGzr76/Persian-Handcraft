import { useState, useEffect } from "react";
import { Sparkles, Hourglass, Percent, ShoppingCart, Eye } from "lucide-react";
import { Product } from "../types";

interface SpecialOffersProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export default function SpecialOffers({
  products,
  onSelectProduct
}: SpecialOffersProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 45,
    seconds: 30
  });

  // Countdown timer simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer to keep it engaging
          return { hours: 12, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatPersianNumber = (num: number): string => {
    return num.toLocaleString("fa-IR", { minimumIntegerDigits: 2 });
  };

  const specialProducts = products.filter((p) => p.isSpecial);

  return (
    <section id="special-offers-section" className="py-8 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Turquoise container resembling Digikala's "Incredible Offers" or the Clean Minimalism banner */}
        <div className="bg-[#009DA0] rounded-2xl p-6 sm:p-8 text-white flex flex-col lg:flex-row items-stretch gap-6">
          
          {/* Left / Info Box: Timer & Title */}
          <div className="flex flex-col justify-between items-center lg:items-start text-center lg:text-right lg:w-1/4 py-4 flex-shrink-0 select-none">
            <div className="flex flex-col items-center lg:items-start gap-2">
              <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-amber-300 border border-white/20 animate-pulse">
                <Sparkles size={24} className="fill-amber-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black mt-2 tracking-wide leading-tight text-white">
                شگفت‌انگیز آثار بومی
              </h3>
              <p className="text-teal-50 text-xs font-light max-w-xs mt-1 leading-relaxed">
                تخفیف‌های برگزیده امروز برای نفیس‌ترین صنایع‌ دستی اصیل ایرانی به صورت مستقیم
              </p>
            </div>

            {/* Countdown timer */}
            <div className="mt-6 lg:mt-0 flex flex-col items-center lg:items-start gap-3 w-full">
              <span className="text-xs text-teal-100 font-medium flex items-center gap-1.5">
                <Hourglass size={14} className="animate-spin text-amber-300" />
                زمان باقی‌مانده غرفه‌ها:
              </span>
              
              <div className="flex items-center gap-1.5 font-mono">
                {/* Hours */}
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-white text-[#009DA0] font-black text-sm sm:text-lg flex items-center justify-center">
                    {formatPersianNumber(timeLeft.hours)}
                  </div>
                  <span className="text-[10px] text-teal-100 mt-1">ساعت</span>
                </div>
                <span className="text-white font-bold text-lg mb-4">:</span>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-white text-[#009DA0] font-black text-sm sm:text-lg flex items-center justify-center">
                    {formatPersianNumber(timeLeft.minutes)}
                  </div>
                  <span className="text-[10px] text-teal-100 mt-1">دقیقه</span>
                </div>
                <span className="text-white font-bold text-lg mb-4">:</span>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-[#007F82] text-white font-black text-sm sm:text-lg flex items-center justify-center animate-pulse">
                    {formatPersianNumber(timeLeft.seconds)}
                  </div>
                  <span className="text-[10px] text-teal-100 mt-1">ثانیه</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Box: Product Slider Grid */}
          <div className="flex-1 overflow-x-auto pb-2 scrollbar-none flex items-center justify-start gap-4 pr-1">
            {specialProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="w-[200px] sm:w-[230px] flex-shrink-0 bg-white rounded-xl p-3 text-gray-900 border border-gray-100/10 hover:border-white/20 transition-all duration-300 group cursor-pointer flex flex-col justify-between h-[340px]"
                >
                  {/* Image with discount bubble */}
                  <div className="relative rounded-lg overflow-hidden aspect-square flex items-center justify-center bg-gray-50 mb-3">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-550"
                    />
                    
                    {/* Discount badge */}
                    {product.discountPercentage && (
                      <span className="absolute top-2 right-2 bg-red-500 text-white font-bold text-xs px-2 py-0.5 rounded-full flex items-center gap-0.5">
                        <Percent size={10} />
                        <span>{product.discountPercentage.toLocaleString("fa-IR")}</span>
                      </span>
                    )}

                    {/* Origin sticker */}
                    <span className="absolute bottom-2 left-2 bg-gray-900/60 text-white backdrop-blur-sm text-[10px] px-2 py-0.5 rounded font-light">
                      از {product.originCity}
                    </span>

                    {/* Hover detail trigger */}
                    <div className="absolute inset-0 bg-[#009DA0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="h-10 w-10 rounded-full bg-white text-[#009DA0] flex items-center justify-center shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-all">
                        <Eye size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="text-right flex flex-col flex-1 justify-between">
                    <div>
                      {/* Booth Information */}
                      <p className="text-[10px] text-gray-400 font-bold line-clamp-1 mb-1">
                        غرفه {product.shopName}
                      </p>
                      
                      {/* Product Title */}
                      <h4 className="text-xs font-black text-gray-800 line-clamp-2 leading-relaxed group-hover:text-[#009DA0] transition-colors mb-2">
                        {product.title}
                      </h4>
                    </div>

                    {/* Pricing details */}
                    <div className="mt-2 text-right">
                      {product.discountPrice ? (
                        <div className="flex flex-col">
                          {/* Original Price (Strikethrough) */}
                          <span className="text-[10px] text-gray-400 line-through">
                            {product.price.toLocaleString("fa-IR")}
                          </span>
                          
                          {/* New Price */}
                          <span className="text-sm font-black text-[#009DA0] flex items-center gap-0.5 mt-0.5">
                            {product.discountPrice.toLocaleString("fa-IR")}{" "}
                            <span className="text-[10px] uppercase">تومان</span>
                          </span>
                        </div>
                      ) : (
                        <span className="text-sm font-black text-gray-900">
                          {product.price.toLocaleString("fa-IR")}{" "}
                          <span className="text-[10px] uppercase">تومان</span>
                        </span>
                      )}

                      {/* Stock warning if low */}
                      {product.stock <= 5 && (
                        <p className="text-[9px] text-amber-600 font-bold mt-1 animate-pulse">
                          تنها {product.stock.toLocaleString("fa-IR")} عدد باقی‌مانده!
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
