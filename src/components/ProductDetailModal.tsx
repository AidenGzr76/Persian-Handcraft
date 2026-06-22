import { useState } from "react";
import { X, Star, MapPin, Sparkles, Check, Heart, ShieldAlert, Award, ChevronRight, Truck, RefreshCw } from "lucide-react";
import { Product } from "../types";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  onAddToCart
}: ProductDetailModalProps) {
  const [addedProgress, setAddedProgress] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product);
    setAddedProgress(true);
    setTimeout(() => {
      setAddedProgress(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 overflow-y-auto" dir="rtl">
      <div className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl relative my-8 overflow-hidden border border-slate-100 animate-scale-up">
        
        {/* Close Button top-left in RTL */}
        <button
          onClick={onClose}
          className="absolute left-4 top-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-[#009DA0] hover:text-white text-slate-500 transition-all cursor-pointer focus:outline-none"
          aria-label="بستن پنجره"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col md:flex-row items-stretch lg:h-auto max-h-[90vh] overflow-y-auto">
          
          {/* Right Pillar: Large Showcase Image */}
          <div className="md:w-1/2 p-6 sm:p-8 bg-slate-50 flex items-center justify-center relative">
            {/* Discount Stamp */}
            {product.discountPercentage && (
              <span className="absolute top-6 right-6 bg-red-500 text-white font-bold text-xs px-3 py-1 rounded-full z-10 shadow-sm">
                -{product.discountPercentage}% تخفیف انحصاری
              </span>
            )}
            
            {/* Traditional Tile Background Accent */}
            <div className="absolute inset-0 bg-[#009DA0]/5 opacity-30 select-none pointer-events-none" />

            <img
              src={product.imageUrl}
              alt={product.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[380px] object-cover rounded-2xl shadow-xl border-4 border-white transition-all transform hover:scale-105"
            />
          </div>

          {/* Left Pillar: Text & Information specifications */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between text-right">
            <div>
              {/* Main Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#009DA0]/10 text-[#009DA0] text-[10px] font-black px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Award size={12} />
                  <span>اثر دست‌ساز بومی صنایع دستی</span>
                </span>
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  <MapPin size={12} className="text-[#009DA0]" />
                  <span>تولید محدود در {product.originCity}</span>
                </span>
              </div>

              {/* Title */}
              <h2 className="text-base sm:text-xl font-black text-slate-800 leading-relaxed mb-3">
                {product.title}
              </h2>

              {/* Booth Information / Master */}
              <div className="flex flex-wrap items-center gap-3 border-y border-slate-100 py-3 mb-4 text-xs">
                <div className="flex items-center gap-2">
                  <img
                    src={product.artistAvatar}
                    alt={product.artistName}
                    referrerPolicy="no-referrer"
                    className="h-8 w-8 rounded-full border border-teal-500 object-cover"
                  />
                  <div>
                    <p className="text-slate-400 text-[10px]">استادکار آفریننده اثر</p>
                    <p className="font-bold text-slate-700">{product.artistName}</p>
                  </div>
                </div>

                <div className="h-6 w-px bg-slate-200" />

                <div>
                  <p className="text-slate-400 text-[10px]">غرفه ارائه‌دهنده</p>
                  <p className="font-bold text-[#009DA0]">غرفه {product.shopName}</p>
                </div>

                <div className="h-6 w-px bg-slate-200" />

                <div className="flex items-center gap-1 bg-amber-500/10 text-amber-700 px-2 py-0.5 rounded font-black text-xs">
                  <span>{product.rating.toLocaleString("fa-IR")}</span>
                  <Star size={11} className="fill-amber-500 text-amber-500" />
                  <span className="text-[10px] font-normal text-slate-400">({product.reviewsCount.toLocaleString("fa-IR")})</span>
                </div>
              </div>

              {/* Descriptive Behind the scenes story */}
              <div className="mb-5">
                <h4 className="text-xs font-black text-slate-700 mb-2 flex items-center gap-1">
                  <Sparkles size={14} className="text-amber-500" />
                  <span>داستانِ پشتِ اثر</span>
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                  {product.description}
                </p>
              </div>

              {/* Technical Spec table sheet */}
              <div className="mb-6 bg-slate-50 rounded-2xl p-4 border border-slate-100 text-xs">
                <h3 className="font-black text-slate-700 mb-2.5">شناسنامه و جزییات فنی اثر</h3>
                <div className="grid grid-cols-2 gap-3 text-slate-600">
                  {product.material && (
                    <p>
                      <strong className="text-slate-400 font-normal">مواد پایه:</strong> {product.material}
                    </p>
                  )}
                  {product.dimensions && (
                    <p>
                      <strong className="text-slate-400 font-normal">اندازه دقیق:</strong> {product.dimensions}
                    </p>
                  )}
                  {product.weight && (
                    <p>
                      <strong className="text-slate-400 font-normal">وزن اثر:</strong> {product.weight}
                    </p>
                  )}
                  <p>
                    <strong className="text-slate-400 font-normal">ارسال از:</strong> {product.originCity} (کارگاه مستقیم)
                  </p>
                </div>
              </div>

              {/* Assurances */}
              <div className="grid grid-cols-3 gap-2 py-4 border-t border-slate-100 text-[10px] sm:text-xs text-slate-500 text-center">
                <div className="flex flex-col items-center gap-1">
                  <Truck size={16} className="text-[#009DA0]" />
                  <span>ارسال ضربه‌گیر اختصاصی</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ShieldAlert size={16} className="text-[#009DA0]" />
                  <span>شناسنامه ضمانت اصالت</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <RefreshCw size={16} className="text-[#009DA0]" />
                  <span>امکان ارجاع تا ۷ روز</span>
                </div>
              </div>
            </div>

            {/* Price section & main Action CTA */}
            <div className="border-t border-slate-100 pt-5 mt-4 flex items-center justify-between">
              <div className="text-right">
                <span className="text-xs text-slate-400">بهای نهایی اثر:</span>
                {product.discountPrice ? (
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 line-through">
                      {product.price.toLocaleString("fa-IR")}
                    </span>
                    <span className="text-lg sm:text-2xl font-black text-[#009DA0] flex items-center gap-0.5">
                      {product.discountPrice.toLocaleString("fa-IR")}{" "}
                      <span className="text-xs uppercase">تومان</span>
                    </span>
                  </div>
                ) : (
                  <span className="text-lg sm:text-2xl font-black text-slate-800 flex items-center gap-0.5 mt-1">
                    {product.price.toLocaleString("fa-IR")}{" "}
                    <span className="text-xs uppercase">تومان</span>
                  </span>
                )}
              </div>

              {/* Quick Actions Add & Wishlist */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setWishlist(!wishlist)}
                  className={`p-2.5 rounded-2xl border transition-all ${
                    wishlist
                      ? "bg-red-50 border-red-200 text-red-500"
                      : "border-slate-200 bg-white hover:bg-slate-50 text-slate-400 hover:text-red-500"
                  } cursor-pointer`}
                  title="ذخیره در علاقمندی‌ها"
                >
                  <Heart size={20} className={wishlist ? "fill-red-500" : ""} />
                </button>

                <button
                  onClick={handleAddToCart}
                  disabled={addedProgress}
                  className={`px-6 py-3.5 rounded-2xl font-black text-xs sm:text-sm shadow-xl flex items-center gap-2 cursor-pointer transition-all ${
                    addedProgress
                      ? "bg-emerald-500 text-white shadow-emerald-500/20"
                      : "bg-[#009DA0] hover:bg-teal-500 text-white shadow-[#009DA0]/20 hover:scale-105"
                  }`}
                >
                  {addedProgress ? (
                    <>
                      <Check size={18} />
                      <span>به سبد اضافه شد!</span>
                    </>
                  ) : (
                    <>
                      <span>افزودن به سبد خرید</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
