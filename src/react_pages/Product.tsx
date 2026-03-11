import React, { useState } from 'react';
import { Star, Truck, Shield, RotateCcw, Plus, Minus } from 'lucide-react';
import { products } from '../data/mockData';
import { addToCart } from '../stores/cartStore';

interface ProductProps {
  productId?: string;
}

export const Product: React.FC<ProductProps> = ({ productId }) => {
  const product = products.find(p => p.id === productId) || products[0];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedMaterial, setSelectedMaterial] = useState(product.materials[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedMaterial);
    alert('Añadido al carrito');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-gray-500 mb-8">
        <a href="/" className="hover:text-gray-900">Inicio</a>
        <span className="mx-2">/</span>
        <a href={`/category/${product.category}`} className="hover:text-gray-900 capitalize">
          {product.category.replace('-', ' ')}
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{product.name}</span>
      </nav>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6 mb-10 lg:mb-0">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible lg:w-24 flex-shrink-0">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative aspect-square rounded-lg overflow-hidden flex-shrink-0 w-20 lg:w-full ${selectedImage === idx ? 'ring-2 ring-black' : 'ring-1 ring-gray-200'}`}
              >
                <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          {/* Main Image */}
          <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[700px] w-full bg-gray-100 rounded-2xl overflow-hidden">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">{product.rating} ({product.reviews} reseñas)</span>
            </div>
            <div className="flex items-baseline gap-4">
              <p className="text-2xl font-medium text-gray-900">${product.price}</p>
              {product.originalPrice && (
                <p className="text-lg text-gray-500 line-through">${product.originalPrice}</p>
              )}
            </div>
            <p className="mt-6 text-base text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-8 border-t border-gray-200 pt-8">
            {/* Configurator: Color */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <span className="text-sm text-gray-500">{selectedColor}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${selectedColor === color ? 'border-black' : 'border-transparent ring-1 ring-gray-200'}`}
                  >
                    <span className="w-8 h-8 rounded-full" style={{ backgroundColor: color }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Configurator: Material */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium text-gray-900">Material</h3>
                <span className="text-sm text-gray-500">{selectedMaterial}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {product.materials.map((material, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedMaterial(material)}
                    className={`px-4 py-3 text-sm font-medium rounded-lg border ${selectedMaterial === material ? 'border-black bg-gray-50 text-black' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-gray-500 hover:text-black"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-gray-500 hover:text-black"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-900 transition-colors"
              >
                Añadir al carrito
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 py-6 border-y border-gray-200">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">Envío gratis</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">10 años garantía</span>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">30 días dev.</span>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex border-b border-gray-200">
              <button 
                onClick={() => setActiveTab('details')}
                className={`pb-4 text-sm font-medium mr-8 ${activeTab === 'details' ? 'border-b-2 border-black text-black' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Detalles
              </button>
              <button 
                onClick={() => setActiveTab('dimensions')}
                className={`pb-4 text-sm font-medium mr-8 ${activeTab === 'dimensions' ? 'border-b-2 border-black text-black' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Dimensiones
              </button>
              <button 
                onClick={() => setActiveTab('care')}
                className={`pb-4 text-sm font-medium ${activeTab === 'care' ? 'border-b-2 border-black text-black' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Cuidado
              </button>
            </div>
            <div className="py-6 text-sm text-gray-600">
              {activeTab === 'details' && (
                <ul className="list-disc pl-5 space-y-2">
                  <li>Estructura de madera maciza secada al horno.</li>
                  <li>Cojines de asiento de espuma de alta resiliencia envueltos en fibra.</li>
                  <li>Patas de acero con acabado en polvo negro.</li>
                  <li>Diseñado en Barcelona, fabricado en Europa.</li>
                </ul>
              )}
              {activeTab === 'dimensions' && (
                <div className="space-y-2">
                  <p><span className="font-medium text-gray-900">General:</span> {product.dimensions}</p>
                  <p><span className="font-medium text-gray-900">Peso:</span> {product.weight}</p>
                  <p><span className="font-medium text-gray-900">Altura del asiento:</span> 45cm</p>
                  <p><span className="font-medium text-gray-900">Profundidad del asiento:</span> 60cm</p>
                </div>
              )}
              {activeTab === 'care' && (
                <p>
                  Aspirar regularmente. Limpiar las manchas inmediatamente con un paño húmedo y limpio. No frotar. Para manchas difíciles, recomendamos limpieza profesional. Evitar la luz solar directa para prevenir la decoloración.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-16 border-t border-gray-200">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Completa el Look</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.filter(p => p.id !== product.id).slice(0, 4).map(p => (
            <a key={p.id} href={`/product/${p.id}`} className="group">
              <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-xl mb-4">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900">{p.name}</h3>
              <p className="text-sm text-gray-500 mt-1">${p.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
