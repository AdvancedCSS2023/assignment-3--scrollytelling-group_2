const observerSceneOne= new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animated');
      } else {
          entry.target.classList.remove('animated');
      }
  });
}, {
  rootMargin: '-1px 0px',
});

const flag = document.querySelectorAll('.flag_img_container');
flag.forEach((el) => observerSceneOne.observe(el))







const sections = document.querySelectorAll('.unSticky__sensor');

let laptopScreenIO = document.querySelector('.laptop__screen--IO');
const options = {};

const elementToObserve = document.querySelector('.laptop__screen');


const getSticky = new IntersectionObserver(entries => {
  
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= 1) {
        console.log('Element is fully visible');
        laptopScreenIO.style.position = 'sticky';
        elementToObserve.style.overflow ='auto'
      }
      else{
        elementToObserve.style.overflow ='hidden'
        laptopScreenIO.style.position = 'static';
      }
    });
  }, {threshold: [1]});

getSticky.observe(elementToObserve);

const headline = document.querySelectorAll('.headline--top');

const unSticky = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting){
            return;
        }

        laptopScreenIO.style.position = 'static';
    });
}, options);

sections.forEach((section) => {
    unSticky.observe(section);
});