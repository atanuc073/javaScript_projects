'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener('click',openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSection =document.querySelectorAll(".section");
console.log(allSection);

document.getElementById("section--1")

const allButtons=document.getElementsByTagName('button');
// It Returns HtmlCollections it updates Automatically 
console.log(allButtons)

console.log(document.getElementsByClassName('btn'));
// It also Returns HtmlCollections

// Creating and Inserting elements
const message =document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML="We use cookies for improved functionalities and analytics ,<button class='btn btn--close-cookie'>Got It!</button>";
header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

// Delete the Element
document.querySelector('.btn--close-cookie').addEventListener('click',function(){
  message.remove();
  // message.parentElement.removeChild(message);
})

// Styles
message.style.backgroundColor='#37383d';
message.style.width='120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height=Number.parseFloat(getComputedStyle(message).height,10)+30+'px';
console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary','orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt="Beautiful Minimalist Logo";

//Non Standard
console.log(logo.designer); // returns undefined
console.log(logo.getAttribute('designer'));
logo.setAttribute('company','Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(logo.getAttribute('href'));

// Data Attribute
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1= document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)',window.pageXOffset,window.pageYOffset);

  console.log('Height/Width ViewPort',
  document.documentElement.clientHeight,
  document.documentElement.clientWidth);
  // window.scrollTo({
  //   left : s1coords.left + window.pageXOffset,
  //   top : s1coords.top + window.pageYOffset,
  //   behaviour : 'smooth'
  // });
  section1.scrollIntoView({behaviour:'smooth'});
});




