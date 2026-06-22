import React, { useState } from "react";
import { Search, ShoppingBag, MapPin, Store, Heart, Sparkles, Menu, X } from "lucide-react";
import { CartItem } from "../types";

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onSearch: (term: string) => void;
  onSelectCategory: (catId: string | null) => void;
  activeCategory: string | null;
}

export default function Header({
  cart,
  onOpenCart,
  onSearch,
  onSelectCategory,
  activeCategory
}: HeaderProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header id="app-header" className="sticky top-0 z-40 bg-white border-b border-gray-100 transition-all duration-300">
      {/* Top bar indicating cultural authenticity - minimal & clean styled */}
      <div className="bg-white text-gray-500 px-4 py-1.5 text-xs text-center font-medium select-none flex items-center justify-center gap-1.5 border-b border-gray-100">
        <Sparkles size={13} className="animate-pulse text-[#009DA0]" />
        <span>احیای اصالت هنر ایرانی - مستقیم از دست استادکاران و غرفه‌های سراسر کشور</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-6 select-none">
            <button 
              onClick={() => onSelectCategory(null)}
              className="flex items-center gap-3 text-right group focus:outline-none cursor-pointer"
            >
              <div className="text-2xl font-black text-[#009DA0] tracking-tighter">هَنَردار</div>
              <div className="hidden sm:block h-6 w-px bg-gray-200"></div>
              <div className="hidden sm:block text-[11px] text-gray-450 font-normal leading-none bg-gray-50 border border-gray-100 rounded px-2 py-1">
                بازارچه ملی صنایع دستی
              </div>
            </button>
          </div>

          {/* Search Box */}
          <form 
            onSubmit={handleSubmit}
            className="hidden md:flex flex-1 max-w-md relative"
          >
            <input
              type="text"
              placeholder="جستجو در بین آثار هنری..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                onSearch(e.target.value);
              }}
              className="w-full bg-gray-100 rounded-lg py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-[#009DA0] text-right text-gray-900 placeholder-gray-400"
              dir="rtl"
            />
            <button
              type="submit"
              className="absolute right-3 top-2.5 text-gray-400 hover:text-[#009DA0] transition-colors cursor-pointer"
            >
              <Search size={16} />
            </button>
          </form>

          {/* User Utilities & Shopping Cart */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onSelectCategory("featured-booths")}
              className="hidden sm:flex items-center gap-1 text-gray-500 hover:text-[#009DA0] text-sm font-medium transition-colors cursor-pointer"
            >
              <Store size={16} />
              <span>غرفه‌داران بومی</span>
            </button>
            
            <a
              href="#videos-feed"
              className="hidden lg:flex items-center gap-1.5 text-gray-500 hover:text-[#009DA0] text-sm font-medium transition-colors"
            >
              <span className="h-2 w-2 rounded-full bg-red-400"></span>
              <span>ویدیو سنتی</span>
            </a>

            <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>

            <button className="hidden sm:block px-4 py-2 text-xs font-medium border border-gray-200 rounded-lg text-gray-750 hover:bg-gray-50 transition-colors cursor-pointer">
              ورود | ثبت‌نام
            </button>

            <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-lg border border-gray-100 bg-white hover:bg-[#009DA0]/5 hover:border-[#009DA0]/20 text-gray-700 hover:text-[#009DA0] transition-all duration-200 cursor-pointer focus:outline-none flex items-center gap-1.5"
            >
              <ShoppingBag size={18} />
              <span className="hidden sm:inline text-xs font-medium">سبد خرید</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-1.5 -left-1.5 h-4.5 min-w-4.5 rounded-full bg-[#009DA0] text-white text-[10px] font-bold flex items-center justify-center px-1">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden text-gray-600 hover:text-[#009DA0] transition-colors focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Search - Visible under 768px */}
        <div className="mt-3 md:hidden">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              placeholder="جستجو در بین آثار هنری..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                onSearch(e.target.value);
              }}
              className="w-full bg-gray-100 rounded-lg py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-[#009DA0] text-right text-gray-900 placeholder-gray-400"
              dir="rtl"
            />
            <button
              type="submit"
              className="absolute right-3 top-2.5 text-gray-400"
            >
              <Search size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white py-4 px-6 animate-fade-in shadow-inner" dir="rtl">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                onSelectCategory(null);
                setMobileMenuOpen(false);
              }}
              className={`text-right font-medium text-sm py-2 px-3 rounded-lg transition-colors ${!activeCategory ? "bg-[#009DA0]/5 text-[#009DA0]" : "text-slate-600 hover:bg-slate-50"}`}
            >
              خانه / کل آثار
            </button>
            <button
              onClick={() => {
                onSelectCategory("featured-booths");
                setMobileMenuOpen(false);
              }}
              className="text-right font-medium text-sm py-2 px-3 rounded-lg text-slate-600 hover:bg-slate-50 flex items-center gap-2"
            >
              <Store size={16} className="text-[#009DA0]" />
              غرفه‌های رده‌بالا
            </button>
            <a
              href="#special-offers-section"
              onClick={() => setMobileMenuOpen(false)}
              className="text-right font-medium text-sm py-2 px-3 rounded-lg text-amber-600 hover:bg-amber-50 flex items-center gap-2"
            >
              <Sparkles size={16} />
              پیشنهادات شگفت‌انگیز کویر
            </a>
            <a
              href="#videos-feed"
              onClick={() => setMobileMenuOpen(false)}
              className="text-right font-medium text-sm py-2 px-3 rounded-lg text-slate-600 hover:bg-slate-50 flex items-center gap-1"
            >
              <span className="h-2 w-2 rounded-full bg-red-500 inline-block mr-1"></span>
              ویدیوهای کارگاهی کوتاه
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
