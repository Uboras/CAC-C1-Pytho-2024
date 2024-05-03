const slider = document.querySelector('.slider-lateral');
const slides = document.querySelectorAll('.slide-lateral');
let index = 0;

document.querySelector('.prev').addEventListener('click', () => {
    index = (index === 0) ? slides.length - 1 : index - 1;
    updateSlider();
});

document.querySelector('.next').addEventListener('click', () => {
    index = (index === slides.length - 1) ? 0 : index + 1;
    updateSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
}
