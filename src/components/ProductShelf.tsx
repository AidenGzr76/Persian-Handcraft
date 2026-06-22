import { useState } from "react";
import { Star, MapPin, Sparkles, Filter, CheckCircle2, ShoppingCart, Info, UserCheck } from "lucide-react";
import { Product } from "../types";

interface ProductShelfProps {
  products: Product[];
  selectedCategory: string | null;
  searchTerm: string;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

type TabType = "all" | "high-rating" | "fast-shipping" | "artists";

export default function ProductShelf({
  products,
  selectedCategory,
  searchTerm,
  onSelectProduct,
  onAddToCart
}: ProductShelfProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  // Filter products based on Category, Search Term and Tab
  const filteredProducts = products.filter((p) => {
    // 1. If looking for featured booths
    if (selectedCategory === "featured-booths") {
      // Show products belonging to premium stores
      if (p.rating < 4.7) return false;
    }
    // 2. Category filter
    else if (selectedCategory && p.category !== selectedCategory) {
      return false;
    }

    // 3. Search term filter
    if (searchTerm) {
      const query = searchTerm.toLowerCase();
      const inTitle = p.title.toLowerCase().includes(query);
      const inDescription = p.description.toLowerCase().includes(query);
      const inArtist = p.artistName.toLowerCase().includes(query);
      const inCity = p.originCity.toLowerCase().includes(query);
      const inCategory = p.category.toLowerCase().includes(query);
      if (!inTitle && !inDescription && !inArtist && !inCity && !inCategory) {
        return false;
      }
    }

    // 4. Tab filter
    if (activeTab === "high-rating" && p.rating < 4.7) return false;
    if (activeTab === "fast-shipping" && p.stock < 3) return false; // fast ship simulates stock availability
    if (activeTab === "artists" && !p.artistName) return false;

    return true;
  });

  return (
    <section id="products-grid-section" className="py-10 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        
        {/* Shelf Heading */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-100 pb-5 mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-[#009DA0]">ویترین آثار تایید شده غرفه‌داران</span>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-1">
               {selectedCategory === "featured-booths" 
                ? "غرفه‌داران طراز اول با نشان اصالت هنر"
                : selectedCategory 
                ? `آثار دست‌ساز رده: ${selectedCategory === "pottery" ? "سفال کوپری" : selectedCategory === "firoozeh" ? "فیروزه‌کوب" : selectedCategory === "carpet" ? "گلیم" : "آثار سنتی"}`
                : "برگزیده آثار هنرمندان محبوب سراسر ایران"}
            </h3>
          </div>

          {/* Micro Filtering Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#009DA0] text-white"
                  : "bg-gray-50 text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              }`}
            >
              همه آثار
            </button>
            <button
              onClick={() => setActiveTab("high-rating")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "high-rating"
                  ? "bg-[#009DA0] text-white"
                  : "bg-gray-50 text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              }`}
            >
              بهترین امتیازها ⭐
            </button>
            <button
              onClick={() => setActiveTab("fast-shipping")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "fast-shipping"
                  ? "bg-[#009DA0] text-white"
                  : "bg-gray-50 text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              }`}
            >
              آماده ارسال از کارگاه 🚚
            </button>
            <button
              onClick={() => setActiveTab("artists")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "artists"
                  ? "bg-[#009DA0] text-white"
                  : "bg-gray-50 text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              }`}
            >
              هنرمندان صاحب‌امضا ✍🏻
            </button>
          </div>
        </div>

        {/* Empty State checks */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center max-w-md mx-auto">
            <div className="h-16 w-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-dashed border-slate-200">
              <Filter size={24} />
            </div>
            <h4 className="text-base font-bold text-slate-700">هیچ اثری یافت نشد!</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              تعبیر جستجوی شما در کارگاه‌های فعلی موجود نبود. لطفاً فیلترها را پاک کرده یا عنوان دیگری را جستجو فرمایید.
            </p>
          </div>
        ) : (
          /* Products Grid system with high aesthetics ratio */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-gray-100 hover:border-[#009DA0]/25 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative"
                  onClick={() => onSelectProduct(product)}
                >
                  {/* Photo Layer */}
                  <div className="relative aspect-square rounded-t-xl overflow-hidden bg-gray-50">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Low Stock overlay */}
                    {product.stock === 1 && (
                      <span className="absolute top-3 right-3 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded z-10">
                        آخرین نسخه دستبافت منحصربفرد
                      </span>
                    )}

                    {/* Original City sticker with logo */}
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-gray-750 text-[10px] px-2 py-1 rounded font-bold flex items-center gap-1 border border-gray-100">
                      <MapPin size={10} className="text-[#009DA0]" />
                      <span>{product.originCity}</span>
                    </div>

                    {/* Verified shop check circles */}
                    <span className="absolute top-3 left-3 bg-emerald-500 text-white p-1 rounded-full shadow-sm tooltip z-10" title="دارای گواهی اصالت فیزیکی کالا">
                      <CheckCircle2 size={12} />
                    </span>
                  </div>

                  {/* Narrative Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Shop Name & rating */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] text-gray-400 font-bold line-clamp-1">
                          غرفه {product.shopName}
                        </span>
                        
                        <div className="flex items-center gap-1 bg-amber-500/10 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold">
                          <span>{product.rating.toLocaleString("fa-IR")}</span>
                          <Star size={9} className="fill-amber-500 text-amber-500" />
                        </div>
                      </div>

                      {/* Product Title containing Persian text */}
                      <h4 className="text-xs sm:text-sm font-black text-gray-800 leading-relaxed mb-4 group-hover:text-[#009DA0] transition-colors line-clamp-2">
                        {product.title}
                      </h4>

                      {/* Artist Badge */}
                      <div className="flex items-center gap-2 mb-4 bg-gray-50/50 p-1.5 rounded-lg border border-gray-100/60 w-fit">
                        <img
                          src={product.artistAvatar}
                          alt={product.artistName}
                          referrerPolicy="no-referrer"
                          className="h-5 w-5 rounded-full object-cover border border-[#009DA0]/20"
                        />
                        <span className="text-[9px] text-gray-500 font-medium">اثر استاد: {product.artistName}</span>
                      </div>
                    </div>

                    {/* Core Bottom pricing block & add-to-cart overlay handles */}
                    <div className="flex items-center justify-between border-t border-gray-50 pt-3 mt-2">
                      <div className="text-right">
                        {product.discountPrice ? (
                          <div>
                            <span className="text-[10px] text-gray-400 line-through">
                              {product.price.toLocaleString("fa-IR")}
                            </span>
                            <p className="text-xs sm:text-sm font-black text-[#009DA0]">
                              {product.discountPrice.toLocaleString("fa-IR")}{" "}
                              <span className="text-[9px]">تومان</span>
                            </p>
                          </div>
                        ) : (
                          <p className="text-xs sm:text-sm font-black text-gray-800">
                            {product.price.toLocaleString("fa-IR")}{" "}
                            <span className="text-[9px]">تومان</span>
                          </p>
                        )}
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(product);
                        }}
                        className="p-2 sm:px-3 sm:py-2.5 rounded-lg bg-[#009DA0]/10 hover:bg-[#009DA0] text-[#009DA0] hover:text-white transition-all cursor-pointer flex items-center justify-center gap-1.5"
                        title="افزودن سریع به سبد خرید"
                      >
                        <ShoppingCart size={14} />
                        <span className="hidden sm:inline text-[10px] font-bold">افزودن سریع</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
