// Client-side cart logic
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    // Dispatch custom event for other components to react
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: cart }));
}

export function addToCart(product, quantity, color, material) {
    const existing = cart.find(item => item.id === product.id && item.color === color && item.material === material);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ id: product.id, quantity, color, material, product });
    }
    saveCart();
    alert('Añadido al carrito');
}

export function removeFromCart(index) {
    cart.splice(index, 1);
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

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    
    // Setup mobile menu
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.mobile-menu');
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => menu.classList.toggle('hidden'));
    }
});

// Expose to window for inline onclicks if needed (though not ideal)
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
