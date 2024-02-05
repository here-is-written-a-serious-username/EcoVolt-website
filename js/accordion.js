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