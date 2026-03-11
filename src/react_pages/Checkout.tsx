import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import { $cartItemsList, $totalPrice } from '../stores/cartStore';
import { ChevronRight, CreditCard, Lock } from 'lucide-react';

export const Checkout: React.FC = () => {
  const items = useStore($cartItemsList);
  const totalPrice = useStore($totalPrice);
  
  const [step, setStep] = useState(1); // 1: Info, 2: Shipping, 3: Payment
  const shippingCost = 0; // Free shipping
  const tax = totalPrice * 0.21; // 21% IVA
  const finalTotal = totalPrice + shippingCost + tax;

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Tu carrito está vacío</h1>
        <p className="text-gray-500 mb-8">Parece que aún no has añadido ningún producto a tu carrito.</p>
        <a href="/category/asientos-premium" className="inline-block bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-900">
          Explorar productos
        </a>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column - Forms */}
          <div className="flex-1">
            {/* Progress Bar */}
            <nav className="flex items-center text-sm font-medium text-gray-500 mb-8">
              <span className={step >= 1 ? 'text-black' : ''}>Información</span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className={step >= 2 ? 'text-black' : ''}>Envío</span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className={step >= 3 ? 'text-black' : ''}>Pago</span>
            </nav>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              {/* Step 1: Contact & Address */}
              <div className={step !== 1 ? 'hidden' : 'block'}>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Información de contacto</h2>
                <div className="space-y-4 mb-8">
                  <input type="email" placeholder="Correo electrónico" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black" />
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                    <span className="ml-2 text-sm text-gray-600">Enviarme novedades y ofertas exclusivas</span>
                  </label>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-6">Dirección de envío</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Nombre" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black" />
                  <input type="text" placeholder="Apellidos" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black" />
                  <input type="text" placeholder="Dirección" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black sm:col-span-2" />
                  <input type="text" placeholder="Apartamento, local, etc. (opcional)" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black sm:col-span-2" />
                  <input type="text" placeholder="Código postal" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black" />
                  <input type="text" placeholder="Ciudad" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black" />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black sm:col-span-2 bg-white">
                    <option>España</option>
                    <option>Portugal</option>
                    <option>Francia</option>
                  </select>
                  <input type="tel" placeholder="Teléfono" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black sm:col-span-2" />
                </div>

                <div className="mt-8 flex justify-end">
                  <button 
                    onClick={() => setStep(2)}
                    className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-900"
                  >
                    Continuar a envíos
                  </button>
                </div>
              </div>

              {/* Step 2: Shipping Method */}
              <div className={step !== 2 ? 'hidden' : 'block'}>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Método de envío</h2>
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-4 border-2 border-black rounded-lg cursor-pointer">
                    <div className="flex items-center">
                      <input type="radio" name="shipping" defaultChecked className="text-black focus:ring-black" />
                      <div className="ml-4">
                        <span className="block text-sm font-medium text-gray-900">Envío Estándar</span>
                        <span className="block text-sm text-gray-500">3-5 días laborables</span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">Gratis</span>
                  </label>
                  <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-gray-300">
                    <div className="flex items-center">
                      <input type="radio" name="shipping" className="text-black focus:ring-black" />
                      <div className="ml-4">
                        <span className="block text-sm font-medium text-gray-900">Envío Express</span>
                        <span className="block text-sm text-gray-500">1-2 días laborables</span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">$29.00</span>
                  </label>
                  <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-gray-300">
                    <div className="flex items-center">
                      <input type="radio" name="shipping" className="text-black focus:ring-black" />
                      <div className="ml-4">
                        <span className="block text-sm font-medium text-gray-900">Servicio Guante Blanco</span>
                        <span className="block text-sm text-gray-500">Entrega en habitación, montaje y retirada de embalaje</span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">$99.00</span>
                  </label>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <button onClick={() => setStep(1)} className="text-sm font-medium text-gray-600 hover:text-black">
                    Volver a información
                  </button>
                  <button 
                    onClick={() => setStep(3)}
                    className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-900"
                  >
                    Continuar al pago
                  </button>
                </div>
              </div>

              {/* Step 3: Payment */}
              <div className={step !== 3 ? 'hidden' : 'block'}>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Pago</h2>
                <p className="text-sm text-gray-500 mb-6">Todas las transacciones son seguras y están encriptadas.</p>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="p-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
                    <div className="flex items-center">
                      <input type="radio" name="payment" defaultChecked className="text-black focus:ring-black" />
                      <span className="ml-3 text-sm font-medium text-gray-900">Tarjeta de crédito</span>
                    </div>
                    <div className="flex gap-2">
                      <CreditCard className="w-6 h-6 text-gray-400" />
                    </div>
                  </div>
                  <div className="p-4 space-y-4 bg-white">
                    <input type="text" placeholder="Número de tarjeta" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black" />
                    <input type="text" placeholder="Nombre en la tarjeta" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black" />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Fecha de exp. (MM/AA)" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black" />
                      <input type="text" placeholder="Código de seguridad" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black" />
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-200 flex items-center">
                    <input type="radio" name="payment" className="text-black focus:ring-black" />
                    <span className="ml-3 text-sm font-medium text-gray-900">PayPal</span>
                  </div>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <button onClick={() => setStep(2)} className="text-sm font-medium text-gray-600 hover:text-black">
                    Volver a envíos
                  </button>
                  <button 
                    className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-900 flex items-center"
                    onClick={() => alert('¡Pedido completado!')}
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    Pagar ${finalTotal.toFixed(2)}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-96 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Resumen del pedido</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 relative">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 text-white text-xs flex items-center justify-center rounded-full">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{item.product.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.color && <span className="mr-2">Color: {item.color}</span>}
                        {item.material && <span>Material: {item.material}</span>}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium text-gray-900">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Envío</span>
                  <span className="font-medium text-gray-900">{shippingCost === 0 ? 'Gratis' : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Impuestos (21%)</span>
                  <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between items-center">
                <span className="text-base font-bold text-gray-900">Total</span>
                <span className="text-xl font-bold text-gray-900">${finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
