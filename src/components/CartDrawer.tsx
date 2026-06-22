import { useState } from "react";
import { X, ShoppingBag, Trash2, ArrowLeft, ArrowRight, Plus, Minus, CheckCircle, CreditCard, Ship } from "lucide-react";
import { CartItem } from "../types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

type CheckoutStep = "basket" | "shipping" | "success";

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [step, setStep] = useState<CheckoutStep>("basket");
  
  // Shipping details state
  const [shippingInfo, setShippingInfo] = useState({
    name: "علیرضا گازر",
    phone: "09123456789",
    city: "تهران",
    address: "خیابان ولیعصر، نرسیده به میدان ونک، بن‌بست لاله، پلاک ۴",
    postalCode: "1435789612"
  });

  if (!isOpen) return null;

  // Subtotal calculations
  const subtotal = cart.reduce((acc, item) => {
    const activePrice = item.product.discountPrice ?? item.product.price;
    return acc + activePrice * item.quantity;
  }, 0);

  const shippingCost = subtotal > 1000000 ? 0 : 35000;

  const handleNextStep = () => {
    if (step === "basket") setStep("shipping");
    else if (step === "shipping") {
      setStep("success");
    }
  };

  const handlePrevStep = () => {
    if (step === "shipping") setStep("basket");
  };

  const handleFinalOrder = () => {
    onClearCart();
    setStep("basket");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end" dir="rtl">
      {/* Background closer click area */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Slide pane */}
      <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between animate-slide-left z-10 text-right">
        
        {/* Header Block with Step Indicators */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-50 text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
            <h3 className="text-base sm:text-lg font-black text-slate-800 flex items-center gap-2">
              <ShoppingBag size={20} className="text-[#009DA0]" />
              <span>سبد خرید سنتی شما</span>
            </h3>
          </div>

          <span className="text-xs bg-[#009DA0]/10 text-[#009DA0] px-3 py-1 rounded-full font-bold">
            {cart.length.toLocaleString("fa-IR")} اثر هنری
          </span>
        </div>

        {/* Steps navigation header bar */}
        {cart.length > 0 && (
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-100 flex items-center justify-center gap-4 text-xs font-semibold text-slate-400 select-none">
            <span className={`${step === "basket" ? "text-[#009DA0] font-black" : "text-slate-400"}`}>۱. فاکتور آثار</span>
            <span className="h-1 w-6 bg-slate-200 rounded-full" />
            <span className={`${step === "shipping" ? "text-[#0000] text-[#009DA0] font-black" : "text-slate-400"}`}>۲. نشانی کارگاه</span>
            <span className="h-1 w-6 bg-slate-200 rounded-full" />
            <span className={`${step === "success" ? "text-emerald-600 font-black" : ""}`}>۳. سفارشنامه موفق</span>
          </div>
        )}

        {/* Dynamic Display Body */}
        <div className="flex-1 overflow-y-auto p-6">
          
          {/* 1. Empty State */}
          {cart.length === 0 && step !== "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="h-20 w-20 rounded-3xl bg-[#009DA0]/5 text-[#009DA0]/40 flex items-center justify-center mb-6 border border-[#009DA0]/10 border-dashed animate-pulse">
                <ShoppingBag size={36} />
              </div>
              <h4 className="text-base font-bold text-slate-700">سبد خرید شما فعلاً خالی است!</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-sm leading-relaxed">
                هنرآرایی خانه‌تان را آغاز کنید. ده‌ها اثر مینیاتور، گلیم قشقایی و سفالینه‌های لعاب‌دار منتظر دستان شما هستند.
              </p>
              <button
                onClick={onClose}
                className="mt-6 bg-[#009DA0] hover:bg-teal-500 text-white text-xs font-black px-6 py-3 rounded-xl shadow-lg shadow-[#009DA0]/20 transition-all cursor-pointer"
              >
                بازدید از بازارچه آراسته
              </button>
            </div>
          ) : (
            
            /* Active Cart Displays */
            <>
              {/* STEP 1: Basket Listing */}
              {step === "basket" && (
                <div className="flex flex-col gap-4">
                  {cart.map((item) => {
                    const activePrice = item.product.discountPrice ?? item.product.price;
                    return (
                      <div
                        key={item.product.id}
                        className="flex items-center gap-4 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 shadow-sm hover:bg-slate-50 transition-colors"
                      >
                        <img
                          src={item.product.imageUrl}
                          alt={item.product.title}
                          referrerPolicy="no-referrer"
                          className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl object-cover border border-slate-200"
                        />

                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-slate-400 font-bold mb-1">غرفه {item.product.shopName}</p>
                          <h4 className="text-xs sm:text-xs font-bold text-slate-800 line-clamp-1 mb-2">
                            {item.product.title}
                          </h4>
                          
                          <p className="text-xs font-black text-[#009DA0]">
                            {activePrice.toLocaleString("fa-IR")} تومان
                          </p>
                        </div>

                        {/* Modifiers Column */}
                        <div className="flex flex-col items-end gap-3 justify-between">
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-slate-300 hover:text-red-500 transition-colors focus:outline-none cursor-pointer"
                            title="حذف اثر"
                          >
                            <Trash2 size={15} />
                          </button>

                          {/* Incrementor */}
                          <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg p-0.5 shadow-sm">
                            <button
                              onClick={() => {
                                if (item.quantity > 1) {
                                  onUpdateQuantity(item.product.id, item.quantity - 1);
                                } else {
                                  onRemoveItem(item.product.id);
                                }
                              }}
                              className="p-1 hover:bg-slate-50 text-slate-500 rounded cursor-pointer"
                            >
                              <Minus size={10} />
                            </button>
                            <span className="text-xs font-black text-slate-700 w-5 text-center">
                              {item.quantity.toLocaleString("fa-IR")}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 hover:bg-slate-50 text-slate-500 rounded cursor-pointer"
                            >
                              <Plus size={10} />
                            </button>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              )}

              {/* STEP 2: Shipping details forms */}
              {step === "shipping" && (
                <div className="flex flex-col gap-5 text-right">
                  <div className="bg-[#009DA0]/5 border border-[#009DA0]/10 p-4 rounded-2xl flex items-start gap-3">
                    <Ship size={18} className="text-[#009DA0] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">نشانی دقیق کارگاه سنتی ارسال‌کننده</h4>
                      <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                        آثار به دلیل حجم زیاد و شکنندگی بالا به طور موازی از هر کارگاه با شبکه‌های توزیع ایمن چاپار یا تیپاکس صادر خواهند شد.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500">مادرگیر و تحویل‌گیرنده:</label>
                    <input
                      type="text"
                      value={shippingInfo.name}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                      className="w-full text-xs font-bold p-3 rounded-lg border border-slate-200 outline-none focus:border-[#009DA0] bg-slate-50"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500">شماره تماس ثابت/همراه:</label>
                    <input
                      type="text"
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                      className="w-full text-xs font-bold p-3 rounded-lg border border-slate-200 outline-none focus:border-[#009DA0] bg-slate-50 font-mono text-left"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500">استان و شهر:</label>
                    <input
                      type="text"
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                      className="w-full text-xs font-bold p-3 rounded-lg border border-[#009DA0] outline-none focus:border-[#009DA0] bg-slate-50"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500">آدرس دقیق پستی جهت تحویل کالا:</label>
                    <textarea
                      rows={3}
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                      className="w-full text-xs font-semibold p-3 rounded-lg border border-slate-200 outline-none focus:border-[#009DA0] bg-slate-50"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Success payment screen */}
              {step === "success" && (
                <div className="h-full flex flex-col items-center justify-center text-center animate-scale-up">
                  <div className="h-20 w-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/10">
                    <CheckCircle size={44} />
                  </div>
                  <h4 className="text-lg font-black text-slate-800">سفارش شما با موفقیت ثبت شد 🎉</h4>
                  <p className="text-xs bg-emerald-500/10 text-emerald-800 font-bold px-3 py-1 rounded-full mt-2 w-fit mx-auto select-none">
                    کد پیگیری: #AR-{(Math.floor(Math.random() * 89999) + 10000).toLocaleString("fa-IR")}
                  </p>
                  
                  <div className="my-6 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-right text-slate-600 space-y-2.5 w-full">
                    <p>🧑🏼‍💼 <strong>تحویل‌گیرنده:</strong> {shippingInfo.name}</p>
                    <p>📍 <strong>محل تحویل:</strong> {shippingInfo.city}، {shippingInfo.address}</p>
                    <p>📞 <strong>شماره تماس:</strong> {shippingInfo.phone}</p>
                    <p>📦 <strong>ارسال مستقیم از کارگاه:</strong> ۲ الی ۴ روز کاری کوره/گلیم منحصربفرد</p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                    دست‌سازه‌های اصیل شما به دستان باذوق فیاض به زودی بسته‌بندی شده و راهی آشیانه گرمتان می‌گردد. از رونق به معیشت غرفه‌سازان سنتی سپاسگزاریم.
                  </p>

                  <button
                    onClick={handleFinalOrder}
                    className="mt-8 bg-slate-900 hover:bg-black text-white text-xs font-black px-6 py-3 rounded-xl shadow-lg transition-all cursor-pointer w-full text-center"
                  >
                    بسیار عالی - بازگشت به بازارچه
                  </button>
                </div>
              )}
            </>
          )}

        </div>

        {/* Footer Subtotals and Actions (not shown on success step) */}
        {cart.length > 0 && step !== "success" && (
          <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col gap-4">
            
            {/* Breakdowns */}
            <div className="space-y-2.5 text-xs text-slate-600 font-medium">
              <div className="flex items-center justify-between">
                <span>جمع ارزش آثار انتخابی:</span>
                <span className="font-bold text-slate-800">{subtotal.toLocaleString("fa-IR")} تومان</span>
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <span>بیمه حمل و بسته بندی ضربه‌گیر:</span>
                <span>{shippingCost === 0 ? "رایگان (خرید بالا ۱ میلیون)" : `${shippingCost.toLocaleString("fa-IR")} تومان`}</span>
              </div>

              <div className="border-t border-slate-200 my-2 pt-2 flex items-center justify-between text-sm text-[#009DA0] font-black">
                <span>جمع کل خرید:</span>
                <span>{(subtotal + shippingCost).toLocaleString("fa-IR")} تومان</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              {step === "shipping" && (
                <button
                  onClick={handlePrevStep}
                  className="px-4 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-600 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <ArrowRight size={14} />
                  <span>برگشت</span>
                </button>
              )}

              <button
                onClick={handleNextStep}
                className="flex-1 py-3.5 bg-[#009DA0] hover:bg-teal-500 text-white rounded-xl text-xs font-black shadow-lg shadow-[#009DA0]/20 hover:scale-[1.02] active:scale-95 transition-all text-center cursor-pointer flex items-center justify-center gap-2"
              >
                {step === "basket" ? (
                  <>
                    <span>ثبت و تکمیل نشانی تحویل</span>
                    <ArrowLeft size={14} />
                  </>
                ) : (
                  <>
                    <CreditCard size={14} />
                    <span>فینال و تایید نهایی پرداخت</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
