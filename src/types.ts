export interface Product {
  id: string;
  title: string;
  price: number;
  discountPrice?: number;
  discountPercentage?: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  category: string;
  originCity: string;
  artistName: string;
  artistAvatar: string;
  shopName: string;
  description: string;
  dimensions?: string;
  material?: string;
  weight?: string;
  stock: number;
  isSpecial?: boolean;
}

export interface Story {
  id: string;
  title: string;
  imageUrl: string;
  avatarUrl: string;
  artistName: string;
  slides: {
    id: string;
    mediaUrl: string;
    caption: string;
    productId?: string;
  }[];
}

export interface VideoItem {
  id: string;
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  likes: number;
  shopName: string;
  shopAvatar: string;
  productId: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  itemCount: number;
  colorClass: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
