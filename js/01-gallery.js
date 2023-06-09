import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const photos = galleryItems.map(({preview, original, description}) => {

  const lishka = 
  `<li class="gallery__item">
      <a class="gallery__link" href="${original}" onclick="return false;">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>`
    return lishka;
});

gallery.insertAdjacentHTML('beforeend', photos.join(''));
gallery.addEventListener("click", handlePhotoClick)

const lightbox = basicLightbox.create(`
  <div class="modal">
    <img src="" alt="" class="modal__image">
  </div>
`);

function handlePhotoClick(event) {
  const clickedPhoto = event.target;

  lightbox.element().querySelector('.modal__image').src = clickedPhoto.dataset.source;
  lightbox.show();
}
