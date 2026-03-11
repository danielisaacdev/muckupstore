import React from 'react';
import { ArrowRight } from 'lucide-react';

const collectionsData = [
  {
    id: 'esencia-nordica',
    title: 'Esencia Nórdica',
    description: 'Líneas puras, maderas claras y una paleta de colores serena. Esta colección trae la luz y la calma de los paisajes escandinavos directamente a tu hogar, priorizando la funcionalidad sin perder la calidez.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200',
    link: '/category/asientos-premium'
  },
  {
    id: 'brutalismo-moderno',
    title: 'Brutalismo Moderno',
    description: 'Materiales crudos, formas geométricas audaces y una presencia imponente. Para espacios que buscan hacer una declaración de intenciones fuerte y sofisticada, combinando metales oscuros con cueros premium.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    link: '/category/asientos-premium'
  },
  {
    id: 'refugio-natural',
    title: 'Refugio Natural',
    description: 'Texturas orgánicas, tonos tierra y formas fluidas que invitan al descanso. Una colección diseñada para reconectar con la naturaleza desde el interior, utilizando linos lavados y maderas sin tratar.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200',
    link: '/category/asientos-premium'
  }
];

export const Collections: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">Nuestras Colecciones</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Descubre nuestras series exclusivas, cada una con una identidad única diseñada para transformar tu espacio y reflejar tu estilo personal.
        </p>
      </div>

      {/* Collections List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-24">
        {collectionsData.map((collection, index) => (
          <div key={collection.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:px-12">
              <span className="text-sm font-semibold tracking-wider uppercase text-gray-500 mb-4 block">
                Colección 0{index + 1}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{collection.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {collection.description}
              </p>
              <a 
                href={collection.link} 
                className="inline-flex items-center text-base font-medium text-black hover:text-gray-600 transition-colors group"
              >
                Explorar colección 
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
