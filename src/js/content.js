// Получаем все ссылки навигации
const navLinks = document.querySelectorAll('.nav__link');

// Функция для обработки события клика
function handleNavLinkClick(event) {
  const target = event.target;
  // Проверяем, является ли кликнутый элемент ссылкой внутри навигации
  if (target.classList.contains('nav__link')) {
    // Удаляем класс у любой ранее активной ссылки
    navLinks.forEach(link => {
      link.classList.remove('nav__link--active');
    });
    // Добавляем класс к кликнутой ссылке
    target.classList.add('nav__link--active');
  }
}

// Добавляем обработчик события клика к родительскому контейнеру навигации
const navContainer = document.querySelector('.nav__list'); 
navContainer.addEventListener('click', handleNavLinkClick);


//читать далее


 const moreBtn = document.querySelector('.content__more-btn');
const hiddenText = document.querySelectorAll('.content__text-hidden');

hiddenText.forEach(function(text) {
    text.style.display = 'none'; // Изначально скрываем блоки текста
});


moreBtn.addEventListener('click', function() {
  hiddenText.forEach(function(text) {
      if (text.style.display === 'none') {
          text.style.display = 'block'; // Показываем скрытый текст
      } else {
          text.style.display = 'none'; // Скрываем текст, если он уже видим
      }
  });

  moreBtn.textContent = moreBtn.textContent.includes('Читать далее') ? 'Скрыть' : 'Читать далее';// Обновляем текст кнопки
  moreBtn.classList.toggle('flipped'); // Переключаем класс для анимации
});

/*  Сайдбар */
const burgerBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('.close');
const sidebar = document.querySelector('.sidebar');
const wrapper = document.querySelector('.wrapper');

burgerBtn.addEventListener('click', () => {
  sidebar.classList.add('sidebar--open');
  wrapper.classList.add('wrapper--blur');

});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('sidebar--open');
  wrapper.classList.remove('wrapper--blur');
 
});

document.addEventListener('click', (event) => {
  const isClickInsideSidebar = sidebar.contains(event.target); // Проверяем, был ли клик внутри сайдбара
  const isClickOnBurger = event.target.matches('.burger'); // Проверяем, был ли клик на кнопку открытия сайдбара

  if (!isClickInsideSidebar && !isClickOnBurger) {
    sidebar.classList.remove('sidebar--open');
    wrapper.classList.remove('wrapper--blur');
  }
});