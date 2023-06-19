import { galleryItems } from './gallery-items.js';

// add and create <li>

const ulEl = document.querySelector(".gallery");
ulEl.addEventListener("click", imgClickFunction)
const liEl = createListImg(galleryItems);

function createListImg(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join(''); 
}
ulEl.insertAdjacentHTML("beforeend", liEl);

function imgClickFunction(evt) {
  evt.preventDefault()
    if ( evt.target.nodeName !== "IMG") {
        return
    }
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)
instance.show() 
    
}
