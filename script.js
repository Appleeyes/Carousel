const slides = document.querySelectorAll('.slide');

const leftArr = document.querySelector('.left-arrow');
const rightArr = document.querySelector('.right-arrow');

let currSlide = 0;

function displaySlide() {

    slides.forEach(slide => {
        if (slide.classList.contains('visible')) slide.classList.remove('visible')  
        if (!slide.classList.contains('hidden')) {
            slide.classList.add('invisible');
            setTimeout(() => {
                slide.classList.add('hidden')
            }, 300);
        }
    });

    setTimeout(() => {
        slides[currSlide].classList.remove('hidden');
        slides[currSlide].classList.add('invisible');
        
        setTimeout(() => {
            slides[currSlide].classList.remove('invisible');
            slides[currSlide].classList.add('visible');
        }, 100);
    }, 100); 
}

// Next slide function
function nextSlide() {
    currSlide++;
    if (currSlide === slides.length) currSlide = 0;
    displaySlide();
}

// Previous slide function
function prevSlide() {
    currSlide--;
    if (currSlide < 0 ) currSlide = slides.length - 1;
    displaySlide();
}

// Event handlers
leftArr.addEventListener('click', prevSlide)
rightArr.addEventListener('click', nextSlide)