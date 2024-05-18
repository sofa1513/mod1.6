/* Модалки */

const { call } = require("file-loader");



 // Выбираем все кнопки для открытия модального окна "call"
const callBtns = document.querySelectorAll('.call');

// Выбираем все кнопки для открытия модального окна "chat"
const chatBtns = document.querySelectorAll('.chat');

// Выбираем кнопку закрытия модального окна
const popCloseBtns = document.querySelectorAll('.popup__btn-close');

// Выбираем все модальные окна
const popups = document.querySelectorAll('.popup');

const callModal = document.querySelectorAll('.popup__call');

const chatModal = document.querySelectorAll('.popup__chat');

const wrapper = document.querySelector('.wrapper');




// Добавляем обработчики событий на все кнопки "call" для открытия модального окна "call"
callBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    callModal.forEach(modal => {
      modal.classList.add('popup--open');
      modal.classList.remove('popup--closed');
       
    });
   
  
  });
  
}); 




// Добавляем обработчики событий на все кнопки "chat" для открытия модального окна "chat"
chatBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    chatModal.forEach(modal => {
      modal.classList.add('popup--open');
      modal.classList.remove('popup--closed');
       
    });
   
   
  });

});


 
// Добавляем обработчики событий на кнопку закрытия модальных окон
popCloseBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    callModal.forEach(modal => {
      modal.classList.remove('popup--open');
    });
    chatModal.forEach(modal => {
      modal.classList.remove('popup--open');
    });
   
    popups.forEach(popup => {
      popup.classList.add('popup--closed');
    });
   
  });
});


wrapper.addEventListener('click', function(event) {
  if (!event.target.closest('#call') && !event.target.closest('#chat')) {
      callModal.forEach(modal => {
          modal.classList.remove('popup--open');
      });
      chatModal.forEach(modal => {
          modal.classList.remove('popup--open');
      });
  
      popups.forEach(popup => {
          popup.classList.add('popup--closed');
      });
  }
});