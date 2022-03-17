// slider
"use strict";
const liveCards = document.querySelector(".live__cards");
const liveCard = document.querySelector(".live__card");
const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");
const body = document.querySelector("body");
let counter = 1;
const sliderCircles = document.querySelectorAll(".card__circle");

const push = liveCard.clientWidth + (body.clientWidth * 1.5) / 100;

function slidRight() {
  if (counter === 0) {
    counter = 1;
  }
  if (counter !== 3) {
    liveCards.style.transform = "translateX(" + -push * counter + "px)";
    counter++;
    console.log(counter);
  }

  sliderCircles.forEach((item) => {
    item.classList.remove("active");
  });
  sliderCircles[counter - 1].classList.add("active");
}

function slidLeft() {
  if (counter === 3) {
    counter = 2;
  }
  if (counter > 0) {
    counter--;
    liveCards.style.transform = "translateX(" + -push * counter + "px)";
  }
  sliderCircles.forEach((item) => {
    item.classList.remove("active");
  });
  sliderCircles[counter].classList.add("active");
}
// FIXME to use this function correctly you need to refresh the page each time you change the screen size.

// FIXME while the middle circle is active (the counter is 1) if we choose to use the other sliderArrow we need to click it twice for it to work

arrowRight.addEventListener("click", slidRight);
arrowLeft.addEventListener("click", slidLeft);

// Timer

const day = document.querySelectorAll(".day");
const hour = document.querySelectorAll(".hour");
const minute = document.querySelectorAll(".minute");
const second = document.querySelectorAll(".second");

function calcTime() {
  const futureDate = new Date("March 29, 2022 00:00:00").getTime();
  const todayDate = new Date().getTime();
  const gap = futureDate - todayDate;

  const cardSecond = 1000;
  const cardMinute = cardSecond * 60;
  const cardHour = cardMinute * 60;
  const cardDay = cardHour * 24;

  for (let i = 0; i < day.length; i++) {
    day[i].innerHTML = Math.floor(gap / cardDay);
    hour[i].innerHTML = Math.floor((gap % cardDay) / cardHour);
    minute[i].innerHTML = Math.floor((gap % cardHour) / cardMinute);
    second[i].innerHTML = Math.floor((gap % cardMinute) / cardSecond);
  }
}

setInterval(calcTime, 1000);

// hover effects

const liveCardsHover = document.querySelectorAll(".live__card");

liveCardsHover.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    this.classList.add("active");
  });
  item.addEventListener("mouseleave", function () {
    this.classList.remove("active");
  });
});

// navigation

const navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);

// navLinks.forEach(function (item) {
//   item.addEventListener("click", function () {
//     this.classList.remove("active");
//   });
// });

navLinks.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.classList.contains("active")) {
      navLinks.forEach(function (item) {
        item.classList.remove("active");
      });
    } else {
      this.classList.add("active");
    }
  });
});

//BUG the remove funcition doesnt let the toggle to work

// having accest to links✅
// giving each on an active class then remove it for others
