const images = document.querySelectorAll('.carousel img');
let currentIndex = 0;

document.getElementById('prev').addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    images[currentIndex].classList.add('active');
});

document.getElementById('next').addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    images[currentIndex].classList.add('active');
});

document.getElementById('add-to-cart').addEventListener('click', () => {
    alert('Product added to cart!');
});
 