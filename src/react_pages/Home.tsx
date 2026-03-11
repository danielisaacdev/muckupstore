import React from 'react';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/mockData';

export const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
            alt="Interior moderno" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wider uppercase mb-6">
            Nueva Colección Otoño
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Eleva tu Santuario
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Descubre piezas diseñadas para transformar tu espacio en un refugio de calma y estilo. Materiales nobles, líneas puras.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/category/asientos-premium" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Explorar Colección
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Piezas Destacadas</h2>
              <p className="text-gray-500">Selección curada de nuestros favoritos.</p>
            </div>
            <a href="/category/asientos-premium" className="hidden sm:flex items-center text-sm font-medium text-gray-900 hover:text-gray-600">
              Ver todo <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <a key={product.id} href={`/product/${product.id}`} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-2xl mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 px-2.5 py-1 bg-white text-xs font-bold uppercase tracking-wider rounded-md">
                      Nuevo
                    </span>
                  )}
                  {product.isBestseller && !product.isNew && (
                    <span className="absolute top-4 left-4 px-2.5 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-md">
                      Más vendido
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">${product.price}</p>
                  {product.originalPrice && (
                    <p className="text-sm text-gray-400 line-through">${product.originalPrice}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <a href="/category/asientos-premium" className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              Ver todo
            </a>
          </div>
        </div>
      </section>

      {/* Room Inspiration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Inspiración por Estancia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000" 
                alt="Sala de estar" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold text-white mb-2">Sala de Estar</h3>
                <span className="inline-flex items-center text-white/90 text-sm font-medium group-hover:text-white transition-colors">
                  Comprar la estancia <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1000" 
                alt="Dormitorio" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold text-white mb-2">Dormitorio</h3>
                <span className="inline-flex items-center text-white/90 text-sm font-medium group-hover:text-white transition-colors">
                  Comprar la estancia <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
