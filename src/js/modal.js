/* Модалки */



 // Выбираем все кнопки для открытия модального окна "call"
const callBtns = document.querySelectorAll('.call');

// Выбираем все кнопки для открытия модального окна "chat"
const chatBtns = document.querySelectorAll('.chat');

// Выбираем кнопку закрытия модального окна
const popCloseBtns = document.querySelectorAll('.popup__btn-close');

// Выбираем все модальные окна
const popups = document.querySelectorAll('.popup');

const wrapper = document.querySelector('.wrapper');

// Функция для открытия модального окна
function openModal(popup) {
  popup.style.display = 'block'; // Показываем модальное окно
  wrapper.classList.add('wrapper--blur');
}

// Функция для закрытия модального окна
function closeModal() {
  popups.forEach(popup => {
    popup.style.display = 'none';
    wrapper.classList.remove('wrapper--blur');
  });
  
}

// Добавляем обработчик клика на каждую кнопку "call"
callBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    openModal(document.querySelector('.popup__call'));
  });
});

// Добавляем обработчик клика на каждую кнопку "chat"
chatBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    openModal(document.querySelector('.popup__chat'));
  });
});

// Добавляем обработчик клика на кнопку закрытия модального окна
popCloseBtns.forEach(btn => {
  btn.addEventListener('click', closeModal);
});


  
document.addEventListener('dblclick', (event) => {
  popups.forEach(popup => {
    const isClickInsidePopup = popup.contains(event.target);
    const isClickOnPopup = event.target.matches('.popup');

    if (!isClickInsidePopup && !isClickOnPopup) {
      closeModal(); 
    }
  });
}); 