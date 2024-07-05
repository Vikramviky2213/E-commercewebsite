document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById('cart-count');
    const addToCartButton = document.getElementById('add-to-cart');
    let cartCount = 0;

    addToCartButton.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
    });
});
