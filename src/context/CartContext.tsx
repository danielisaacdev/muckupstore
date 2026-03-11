import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../data/mockData';

interface CartItem {
  product: Product;
  quantity: number;
  color?: string;
  material?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number, color?: string, material?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number, color?: string, material?: string) => {
    setItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id && item.color === color && item.material === material);
      if (existingItem) {
        return prev.map(item => 
          item === existingItem ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity, color, material }];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setItems(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
