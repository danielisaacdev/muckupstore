import { persistentMap } from '@nanostores/persistent';
import { computed } from 'nanostores';
import { Product } from '../data/mockData';

export interface CartItem {
  product: Product;
  quantity: number;
  color?: string;
  material?: string;
}

// We use persistentMap to keep the cart in localStorage automatically
export const cartItems = persistentMap<Record<string, string>>('cart:', {});

export function addToCart(product: Product, quantity: number, color?: string, material?: string) {
  const cartId = `${product.id}-${color || ''}-${material || ''}`;
  const existing = cartItems.get()[cartId];
  
  if (existing) {
    const item: CartItem = JSON.parse(existing);
    cartItems.setKey(cartId, JSON.stringify({ ...item, quantity: item.quantity + quantity }));
  } else {
    cartItems.setKey(cartId, JSON.stringify({ product, quantity, color, material }));
  }
}

export function removeFromCart(cartId: string) {
  cartItems.setKey(cartId, undefined as any);
}

export function updateQuantity(cartId: string, quantity: number) {
  const existing = cartItems.get()[cartId];
  if (existing) {
    const item: CartItem = JSON.parse(existing);
    cartItems.setKey(cartId, JSON.stringify({ ...item, quantity }));
  }
}

export function clearCart() {
  const keys = Object.keys(cartItems.get());
  keys.forEach(key => cartItems.setKey(key, undefined as any));
}

export const $cartItemsList = computed(cartItems, (items) => {
  return Object.values(items).map(itemStr => JSON.parse(itemStr) as CartItem);
});

export const $totalItems = computed($cartItemsList, (items) => {
  return items.reduce((sum, item) => sum + item.quantity, 0);
});

export const $totalPrice = computed($cartItemsList, (items) => {
  return items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
});
