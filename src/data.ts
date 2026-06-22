import { Product, Story, VideoItem, Category } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: "firoozeh",
    title: "فیروزه‌کوبی اصفهان",
    icon: "Sparkles",
    itemCount: 142,
    colorClass: "from-[#009DA0]/10 to-[#009DA0]/20 text-[#009DA0]"
  },
  {
    id: "pottery",
    title: "سفال و سرامیک لالجین",
    icon: "CupSoda",
    itemCount: 389,
    colorClass: "from-amber-500/10 to-amber-600/20 text-amber-700"
  },
  {
    id: "carpet",
    title: "فرش، گلیم و جاجیم",
    icon: "Grid3X3",
    itemCount: 512,
    colorClass: "from-emerald-500/10 to-emerald-600/20 text-emerald-700"
  },
  {
    id: "minakari",
    title: "میناکاری و قلم‌زنی",
    icon: "Palette",
    itemCount: 224,
    colorClass: "from-blue-500/10 to-blue-600/20 text-blue-700"
  },
  {
    id: "khatam",
    title: "خاتم‌کاری و صنایع چوب",
    icon: "Layers",
    itemCount: 188,
    colorClass: "from-amber-700/10 to-amber-800/20 text-amber-800"
  },
  {
    id: "termeh",
    title: "ترمه، قلمکار و پارچه",
    icon: "Scissors",
    itemCount: 95,
    colorClass: "from-rose-500/10 to-rose-600/20 text-rose-700"
  },
  {
    id: "jewelry",
    title: "زیورآلات سنتی",
    icon: "Gem",
    itemCount: 310,
    colorClass: "from-cyan-500/10 to-cyan-600/20 text-cyan-700"
  },
  {
    id: "organic",
    title: "محصولات محلی و ارگانیک",
    icon: "Leaf",
    itemCount: 420,
    colorClass: "from-green-500/10 to-green-600/20 text-green-700"
  }
];

export const STORIES: Story[] = [
  {
    id: "st_1",
    title: "کارگاه مینا",
    imageUrl: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=400&q=80",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    artistName: "استاد زهرا غفاری",
    slides: [
      {
        id: "st_1_1",
        mediaUrl: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
        caption: "امروز می‌خوام مراحل نقاشی روی مس لعاب‌خورده رو براتون بذارم. طرح ختایی اسلیمی...",
        productId: "p_1"
      },
      {
        id: "st_1_2",
        mediaUrl: "https://images.unsplash.com/photo-1528255620054-6d4b917fa11d?auto=format&fit=crop&w=800&q=80",
        caption: "بعد از کوره رفتن، رنگ‌ها این‌طور درخشان و ثابت میشن. اصالت یک هنر ۳۰۰۰ ساله اصفهانی.",
        productId: "p_1"
      }
    ]
  },
  {
    id: "st_2",
    title: "خاک و لعاب",
    imageUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&q=80",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    artistName: "غرفه سفال لالجین",
    slides: [
      {
        id: "st_2_1",
        mediaUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
        caption: "چگونه ظروف سفالی فیروزه‌ای لالجین با عشق دست‌ساز میشن. خاک رس ناب همدان.",
        productId: "p_2"
      }
    ]
  },
  {
    id: "st_3",
    title: "تار و پود عشق",
    imageUrl: "https://images.unsplash.com/photo-1576016770956-debb63d90029?auto=format&fit=crop&w=400&q=80",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    artistName: "بی‌بی گل مریم",
    slides: [
      {
        id: "st_3_1",
        mediaUrl: "https://images.unsplash.com/photo-1576016770956-debb63d90029?auto=format&fit=crop&w=800&q=80",
        caption: "گلیم قشقایی با رنگ‌های صددرصد گیاهی و پشم طبیعی دست‌ریس. دسترنج زنان هنرمند ایل.",
        productId: "p_3"
      }
    ]
  },
  {
    id: "st_4",
    title: "نقش فیروزه",
    imageUrl: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=400&q=80",
    avatarUrl: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=150&q=80",
    artistName: "کارگاه فیروزه‌کوبی اعلا",
    slides: [
      {
        id: "st_4_1",
        mediaUrl: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
        caption: "چسباندن تک‌تک سنگ‌های فیروزه نیشابور روی بدنه مسی با ظرافت میلی‌متری.",
        productId: "p_4"
      }
    ]
  },
  {
    id: "st_5",
    title: "هنر چوب و مس",
    imageUrl: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=400&q=80",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    artistName: "امیرحسین خاتمی",
    slides: [
      {
        id: "st_5_1",
        mediaUrl: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80",
        caption: "خاتم شیراز ترکیبی بی‌نظیر از استخوان شتر، سیم برنجی و چوب‌های تزئینی.",
        productId: "p_5"
      }
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "p_1",
    title: "بشقاب میناکاری اصفهان اثر استاد غفاری - قطر ۳۰ سانتی‌متر",
    price: 850000,
    discountPrice: 720000,
    discountPercentage: 15,
    rating: 4.8,
    reviewsCount: 34,
    imageUrl: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80",
    category: "minakari",
    originCity: "اصفهان",
    artistName: "استاد زهرا غفاری",
    artistAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    shopName: "نگارستان مینا",
    description: "بشقاب میناکاری مسی درجه یک با نقاشی اسلیمی ظریف و پرکار. این اثر زیبا دارای سه لایه لعاب نسوز کوره بوده و مقاومت کامل در برابر خش، رطوبت و تغییر رنگ دارد.",
    dimensions: "قطر ۳۰ سانتی‌متر",
    material: "مس اعلا با رنگ‌های معدنی",
    weight: "۴۲۰ گرم",
    stock: 5,
    isSpecial: true
  },
  {
    id: "p_2",
    title: "کاسه پایه دار سفالی لعاب فیروزه‌ای لالجین همدان",
    price: 240000,
    discountPrice: 198000,
    discountPercentage: 18,
    rating: 4.6,
    reviewsCount: 112,
    imageUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80",
    category: "pottery",
    originCity: "لالجین، همدان",
    artistName: "برادران عسگری",
    artistAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    shopName: "سفالینه خاک مهر",
    description: "کاسه سنتی سفالی با لعاب فیروزه‌ای اصیل و بسیار مقاوم. ایده آل برای دکوراسیون سفره هفت‌سین، پذیرایی آجیل و یا استفاده روزمره به عنوان بشقاب سنتی جذاب.",
    dimensions: "دهانه ۲۰ سانتی‌متر، ارتفاع ۱۲ سانتی‌متر",
    material: "خاک رس سفید و لعاب قلع‌دار فیروزه‌ای",
    weight: "۶5۰ گرم",
    stock: 24,
    isSpecial: true
  },
  {
    id: "p_3",
    title: "گلیم دستبافت قشقایی طرح خورشید - پشم طبیعی رنگ گیاهی",
    price: 3200000,
    discountPrice: 2890000,
    discountPercentage: 10,
    rating: 4.9,
    reviewsCount: 12,
    imageUrl: "https://images.unsplash.com/photo-1576016770956-debb63d90029?auto=format&fit=crop&w=600&q=80",
    category: "carpet",
    originCity: "شیراز (ایل قشقایی)",
    artistName: "بی‌بی گل مریم قشقایی",
    artistAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    shopName: "سیاه‌چادر گلیم ابلق",
    description: "گلیم اصیل قشقایی دو رو دستباف، بافته‌شده در ارتفاعات زاگرس. تمامی رنگ‌ها از گیاهان روناس، پوست گردو و اسپرک سنتی استخراج شده و پشم آن با دست ریسیده شده است.",
    dimensions: "۱۵۰ × ۱۰۰ سانتی‌متر",
    material: "تار و پود پشم بره طبیعی",
    weight: "۱.۸ کیلوگرم",
    stock: 1,
    isSpecial: true
  },
  {
    id: "p_4",
    title: "قندان مسی فیروزه‌کوب شاهکار نیشابور اعلا",
    price: 1450000,
    discountPrice: 1190000,
    discountPercentage: 18,
    rating: 4.7,
    reviewsCount: 45,
    imageUrl: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
    category: "firoozeh",
    originCity: "اصفهان / نیشابور",
    artistName: "استاد کریمیان",
    artistAvatar: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=150&q=80",
    shopName: "فیروزه‌سرای نیشابور",
    description: "قندان مجلل فیروزه‌کوبی روی مس با پوشش فوق‌العاده ۴ لایه پلی‌استر ضدخش و ضدرطوبت ساخت آلمان. این ظرف با سنگ‌های اصل فیروزه نیشابور تزیین شده است.",
    dimensions: "ارتفاع ۱۸ سانتی‌متر",
    material: "مس خالص ۹۹.۹٪ و فیروزه اصیل نیشابور",
    weight: "۳۱۰ گرم",
    stock: 4,
    isSpecial: true
  },
  {
    id: "p_5",
    title: "جعبه جواهرات خاتم‌کاری اعلا طرح نگارگری مینیاتور",
    price: 490000,
    rating: 4.5,
    reviewsCount: 56,
    imageUrl: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80",
    category: "khatam",
    originCity: "شیراز",
    artistName: "امیرحسین خاتمی",
    artistAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    shopName: "کارگاه هنر پارسه",
    description: "جعبه جواهر چوبی مجلل با بدنه تمام‌خاتم پرسیم باکیفیت و درب نقاشی مینیاتور تذهیب اثر دستان هنرمندان شیرازی. داخل جعبه با مخمل جیر قرمز آراسته شده است.",
    dimensions: "۱۲ × ۸ سانتی‌متر، عمق ۵ سانتی‌متر",
    material: "استخوان شتر، فلز برنج، چوب عناب و پلی‌استر محافظ",
    weight: "۱8۰ گرم",
    stock: 15,
    isSpecial: false
  },
  {
    id: "p_6",
    title: "گلدان مسی قلم‌زنی سیاه قلم دوره صفوی کبیر",
    price: 1950000,
    discountPrice: 1750000,
    discountPercentage: 10,
    rating: 4.8,
    reviewsCount: 19,
    imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
    category: "minakari",
    originCity: "اصفهان",
    artistName: "استاد اصغر میرزایی",
    artistAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    shopName: "هنر کده نصف جهان",
    description: "گلدان مجلل فلزی قلمزنی‌شده به سبک اصیل صفوی با نقره‌کوبی ملایم و لعاب سیاه برای پدیداری شکوهمند خطوط اسلیمی و شکارگاه نگارگری ایرانی.",
    dimensions: "ارتفاع ۲۵ سانتی‌متر",
    material: "مس سرخ قلع‌کاری‌شده با قلم‌زنی عمیق",
    weight: "۷۸۰ گرم",
    stock: 2,
    isSpecial: false
  },
  {
    id: "p_7",
    title: "شکلات خوری سفالی تزیینی دست‌ساز اویاره بومی",
    price: 180000,
    rating: 4.2,
    reviewsCount: 8,
    imageUrl: "https://images.unsplash.com/photo-1528255620054-6d4b917fa11d?auto=format&fit=crop&w=600&q=80",
    category: "pottery",
    originCity: "میبد، یزد",
    artistName: "طیبه دهقانی",
    artistAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    shopName: "سرامیک نقش خورشید",
    description: "یک ظرف بسیار زیبا برای پذیرایی شکلات، خرما و شیرینی با نقاشی اصیل مرغ و ماهی میبد یزد. پخته‌شده در کوره سنتی با دوام و استحکام حیرت‌آور لعاب شیشه‌ای.",
    dimensions: "قطر ۱۵ سانتی‌متر",
    material: "سفال طبیعی کویر ایران با لعاب فریت حرارت بالا",
    weight: "۳۵۰ گرم",
    stock: 45,
    isSpecial: false
  },
  {
    id: "p_8",
    title: "بقچه ترمه اصل یزد طرح سالار ۵ رنگ هاشمی",
    price: 980000,
    discountPrice: 890000,
    discountPercentage: 9,
    rating: 4.9,
    reviewsCount: 27,
    imageUrl: "https://images.unsplash.com/photo-1608797178974-15b35a61d121?auto=format&fit=crop&w=600&q=80",
    category: "termeh",
    originCity: "یزد",
    artistName: "صنایع نساجی ترمه هاشمی",
    artistAvatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80",
    shopName: "شعربافی رضوان",
    description: "پارچه گرانبهای ترمه ابریشمی با تراکم بافت فوق‌العاده بالا و آسترکشی مخمل ممتاز جهت سفره‌های عقد، سجاده، رومیزی عید و هدیه بی‌نظیر برای علاقمندان سنت ایرانی.",
    dimensions: "۱۰۰ × ۱۰۰ سانتی‌متر",
    material: "ابریشم مصنوعی (ویسکوز) ضدآب ممتاز و مخمل نخی",
    weight: "۴۹۰ گرم",
    stock: 8,
    isSpecial: true
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: "v_1",
    title: "مراحل جادویی فیروزه‌کوبی روی گلدان‌های بزرگ مسی 🏺",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-artist-painting-on-canvas-with-brush-close-up-34289-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=400&q=80",
    likes: 1245,
    shopName: "فیروزه‌سرای نیشابور",
    shopAvatar: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=150&q=80",
    productId: "p_4"
  },
  {
    id: "v_2",
    title: "چرخ سفالگری و نوازش خاک سرد لالجین گام به گام 🤲🏻",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-potter-shaping-clay-on-pottery-wheel-44249-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&q=80",
    likes: 3102,
    shopName: "سفالینه خاک مهر",
    shopAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    productId: "p_2"
  },
  {
    id: "v_3",
    title: "دستان زحمت‌کش بی‌بی مریم در حال گره زدن گلیم قشلاقی 🧶",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-weaving-thread-on-a-wooden-loom-38938-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1576016770956-debb63d90029?auto=format&fit=crop&w=400&q=80",
    likes: 832,
    shopName: "سیاه‌چادر گلیم ابلق",
    shopAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    productId: "p_3"
  }
];

export const BANNER_SLIDES = [
  {
    id: "slide_1",
    title: "تجلی هنر ناب ۳۰۰۰ ساله اصفهان در دستان شما",
    subtitle: "مستقیم از غرفه‌های برگزیده سراسر ایران با پشتیبانی ۲۴ ساعته و تضمین اصالت کالا",
    tag: "شگفت‌انگیزترین‌های مینا و فیروزه‌کوب",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "slide_2",
    title: "اصالت کهن کوچ‌نشینان؛ گلیم و فرش عشایری",
    subtitle: "تار و پودی بافته شده از پشم گوسفند دست‌ریس و رنگرزی تمام گیاهی غرفه‌داران بومی زاگرس",
    tag: "تخفیف ویژه ۱۲٪ گلیم دست‌بافت",
    image: "https://images.unsplash.com/photo-1576016770956-debb63d90029?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "slide_3",
    title: "سفر به خاک ناب کویر و لعاب طلایی لالجین",
    subtitle: "ظروف سفالی پرخاطره و سرامیک‌های مدرن دست‌ساز با امضای اختصاصی هنرمند غرفه‌دار",
    tag: "ارسال مستقیم و ایمن از همدان",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80"
  }
];
