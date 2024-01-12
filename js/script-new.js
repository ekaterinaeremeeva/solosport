document.addEventListener('DOMContentLoaded', function () {

const coachSwiper = new Swiper('.coach-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: true,
  delay: 5000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

function bindEvent(callback, eventType, targets) {
   targets.forEach(function(target) {
     target.addEventListener(eventType, callback);
   });
};


let closeBtn  = document.querySelectorAll('.close');
let myModal = document.getElementById("myModal");
let appointmentBtn = document.querySelectorAll('.coach-card__btn');
let offerBtn = document.querySelectorAll('.offer-item__btn');
let offerModal = document.getElementById('offerModal');
let contactsBtn = document.querySelectorAll('.contacts__btn');


bindEvent(function() {
myModal.style.display = "block";
}, 'click', appointmentBtn);

bindEvent(function() {
myModal.style.display = "block";
}, 'click', contactsBtn);

bindEvent(function() {
offerModal.style.display = "block";
}, 'click', offerBtn);

bindEvent(function() {
this.closest('.modal').style.display = "none";
}, 'click', closeBtn);



let offerTextBtn = document.querySelectorAll('.offer-item__text-btn');

bindEvent(function() {
this.previousElementSibling.classList.toggle('offer-item__text--hidden-xs');
this.classList.toggle('offer-item__text-btn--hide');
}, 'click', offerTextBtn);

}, false);