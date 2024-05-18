
import Swiper from "swiper";

let swiper; // Объявляем переменную для хранения экземпляра Swiper

function initSwiper() {
    swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

function destroySwiper() {
    if (swiper !== undefined) {
        swiper.destroy();
        swiper = undefined; // Сбрасываем переменную
    }
}

function handleResize() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        destroySwiper();
    } else {
        initSwiper();
    }
}

window.addEventListener('resize', handleResize);

// Инициализируем Swiper при загрузке страницы
window.addEventListener('DOMContentLoaded', function() {
    handleResize(); // Вызываем обработчик при загрузке страницы
});



 

const brandItem = document.querySelectorAll('.brand__item');
const brandsButtonShow = document.querySelector('.brands__button-show');
const spanElement = brandsButtonShow.querySelector('span');

// Функция для корректировки видимости элементов брендов в зависимости от ширины экрана
function adjustBrandItemsVisibility() {
  if (window.innerWidth > 1119) {
    brandItem.forEach((item, index) => {
      if (index < 8) {
        item.classList.remove('invisible');
      } else {
        item.classList.add('invisible');
      }
    });
  } else if (window.innerWidth > 767) {
    brandItem.forEach((item, index) => {
      if (index < 6) {
        item.classList.remove('invisible');
      } else {
        item.classList.add('invisible');
      }
    });
  }
}

// Инициализация состояния видимости при загрузке страницы
adjustBrandItemsVisibility();

brandsButtonShow.addEventListener('click', () => {
  brandsButtonShow.classList.toggle('brands__button_hiden');

  if (brandsButtonShow.classList.contains('brands__button_hiden')) {
    spanElement.textContent = 'Скрыть';
    brandItem.forEach(item => {
      item.classList.remove('invisible');
    });
  } else {
    spanElement.textContent = 'Показать все';
    adjustBrandItemsVisibility();
  }
});

// Обновление видимости при изменении размера окна
window.addEventListener('resize', adjustBrandItemsVisibility);