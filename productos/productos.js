document.addEventListener('DOMContentLoaded', () => {
    let cart = [];

    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const btnCheckout = document.getElementById('btn-checkout');
    const btnClear = document.getElementById('btn-clear');

    // Escuchar clics en los botones "Agregar" de la tabla
    document.querySelectorAll('.btn-add').forEach(button => {
        button.addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            
            const product = {
                id: button.dataset.id,
                name: row.querySelector('.prod-name').textContent,
                price: parseFloat(row.querySelector('.prod-price').dataset.price),
                quantity: 1
            };

            addToCart(product);
        });
    });

    // Función para agregar o incrementar producto
    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push(product);
        }

        renderCart();
    }

    // Función para eliminar producto del carrito
    window.removeFromCart = function(id) {
        cart = cart.filter(item => item.id !== id);
        renderCart();
    };

    // Función para renderizar interfaz del carrito
    function renderCart() {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart-msg">El carrito está vacío.</p>';
            cartTotalElement.textContent = 'S/. 0.00';
            btnCheckout.disabled = true;
            return;
        }

        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">S/. ${item.price.toFixed(2)} x ${item.quantity} = S/. ${itemTotal.toFixed(2)}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="btn-remove" onclick="removeFromCart('${item.id}')">&times;</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
        });

        cartTotalElement.textContent = `S/. ${total.toFixed(2)}`;
        btnCheckout.disabled = false;
    }

    // Vaciar Carrito
    btnClear.addEventListener('click', () => {
        cart = [];
        renderCart();
    });

    // Evento de Checkout / Procesar compra
    btnCheckout.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('¡Gracias por su compra! Procesando pedido...');
            cart = [];
            renderCart();
        }
    });
});