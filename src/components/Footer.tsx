import { ShieldCheck, Calendar, Map, CheckCircle2, ChevronUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="app-footer" className="bg-gray-50 text-gray-500 py-12 border-t border-gray-100" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        
        {/* Upper Column blocks */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 select-none">
              <div className="h-10 w-10 rounded-xl bg-[#009DA0] flex items-center justify-center text-white font-extrabold text-xl">
                <span>آ</span>
              </div>
              <div>
                <h4 className="text-gray-900 text-base font-bold">آراسته</h4>
                <p className="text-[10px] text-gray-450 font-mono tracking-wider">ARASTEH MARKETS</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed font-light">
              آراسته بستری مدرن، امن و مینیمال برای داد و ستد صنایع دستی، گلیم، مینیاتور و ملایمات زندگی اصیل ایرانی است. ما پل ارتباطی مستقیمی میان کارگاه هنرمندان دوردست کویر و زاگرس و منازل پر ذوق شما هستیم.
            </p>
          </div>

          {/* Quick Access links */}
          <div className="space-y-3">
            <h4 className="text-gray-900 text-xs font-black tracking-widest uppercase">دسترسی سریع</h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a href="#stories-section" className="hover:text-[#009DA0] transition-colors">داستان کارگاه‌های لایو</a>
              </li>
              <li>
                <a href="#categories-grid-section" className="hover:text-[#009DA0] transition-colors">دسته‌بندی سفال و فرش سنتی</a>
              </li>
              <li>
                <a href="#special-offers-section" className="hover:text-[#009DA0] transition-colors">تخفیف شگفت‌انگیز کویر</a>
              </li>
              <li>
                <a href="#videos-feed" className="hover:text-[#009DA0] transition-colors">ویدیو کوتاه صنایع دستی</a>
              </li>
            </ul>
          </div>

          {/* Safe standards */}
          <div className="space-y-3">
            <h4 className="text-gray-900 text-xs font-black tracking-widest uppercase">ضمانت خرید</h4>
            <ul className="space-y-2 text-xs font-light text-gray-500">
              <li>ضمانت اصالت فیزیکی و هنری</li>
              <li>سرویس تحویل اکسپرس ویژه ظروف شکستنی</li>
              <li>بسته‌بندی زیست‌تخریب‌پذیر دوستدار محیط زیست</li>
              <li>حق ارجاع کالا تا ۷ روز در صورت عدم مغایرت</li>
            </ul>
          </div>

          {/* Electronic symbols placeholders for authenticity */}
          <div className="space-y-3">
            <h4 className="text-gray-900 text-xs font-black uppercase">عضو انجمن صنایع دستی ایران</h4>
            <p className="text-xs text-gray-550 leading-relaxed font-light">
              دارای تاییدیه فعالیت کشوری وزارت میراث فرهنگی، گردشگری و صنایع دستی.
            </p>

            {/* Cert Cards mockup */}
            <div className="flex gap-2.5 pt-2">
              <div className="h-16 w-16 rounded-xl bg-white border border-gray-150 hover:border-[#009DA0] transition-colors flex items-center justify-center text-[10px] font-bold p-2 text-center text-gray-700 shadow-sm">
                نماد الکترونیک
              </div>
              <div className="h-16 w-16 rounded-xl bg-white border border-gray-150 hover:border-[#009DA0] transition-colors flex items-center justify-center text-[10px] font-bold p-2 text-center text-gray-700 shadow-sm">
                شناسنامه ملی
              </div>
              <div className="h-16 w-16 rounded-xl bg-white border border-gray-150 hover:border-[#009DA0] transition-colors flex items-center justify-center text-[10px] font-bold p-2 text-center text-gray-700 shadow-sm">
                پرداخت امن
              </div>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4 text-gray-500 font-light select-none">
          <p>© ۱۴۰۵ بازارچه صنایع دستی آراسته. تمامی حقوق مادی و معنوی محفوظ است.</p>
          
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1 text-gray-700 hover:text-[#009DA0] bg-white hover:bg-gray-50 px-3.5 py-2 rounded-lg border border-gray-200 transition-all cursor-pointer shadow-sm"
          >
            <span>برگشت به بالای صفحه</span>
            <ChevronUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
