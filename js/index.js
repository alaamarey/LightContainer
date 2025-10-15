// let imgesList = Array.from(document.querySelectorAll(".items img")); //     return NodeList

// let lightContainer = document.querySelector(".light-container");

// let lightItem = document.querySelector(".light-item");

// let nextArrow = document.getElementById("next");

// let preArrow = document.getElementById("prev");

// let closeBtn = document.getElementById("close");

// let row = document.querySelector('.row');

// let indexCurrentImage;
// // let index;

// // Event Delegation
// row.addEventListener('click', function (e) {

//    if (e.target.hasAttribute('src')) {
//    //   console.log( e.target.tagName  === 'IMG');

//       indexCurrentImage = imgesList.indexOf(e.target); // return index of current image

//       let currentImage = e.target.getAttribute("src");

//       lightItem.style.backgroundImage = `url(  ${currentImage} )  `;

//       lightContainer.classList.remove("d-none"); // Show Container
//    }
// })

// // for (let i = 0; i < imgesList.length; i++) {
// //   imgesList[i].addEventListener("click", function (e) {
// //     //  index = imgesList.indexOf(e.target);

// //     indexCurrentImage = imgesList.indexOf(e.target); // return index of current image

// //     let currentImage = e.target.getAttribute("src");

// //     lightItem.style.backgroundImage = `url(  ${currentImage} )  `;

// //     lightContainer.classList.remove("d-none"); // Show Container
// //   });
// // }

// nextArrow.addEventListener("click", function () {
//   // nextSlide()
//   slide(1);
// });

// preArrow.addEventListener("click", function () {
//   //  prevSlide()
//   slide(-1);
// });

// closeBtn.addEventListener("click", function () {
//   closeSlide();
// });

// function slide(step) {
//   // indexCurrentImage = indexCurrentImage + step;
//   indexCurrentImage += step;

//   if (indexCurrentImage === imgesList.length) {
//     indexCurrentImage = 0;
//   }

//   if (indexCurrentImage < 0) {
//     indexCurrentImage = imgesList.length - 1;
//   }

//   let nextImage = imgesList[indexCurrentImage].getAttribute("src");
//   lightItem.style.backgroundImage = ` url(${nextImage})`;
// }

// // function nextSlide() {
// //     // indexCurrentImage ++ ;

// //   indexCurrentImage = (indexCurrentImage + 1) % imgesList.length;

// //   /* if (indexCurrentImage === imgesList.length) {
// //    //    // indexCurrentImage = index ;
// //    //    indexCurrentImage = 0;
// //    }  */

// //   let nextImage = imgesList[indexCurrentImage].getAttribute("src");

// //   lightItem.style.backgroundImage = ` url(${nextImage})`;
// // }

// // function prevSlide() {
// //     indexCurrentImage--;

// //   if (indexCurrentImage < 0) {
// //     indexCurrentImage = imgesList.length - 1;
// //   }

// //   let prevImage = imgesList[indexCurrentImage].getAttribute("src");

// //   lightItem.style.backgroundImage = ` url( ${prevImage})`;
// // }

// function closeSlide() {
//   lightContainer.classList.add("d-none");
// }

// document.body.addEventListener("keydown", function (e) {

//    if (!lightContainer.classList.contains('.d-none')) {
//       if (e.key === "ArrowRight") {
//          slide(1);
//       } else if (e.key === "ArrowLeft") {
//          slide(-1);
//       } else if (e.key === "Escape") {
//          closeSlide();
//       }
//    }

// });

// lightContainer.addEventListener('click', function (e) {

//    if (e.target === lightContainer) {

//       closeSlide();
//    }

// })

let imges = Array.from(document.querySelectorAll(".items img"));
let lightContainer = document.querySelector(".light-container");
let lightItem = document.querySelector(".light-item");
let currentIndex;
let nextArrow = document.getElementById("next");
let preArrow = document.getElementById("prev");
let close = document.getElementById("close");
let rowImages = document.querySelector(".row");


rowImages.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    lightContainer.classList.remove("d-none");
    lightItem.style.backgroundImage = `url(${e.target.getAttribute("src")})`;
    currentIndex = imges.indexOf(e.target);
  }
});

nextArrow.addEventListener("click", function () {
  slide(1);
});

preArrow.addEventListener("click", function () {
  slide(-1);
});

close.addEventListener("click", function () {
  closeSlide();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") slide(1);
  else if (e.key === "ArrowLeft") slide(-1);
  else if (e.key === "Escape") closeSlide();
});

lightContainer.addEventListener("click", function (e) {
  closeSlide();
});

lightItem.addEventListener("click", function (e) {
  e.stopPropagation();
});



function slide(step) {
  currentIndex += step;
  if (currentIndex === imges.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = imges.length - 1;
  lightItem.style.backgroundImage = ` url(${imges[currentIndex].getAttribute(
    "src"
  )})`;
}
function closeSlide() {
  lightContainer.classList.add("d-none");
}


