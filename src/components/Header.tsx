import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { $totalItems } from '../stores/cartStore';

export const Header: React.FC = () => {
  const totalItems = useStore($totalItems);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              className="p-2 -ml-2 mr-2 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <a href="/" className="text-xl font-bold tracking-tighter">LUMA</a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/category/asientos-premium" className="text-sm font-medium text-gray-900 hover:text-gray-600">Muebles</a>
            <a href="/category/iluminacion" className="text-sm font-medium text-gray-500 hover:text-gray-900">Iluminación</a>
            <a href="/category/decoracion" className="text-sm font-medium text-gray-500 hover:text-gray-900">Decoración</a>
            <a href="/colecciones" className="text-sm font-medium text-gray-500 hover:text-gray-900">Colecciones</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500 hidden sm:block">
              <User className="w-5 h-5" />
            </button>
            <a href="/checkout" className="p-2 text-gray-400 hover:text-gray-500 relative">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-black rounded-full">
                  {totalItems}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/category/asientos-premium" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Muebles</a>
            <a href="/category/iluminacion" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Iluminación</a>
            <a href="/category/decoracion" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Decoración</a>
            <a href="/colecciones" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Colecciones</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
