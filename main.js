// Cart Logic
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(productId, quantity, color, material) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId && item.color === color && item.material === material);
    
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ id: productId, quantity, color, material, product });
    }
    saveCart();
    alert('Añadido al carrito');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCheckout();
}

function updateQuantity(index, quantity) {
    if (quantity < 1) return;
    cart[index].quantity = quantity;
    saveCart();
    renderCheckout();
}

function clearCart() {
    cart = [];
    saveCart();
}

function updateCartBadge() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
        badge.textContent = total;
        badge.style.display = total > 0 ? 'inline-flex' : 'none';
    });
}

// UI Components
const Header = () => `
    <header class="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <button class="p-2 -ml-2 mr-2 md:hidden mobile-menu-btn">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
            <a href="index.html" class="text-xl font-bold tracking-tighter">LUMA</a>
          </div>
          
          <nav class="hidden md:flex space-x-8">
            <a href="category.html?id=asientos-premium" class="text-sm font-medium text-gray-900 hover:text-gray-600">Muebles</a>
            <a href="category.html?id=iluminacion" class="text-sm font-medium text-gray-500 hover:text-gray-900">Iluminación</a>
            <a href="category.html?id=decoracion" class="text-sm font-medium text-gray-500 hover:text-gray-900">Decoración</a>
            <a href="collections.html" class="text-sm font-medium text-gray-500 hover:text-gray-900">Colecciones</a>
          </nav>

          <div class="flex items-center space-x-4">
            <button class="p-2 text-gray-400 hover:text-gray-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
            <button class="p-2 text-gray-400 hover:text-gray-500 hidden sm:block">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </button>
            <a href="checkout.html" class="p-2 text-gray-400 hover:text-gray-500 relative">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              <span class="cart-badge absolute top-1 right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-black rounded-full" style="display: none;">0</span>
            </a>
          </div>
        </div>
      </div>
      <div class="mobile-menu hidden md:hidden border-t border-gray-100 bg-white">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="category.html?id=asientos-premium" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Muebles</a>
            <a href="category.html?id=iluminacion" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Iluminación</a>
            <a href="category.html?id=decoracion" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Decoración</a>
            <a href="collections.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Colecciones</a>
          </div>
      </div>
    </header>
`;

const Footer = () => `
    <footer class="bg-gray-50 border-t border-gray-200 pt-16 pb-8 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 class="text-lg font-bold tracking-tighter mb-4">LUMA</h3>
            <p class="text-sm text-gray-500 leading-relaxed">
              Diseño atemporal para el hogar moderno. Creando espacios que inspiran y reconfortan.
            </p>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Comprar</h4>
            <ul class="space-y-3">
              <li><a href="category.html?id=asientos-premium" class="text-sm text-gray-500 hover:text-gray-900">Muebles</a></li>
              <li><a href="category.html?id=iluminacion" class="text-sm text-gray-500 hover:text-gray-900">Iluminación</a></li>
              <li><a href="category.html?id=decoracion" class="text-sm text-gray-500 hover:text-gray-900">Decoración</a></li>
              <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900">Novedades</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Soporte</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900">FAQ</a></li>
              <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900">Envíos y Devoluciones</a></li>
              <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900">Contacto</a></li>
              <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900">Garantía</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Newsletter</h4>
            <p class="text-sm text-gray-500 mb-4">Suscríbete para recibir noticias, colecciones y ofertas exclusivas.</p>
            <form class="flex">
              <input type="email" placeholder="Tu email" class="flex-1 min-w-0 px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:ring-black focus:border-black">
              <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-black hover:bg-gray-800">Suscribir</button>
            </form>
          </div>
        </div>
        <div class="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm text-gray-400">&copy; 2026 LUMA Design. Todos los derechos reservados.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-sm text-gray-400 hover:text-gray-900">Privacidad</a>
            <a href="#" class="text-sm text-gray-400 hover:text-gray-900">Términos</a>
          </div>
        </div>
      </div>
    </footer>
`;

// Helper for query params
const getParam = (name) => new URLSearchParams(window.location.search).get(name);

// Page Renderers
function renderHome() {
    const featured = products.slice(0, 4);
    const grid = document.getElementById('featured-products');
    if (!grid) return;
    
    grid.innerHTML = featured.map(p => `
        <a href="product.html?id=${p.id}" class="group">
            <div class="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-2xl mb-4">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                ${p.isNew ? '<span class="absolute top-4 left-4 px-2.5 py-1 bg-white text-xs font-bold uppercase rounded-md">Nuevo</span>' : ''}
                ${p.isBestseller && !p.isNew ? '<span class="absolute top-4 left-4 px-2.5 py-1 bg-black text-white text-xs font-bold uppercase rounded-md">Más vendido</span>' : ''}
            </div>
            <h3 class="text-sm font-medium text-gray-900 mb-1">${p.name}</h3>
            <div class="flex justify-between">
                <p class="text-sm text-gray-500">$${p.price}</p>
                ${p.originalPrice ? `<p class="text-sm text-gray-400 line-through">$${p.originalPrice}</p>` : ''}
            </div>
        </a>
    `).join('');
}

function renderCategory() {
    const id = getParam('id') || 'asientos-premium';
    const category = categories.find(c => c.id === id);
    const filtered = products.filter(p => p.category === id);
    
    document.title = `${category.name} | LUMA`;
    const titleEl = document.getElementById('category-title');
    if (titleEl) titleEl.textContent = category.name;
    
    const grid = document.getElementById('category-products');
    if (!grid) return;
    
    grid.innerHTML = filtered.map(p => `
        <a href="product.html?id=${p.id}" class="group">
            <div class="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-2xl mb-4">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="flex justify-between items-start">
                <div>
                    <h3 class="text-sm font-medium text-gray-900 mb-1">${p.name}</h3>
                    <p class="text-sm text-gray-500">${p.materials[0]}</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$${p.price}</p>
            </div>
        </a>
    `).join('');
}

function renderProduct() {
    const id = getParam('id');
    const product = products.find(p => p.id === id);
    if (!product) return;

    document.title = `${product.name} | LUMA`;
    const container = document.getElementById('product-container');
    if (!container) return;

    container.innerHTML = `
        <div class="lg:grid lg:grid-cols-2 lg:gap-x-12 py-12">
            <div class="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
                <img src="${product.image}" class="w-full h-full object-cover">
            </div>
            <div class="mt-10 lg:mt-0 lg:px-8">
                <h1 class="text-3xl font-bold mb-4">${product.name}</h1>
                <p class="text-2xl mb-6">$${product.price}</p>
                <p class="text-gray-600 mb-8">${product.description}</p>
                
                <div class="space-y-6">
                    <div>
                        <h3 class="text-sm font-medium mb-4">Color</h3>
                        <div class="flex gap-3">
                            ${product.colors.map(c => `<button class="w-8 h-8 rounded-full border-2 border-transparent hover:border-black" style="background-color: ${c}" onclick="window.selectedColor='${c}'"></button>`).join('')}
                        </div>
                    </div>
                    <button onclick="addToCart('${product.id}', 1, window.selectedColor || '${product.colors[0]}')" class="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-900">Añadir al carrito</button>
                </div>
            </div>
        </div>
    `;
}

function renderCollections() {
    const container = document.getElementById('collections-list');
    if (!container) return;
    
    container.innerHTML = collectionsData.map((c, i) => `
        <div class="flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}">
            <div class="w-full lg:w-1/2">
                <img src="${c.image}" class="rounded-2xl w-full aspect-[4/3] object-cover">
            </div>
            <div class="w-full lg:w-1/2 lg:px-12">
                <h2 class="text-3xl font-bold mb-6">${c.title}</h2>
                <p class="text-gray-600 mb-8">${c.description}</p>
                <a href="${c.link}" class="inline-flex items-center font-medium">Explorar colección</a>
            </div>
        </div>
    `).join('');
}

function renderCheckout() {
    const list = document.getElementById('checkout-items');
    if (!list) return;
    
    if (cart.length === 0) {
        list.innerHTML = '<div class="text-center py-12"><h2 class="text-2xl font-bold">Tu carrito está vacío</h2><a href="index.html" class="mt-4 inline-block text-black underline">Seguir comprando</a></div>';
        const summary = document.getElementById('checkout-summary');
        if (summary) summary.style.display = 'none';
        return;
    }

    list.innerHTML = cart.map((item, i) => `
        <div class="flex gap-4 py-4 border-b">
            <img src="${item.product.image}" class="w-20 h-20 object-cover rounded-lg">
            <div class="flex-1">
                <h3 class="font-medium">${item.product.name}</h3>
                <p class="text-sm text-gray-500">${item.color || ''}</p>
                <div class="flex items-center mt-2">
                    <button onclick="updateQuantity(${i}, ${item.quantity - 1})" class="p-1 border rounded">-</button>
                    <span class="px-4">${item.quantity}</span>
                    <button onclick="updateQuantity(${i}, ${item.quantity + 1})" class="p-1 border rounded">+</button>
                    <button onclick="removeFromCart(${i})" class="ml-auto text-xs text-red-500">Eliminar</button>
                </div>
            </div>
            <p class="font-medium">$${(item.product.price * item.quantity).toFixed(2)}</p>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const tax = subtotal * 0.21;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Initializer
document.addEventListener('DOMContentLoaded', () => {
    // Inject Header/Footer
    const body = document.body;
    body.insertAdjacentHTML('afterbegin', Header());
    body.insertAdjacentHTML('beforeend', Footer());
    
    // Setup Mobile Menu
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.mobile-menu');
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => menu.classList.toggle('hidden'));
    }

    updateCartBadge();

    // Route specific renders
    const path = window.location.pathname;
    if (path.includes('index.html') || path === '/' || path.endsWith('/')) renderHome();
    if (path.includes('category.html')) renderCategory();
    if (path.includes('product.html')) renderProduct();
    if (path.includes('collections.html')) renderCollections();
    if (path.includes('checkout.html')) renderCheckout();
});
