import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const photos = galleryItems.map((photo) => {
  const image = document.createElement('img');
  image.src = photo.preview;
  image.alt = photo.description;
  image.dataset.source = photo.original;
  image.classList.add('gallery__item');

  image.addEventListener('click', handlePhotoClick);

  return image;
});

gallery.append(...photos);

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
