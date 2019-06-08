var popupBasket = document.querySelector(".modal-basket-tools");
var buttonBasket = document.querySelector(".buy");
var closeBasket = popupBasket.querySelector(".modal-close");
var overlay = document.querySelector(".overlay");
var mainBasket = document.querySelector('.main-basket');
var counter = document.querySelector('.link-counter');


buttonBasket.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupBasket.classList.add("modal-show");
  overlay.classList.add("modal-show");
  mainBasket.classList.add("full-basket");
});

closeBasket.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupBasket.classList.remove("modal-show");
  overlay.classList.remove("modal-show");

});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     evt.preventDefault();
         if (popupBasket.classList.contains("modal-show")) {
       popupBasket.classList.remove("modal-show");
     }
     if (overlay.classList.contains("modal-show")) {
       overlay.classList.remove("modal-show");
     }
   }
 });

 overlay.addEventListener("click", function(evt) {
   evt.preventDefault();
   popupBasket.classList.remove("modal-show");
   overlay.classList.remove("modal-show");

 });

 function onButtonClick(evt) {
 evt.preventDefault();

 var getNum = parseInt(counter.textContent, 10);
 getNum++;
 counter.textContent = getNum;
 }

 buttonBasket.addEventListener('click', onButtonClick);
