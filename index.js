const observerSceneOne = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            } else {
                entry.target.classList.remove('animated');
            }
        });
    },
    {
        rootMargin: '-1px 0px',
    }
);

const flag = document.querySelectorAll('.flag_img_container');
flag.forEach((el) => observerSceneOne.observe(el));

const inToLeft = document.querySelectorAll('.inToLeft');
inToLeft.forEach((el) => observerSceneOne.observe(el));

const billsOne = document.querySelectorAll('.bills--one');
billsOne.forEach((el) => observerSceneOne.observe(el));

const billsTwo = document.querySelectorAll('.bills--two');
billsTwo.forEach((el) => observerSceneOne.observe(el));

const billsThree = document.querySelectorAll('.bills--three');
billsThree.forEach((el) => observerSceneOne.observe(el));

const delayed = document.querySelectorAll('.delayed');
delayed.forEach((el) => observerSceneOne.observe(el));

const title = document.querySelectorAll('.flex__container--start');
title.forEach((el) => observerSceneOne.observe(el));

const paraSpan = document.querySelectorAll('.para__span');
paraSpan.forEach((el) => observerSceneOne.observe(el));

const energyBill = document.querySelectorAll('.energy__bill');
energyBill.forEach((el) => observerSceneOne.observe(el));

const sections = document.querySelectorAll('.unSticky__sensor');

let laptopScreenIO = document.querySelector('.laptop__screen--IO');
const options = {};

/* * * * * * * * 
Replaced following javascript with snap-scrolling in CSS (scroll container scrolls freely
  until it reaches the snap point on the laptop screen, then stops, scrolls through laptop content,
  then continues */

// const elementToObserve = document.querySelector(".laptop__screen");

// const getSticky = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting && entry.intersectionRatio >= 1) {
//         console.log("Element is fully visible");
//         laptopScreenIO.style.position = "sticky";
//         // elementToObserve.style.overflow ='auto'
//       } else {
//         // elementToObserve.style.overflow ='hidden'
//         laptopScreenIO.style.position = "static";
//       }
//     });
//   },
//   { threshold: [1] }
// );

// getSticky.observe(elementToObserve);

// const headline = document.querySelectorAll(".headline--top");

// const unSticky = new IntersectionObserver(function (entries, observer) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     }

//     laptopScreenIO.style.position = "static";
//   });
// }, options);

// sections.forEach((section) => {
//   unSticky.observe(section);
// });

// * * * * Snizhana * * * *

const section = document.querySelector('.section--wave');

const handler = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const wave = document.querySelector('.ocean');
            wave.classList.add('show');
            wave.classList.remove('hide');
        } else {
            const wave = document.querySelector('.ocean');
            wave.classList.add('hide');
            wave.classList.remove('show');
        }
    });
};

const intersectionObserver = new IntersectionObserver(handler, {});
