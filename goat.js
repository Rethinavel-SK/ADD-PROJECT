let cart = [];
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart-btn');
const checkoutBtn = document.getElementById('checkout-btn');

// Function to update the cart display
function updateCart() {
    // Update cart count
    cartCount.textContent = cart.length;

    // Update cart items
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    // Update total price
    totalPrice.textContent = total;
}

// Add product to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const name = e.target.getAttribute('data-name');
        const price = parseFloat(e.target.getAttribute('data-price'));

        // Add item to cart array
        cart.push({ name, price });

        // Update cart display
        updateCart();
    });
});

// Show cart modal
document.getElementById('cart-btn').addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

// Close cart modal
closeCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Checkout functionality
checkoutBtn.addEventListener('click', () => {
    alert(`Total Price: $${totalPrice.textContent}\nThank you for your purchase!`);
    cart = []; // Clear the cart
    updateCart(); // Update the cart display
    cartModal.style.display = 'none'; // Close the cart modal
});