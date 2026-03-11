import React, { useState } from 'react';
import { ChevronDown, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { products, categories } from '../data/mockData';

const categoryHeroData: Record<string, { image: string, subtitle: string }> = {
  'asientos-premium': {
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2000',
    subtitle: 'El arte de sentarse'
  },
  'iluminacion': {
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2000',
    subtitle: 'Esculpiendo con luz'
  },
  'decoracion': {
    image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=2000',
    subtitle: 'Detalles que importan'
  }
};

interface CategoryProps {
  categoryId?: string;
}

export const Category: React.FC<CategoryProps> = ({ categoryId }) => {
  const category = categories.find(c => c.id === categoryId) || categories[0];
  const categoryProducts = products.filter(p => p.category === category.id);
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const heroData = categoryHeroData[category.id] || {
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000',
    subtitle: 'Colección Exclusiva'
  };

  const editorialProducts = categoryProducts.slice(0, 2);
  const gridProducts = categoryProducts.slice(2);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroData.image} 
            alt={category.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wider uppercase mb-4">
            {heroData.subtitle}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            {category.name}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
            Nuestra colección de {category.name.toLowerCase()} está diseñada para ofrecer el máximo confort sin comprometer la estética. Cada pieza es una declaración de intenciones.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-gray-500 mb-16">
          <a href="/" className="hover:text-gray-900">Inicio</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{category.name}</span>
        </nav>

        {/* Editorial Section */}
        {editorialProducts.length > 0 && (
          <div className="space-y-24 mb-24">
            {editorialProducts.map((product, index) => (
              <div key={product.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <a href={`/product/${product.id}`} className="block relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 group">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {product.isNew && (
                      <span className="absolute top-6 left-6 px-3 py-1.5 bg-white text-xs font-bold uppercase tracking-wider rounded-md shadow-sm">
                        Nuevo
                      </span>
                    )}
                  </a>
                </div>
                <div className="w-full lg:w-1/2 lg:px-12">
                  <span className="text-sm font-semibold tracking-wider uppercase text-gray-500 mb-4 block">
                    Pieza Destacada
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h2>
                  <p className="text-2xl font-light text-gray-500 mb-6">${product.price}</p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  <a 
                    href={`/product/${product.id}`} 
                    className="inline-flex items-center text-base font-medium text-black hover:text-gray-600 transition-colors group"
                  >
                    Ver detalles 
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Divider */}
        {gridProducts.length > 0 && (
          <div className="border-t border-gray-200 pt-16 mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Explorar Catálogo</h2>
                <p className="text-gray-500">Descubre todas las piezas de la colección.</p>
              </div>
              <div className="mt-6 md:mt-0 text-sm text-gray-500">
                {gridProducts.length} productos adicionales
              </div>
            </div>
          </div>
        )}

        {/* Grid Section */}
        {gridProducts.length > 0 && (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Filters Sidebar - Desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Categorías</h3>
                  <ul className="space-y-3">
                    {categories.map(cat => (
                      <li key={cat.id}>
                        <a 
                          href={`/category/${cat.id}`} 
                          className={`text-sm ${cat.id === category.id ? 'font-medium text-black' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                          {cat.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Precio</h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                      <span className="ml-3 text-sm text-gray-600">Menos de $500</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                      <span className="ml-3 text-sm text-gray-600">$500 - $1000</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                      <span className="ml-3 text-sm text-gray-600">Más de $1000</span>
                    </label>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Material</h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                      <span className="ml-3 text-sm text-gray-600">Cuero</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                      <span className="ml-3 text-sm text-gray-600">Lino</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                      <span className="ml-3 text-sm text-gray-600">Terciopelo</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between lg:justify-end mb-8 pb-4 border-b border-gray-200">
                <button 
                  className="lg:hidden flex items-center text-sm font-medium text-gray-700"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filtros
                </button>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">Ordenar por:</span>
                  <button className="flex items-center text-sm font-medium text-gray-900">
                    Recomendados <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
                {gridProducts.map(product => (
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
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-full py-3 bg-white/90 backdrop-blur text-black text-sm font-medium rounded-lg hover:bg-white">
                          Vista Rápida
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.materials[0]}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">${product.price}</p>
                        {product.originalPrice && (
                          <p className="text-xs text-gray-400 line-through">${product.originalPrice}</p>
                        )}
                      </div>
                    </div>
                    {product.colors && product.colors.length > 0 && (
                      <div className="flex gap-1 mt-3">
                        {product.colors.slice(0, 4).map((color, idx) => (
                          <div 
                            key={idx} 
                            className="w-4 h-4 rounded-full border border-gray-200"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                        {product.colors.length > 4 && (
                          <span className="text-xs text-gray-500 ml-1">+{product.colors.length - 4}</span>
                        )}
                      </div>
                    )}
                  </a>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-16 flex items-center justify-center border-t border-gray-200 pt-8">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
                    Anterior
                  </button>
                  <button className="px-4 py-2 rounded-md bg-black text-white text-sm font-medium">1</button>
                  <button className="px-4 py-2 rounded-md text-gray-500 hover:bg-gray-50 text-sm font-medium">2</button>
                  <button className="px-4 py-2 rounded-md text-gray-500 hover:bg-gray-50 text-sm font-medium">3</button>
                  <span className="px-2 text-gray-500">...</span>
                  <button className="px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Siguiente
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
