import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold tracking-tighter mb-4">LUMA</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Diseño atemporal para el hogar moderno. Creando espacios que inspiran y reconfortan.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Comprar</h4>
            <ul className="space-y-3">
              <li><a href="/category/asientos-premium" className="text-sm text-gray-500 hover:text-gray-900">Muebles</a></li>
              <li><a href="/category/iluminacion" className="text-sm text-gray-500 hover:text-gray-900">Iluminación</a></li>
              <li><a href="/category/decoracion" className="text-sm text-gray-500 hover:text-gray-900">Decoración</a></li>
              <li><a href="/novedades" className="text-sm text-gray-500 hover:text-gray-900">Novedades</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Soporte</h4>
            <ul className="space-y-3">
              <li><a href="/faq" className="text-sm text-gray-500 hover:text-gray-900">FAQ</a></li>
              <li><a href="/envios" className="text-sm text-gray-500 hover:text-gray-900">Envíos y Devoluciones</a></li>
              <li><a href="/contacto" className="text-sm text-gray-500 hover:text-gray-900">Contacto</a></li>
              <li><a href="/garantia" className="text-sm text-gray-500 hover:text-gray-900">Garantía</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-4">Suscríbete para recibir noticias, colecciones y ofertas exclusivas.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="flex-1 min-w-0 px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:ring-black focus:border-black"
              />
              <button 
                type="submit" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2026 LUMA Design. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacidad" className="text-sm text-gray-400 hover:text-gray-900">Privacidad</a>
            <a href="/terminos" className="text-sm text-gray-400 hover:text-gray-900">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
