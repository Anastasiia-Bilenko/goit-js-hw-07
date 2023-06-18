import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const ulEl = document.querySelector(".gallery");
// ulEl.addEventListener("click", imgClickFunction)
const liEl = createListImg(galleryItems);

function createListImg(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    }).join(''); 
}

ulEl.insertAdjacentHTML("beforeend", liEl);

const linkImgEl = document.querySelectorAll(".gallery__link");

for (var i = 0 ; i < linkImgEl.length; i++) {
  linkImgEl[i].addEventListener("click", noClick) ; 
}
   
function noClick(evt) {
    evt.preventDefault();
}
function imgClickFunction(evt) {
    if (evt.target.nodeName !== "IMG") {
        return
    }
    
}
const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: 250,
    });