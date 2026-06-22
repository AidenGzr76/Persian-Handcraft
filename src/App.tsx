import { useState } from "react";
import Header from "./components/Header";
import StorySection from "./components/StorySection";
import HeroBanner from "./components/HeroBanner";
import CategorySection from "./components/CategorySection";
import SpecialOffers from "./components/SpecialOffers";
import HandicraftVideos from "./components/HandicraftVideos";
import ProductShelf from "./components/ProductShelf";
import ProductDetailModal from "./components/ProductDetailModal";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";

import { PRODUCTS, STORIES, VIDEOS, CATEGORIES } from "./data";
import { Product, CartItem } from "./types";
import { Sparkles, ShoppingBag, Send, AlertCircle, CheckCircle } from "lucide-react";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeProductDetail, setActiveProductDetail] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Custom interactive toasts
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        showToast(`یک عدد دیگر از "${product.title.slice(0, 20)}..." به سبد اضافه شد`);
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      showToast(`📍 "${product.title.slice(0, 20)}..." با موفقیت به سبد خرید افزوده شد`);
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    const itemToRemove = cart.find((i) => i.product.id === productId);
    if (itemToRemove) {
      showToast(`🗑️ "${itemToRemove.product.title.slice(0, 20)}..." از فاکتور حذف شد`);
    }
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
    showToast("🛍️ خرید نهایی انجام شد؛ ممنون از حمایت ارزشمندتان!");
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleSelectCategory = (catId: string | null) => {
    setSelectedCategory(catId);
    // Smooth scroll to product shelves when a filter is applied
    const section = document.getElementById("products-grid-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="handicrafts-marketplace-root" className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#009DA0]/20 flex flex-col justify-between">
      
      {/* 1. Brand Header */}
      <Header
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onSearch={handleSearch}
        onSelectCategory={handleSelectCategory}
        activeCategory={selectedCategory}
      />

      {/* Main Container Layout */}
      <main className="flex-grow pb-12">
        {/* 2. Top Stories Widget - Basalam Style */}
        <StorySection
          stories={STORIES}
          onSelectProduct={(p) => setActiveProductDetail(p)}
          products={PRODUCTS}
        />

        {/* 3. Hero Visual Slider & guarantees banner */}
        <HeroBanner />

        {/* 4. Craft Categories Selection Bar */}
        <CategorySection
          categories={CATEGORIES}
          activeCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* 5. Special discount container - Digikala-style "Amazing Offers" */}
        <SpecialOffers
          products={PRODUCTS}
          onSelectProduct={(p) => setActiveProductDetail(p)}
        />

        {/* 6. Main Product Shelf Grid (incorporates categories filtering, tags & search) */}
        <ProductShelf
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
          onSelectProduct={(p) => setActiveProductDetail(p)}
          onAddToCart={handleAddToCart}
        />

        {/* 7. Interactive social video feed */}
        <HandicraftVideos
          videos={VIDEOS}
          products={PRODUCTS}
          onSelectProduct={(p) => setActiveProductDetail(p)}
        />

        {/* Beautiful Newsletter and Artisan story banner */}
        <section id="storytelling-banner" className="py-12 bg-white" dir="rtl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10 shadow-xl">
              <div className="absolute inset-0 bg-[#009DA0]/10 opacity-40 select-none cursor-default" />
              
              <div className="flex-1 text-right z-10 max-w-2xl">
                <span className="text-amber-400 text-xs font-black flex items-center gap-1 mb-3">
                  <Sparkles size={14} className="fill-amber-400" />
                  برکت غرفه؛ جنبش رونق صنایع دستی سنتی
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 leading-snug">
                  روایتگر ارزش‌های مادی و معنوی دست‌سازه‌ای باشید که به خانه‌تان هویت می‌بخشد
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  در آراسته، ما باور داریم هر کوزه خاک سفید و هر گره از گلیم قشقایی داستانی طولانی از رنج، عشق و اصالت است. با عضویت در خبرنامه هفتگی کارگاه‌ها، در لایوهای هفتگی استادکاران شرکت کنید و بن تخفیف ۳۰ هزار تومانی دریافت فرمایید.
                </p>

                {/* Micro Input action */}
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    showToast("📧 نشانی ایمیل شما در مجمع دوستداران آراسته ثبت گردید!");
                  }}
                  className="flex gap-2 max-w-md w-full"
                >
                  <input
                    type="email"
                    required
                    placeholder="نشانی ایمیل دوستدار هنر شما..."
                    className="flex-1 bg-white/10 border border-white/20 text-xs p-3 rounded-xl outline-none focus:border-[#009DA0] placeholder:text-slate-400 font-mono text-left"
                  />
                  <button
                    type="submit"
                    className="bg-[#009DA0] hover:bg-teal-500 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>عضویت</span>
                    <Send size={12} />
                  </button>
                </form>
              </div>

              {/* Decorative side illustration of craftsman */}
              <div className="flex-1 w-full lg:w-auto h-48 lg:h-72 flex items-center justify-center relative">
                <img
                  src="https://images.unsplash.com/photo-1528255620054-6d4b917fa11d?auto=format&fit=crop&w=500&q=80"
                  alt="Persian Crafts"
                  referrerPolicy="no-referrer"
                  className="rounded-3xl max-h-full object-cover shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-500 border-4 border-white/20"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. Common Footer */}
      <Footer />

      {/* 9. Sliding Right-side Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 10. Floating Interactive Product Quick View Modal */}
      <ProductDetailModal
        product={activeProductDetail}
        onClose={() => setActiveProductDetail(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Interactive Micro Toasts widget */}
      {toastMessage && (
        <div 
          className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-slate-800 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-2.5 animate-slide-up max-w-sm" 
          dir="rtl"
        >
          <div className="h-6 w-6 rounded-full bg-[#009DA0]/20 text-[#009DA0] flex items-center justify-center flex-shrink-0">
            <CheckCircle size={15} />
          </div>
          <span className="text-xs font-black leading-relaxed">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
