import * as Icons from "lucide-react";
import { Category } from "../types";

interface CategorySectionProps {
  categories: Category[];
  activeCategory: string | null;
  onSelectCategory: (id: string | null) => void;
}

export default function CategorySection({
  categories,
  activeCategory,
  onSelectCategory
}: CategorySectionProps) {
  
  // Helper to render lucide icon by text key
  const renderIcon = (iconName: string, size = 24) => {
    const IconComp = (Icons as any)[iconName];
    if (IconComp) return <IconComp size={size} />;
    return <Icons.HelpCircle size={size} />;
  };

  return (
    <section id="categories-grid-section" className="py-8 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight">
              خرید بر اساس دسته‌بندی آثار سنتی
            </h3>
            <p className="text-xs text-gray-400 font-light mt-1">
              هنردستان بی‌مانند استان‌های برگزیده ایران زمین
            </p>
          </div>
          
          {activeCategory && (
            <button
              onClick={() => onSelectCategory(null)}
              className="text-xs font-bold text-[#009DA0] hover:text-teal-600 transition-colors border-b border-[#009DA0]/20 pb-0.5 cursor-pointer"
            >
              پاک کردن فیلترها
            </button>
          )}
        </div>

        {/* Categories Circle Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
          {categories.map((category) => {
            const isSelected = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(isSelected ? null : category.id)}
                className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 group cursor-pointer border ${
                  isSelected
                    ? "border-[#009DA0] bg-[#009DA0]/5"
                    : "border-gray-100 hover:border-gray-200 hover:bg-gray-50/50"
                }`}
              >
                {/* Rounded Icon Bubble */}
                <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${category.colorClass} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300`}>
                  {renderIcon(category.icon)}
                </div>
                
                <span className="text-xs font-bold text-gray-700 text-center line-clamp-1 group-hover:text-[#009DA0] transition-colors">
                  {category.title}
                </span>

                <span className="text-[10px] text-gray-400 font-light font-mono mt-1">
                  {category.itemCount.toLocaleString("fa-IR")} اثر فعال
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
