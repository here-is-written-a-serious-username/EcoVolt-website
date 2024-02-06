// const accordions = document.getElementsByClassName("accordion");

// for (let i = 0; i < accordions.length; i++) {
//     accordions[i].addEventListener("click", onBtnClik);
// }

// function onBtnClik() {
//     this.classList.toggle("active");
//     let panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//         panel.style.maxHeight = null;
//     } else {
//         panel.style.maxHeight = panel.scrollHeight + "px";
//     }
// }


new Accordion('.accordion-container');

// function changeSVG() {
//     const svgIcon = document.getElementById('ac-trigger__icon');

//     // Змініть атрибут "href" відповідно до вашого нового шляху SVG.
//     svgIcon.setAttribute('href', './новий/шлях/до/вашого/нового/зображення.svg');
// }

const acTriggers = document.querySelectorAll('.ac-trigger');

// acTriggers.forEach(trigger => {
//     trigger.addEventListener('click', () => {
//         const iconId = trigger.getAttribute('data-icon-id');
//         const currentHref = document.getElementById(iconId).querySelector('use').getAttribute('href');

//         // Замінюємо "icon+" на "iconNew"
//         const newHref = currentHref.replace('icon+', 'icon-x');

//         // Змінюємо href у вибраному SVG
//         document.getElementById(iconId).querySelector('use').setAttribute('href', newHref);
//     });
// });