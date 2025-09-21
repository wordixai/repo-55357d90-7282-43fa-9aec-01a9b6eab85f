import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface WishlistItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category?: string;
  artist?: string;
  rating?: number;
}

interface WishlistState {
  items: WishlistItem[];
  isOpen: boolean;
  addItem: (product: WishlistItem) => void;
  removeItem: (id: number) => void;
  clearWishlist: () => void;
  toggleWishlist: () => void;
  isInWishlist: (id: number) => boolean;
  getTotalItems: () => number;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      addItem: (product) => {
        const items = get().items;
        const existingItem = items.find(item => item.id === product.id);
        
        if (!existingItem) {
          set({
            items: [...items, product]
          });
        }
      },
      
      removeItem: (id) => {
        set({
          items: get().items.filter(item => item.id !== id)
        });
      },
      
      clearWishlist: () => {
        set({ items: [] });
      },
      
      toggleWishlist: () => {
        set({ isOpen: !get().isOpen });
      },
      
      isInWishlist: (id) => {
        return get().items.some(item => item.id === id);
      },
      
      getTotalItems: () => {
        return get().items.length;
      }
    }),
    {
      name: 'wishlist-storage',
    }
  )
);