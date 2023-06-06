import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const photos = galleryItems.map((photo) => {

  const li = document.createElement("li");
  li.classList.add("gallery__item");

  const a = document.createElement("a");
  a.classList.add("gallery__link");

  const image = document.createElement('img');
  image.src = photo.preview;
  image.alt = photo.description;
  image.dataset.source = photo.original;
  image.classList.add('gallery__item');
  image.classList.add("gallery__image")

  a.append(image);
  li.append(a);

  image.addEventListener('click', handlePhotoClick);

  return li;
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
