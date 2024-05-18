import Swiper from "swiper";

let swiperB; // Переменная для хранения экземпляра первого Swiper
let swiperS; // Переменная для хранения экземпляра второго Swiper

// Функция инициализации первого Swiper
function initSwiperB() {
    swiperB = new Swiper(".mySwiperServ", {
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
    swiperS = new Swiper(".mySwiperPr", {
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
const spanElementServ = serviceButtonShow.querySelector('span');


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
if (serviceButtonShow.classList.contains('service__button_hiden')) {
  spanElementServ.textContent = 'Скрыть';
} else {
  spanElementServ.textContent = 'Показать все';
}
}); 

