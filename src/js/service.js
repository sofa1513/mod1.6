 // import Swiper bundle with all modules installed
 import Swiper from 'swiper/bundle';

 // import styles bundle
 import 'swiper/css/bundle';

let swiperB; // Переменная для хранения экземпляра первого Swiper
let swiperS; // Переменная для хранения экземпляра второго Swiper

// Функция инициализации первого Swiper
function initSwiperB() {
    swiperB = new Swiper(".mySwiper1", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

// Функция инициализации второго Swiper
function initSwiperS() {
    swiperS = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

// Функция уничтожения Swiper
function destroySwiper(swiper) {
    if (swiper !== undefined) {
        swiper.destroy();
        swiper = undefined; // Сбрасываем переменную
    }
}

// Обработчик изменения размера экрана
function handleResize() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        destroySwiper(swiperB);
        destroySwiper(swiperS);
    } else {
        initSwiperB();
        initSwiperS();
    }
}

// Инициализируем Swiper при загрузке страницы
window.addEventListener('DOMContentLoaded', function() {
    handleResize(); // Вызываем обработчик при загрузке страницы
});

// Обработчик изменения размера окна
window.addEventListener('resize', handleResize);





let serviceItem = document.querySelectorAll('.service__item');
let serviceButtonShow = document.querySelector('.service__button-show');

// Initial hiding of elements based on window width
if (window.innerWidth > 1119) {
  for (let i = 4; i < serviceItem.length; i++) {
    serviceItem[i].classList.add('invisible');
  }
} else if (window.innerWidth > 767) {
  for (let i = 3; i < serviceItem.length; i++) {
    serviceItem[i].classList.add('invisible');
  }
}

serviceButtonShow.addEventListener('click', function () {
  serviceButtonShow.classList.toggle('service__button_hiden');
  
  if (window.innerWidth > 1119) {
    for (let i = 4; i < serviceItem.length; i++) {
      serviceItem[i].classList.toggle('invisible');
    }
  } else if (window.innerWidth > 767) {
    for (let i = 3; i < serviceItem.length; i++) {
      serviceItem[i].classList.toggle('invisible');
    }
  }
});