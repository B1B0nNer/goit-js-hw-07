import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const photos = galleryItems.map((photo) => {

  const li = document.createElement("li");
  li.classList.add("gallery__item");

  const a = document.createElement("a");
  a.href = photo.original;
  a.dataLightbox = "lbox";
  a.classList.add("gallery__link");

  const image = document.createElement('img');
  image.src = photo.preview;
  image.alt = photo.description;
  image.dataset.source = photo.original;
  image.classList.add('gallery__item');
  image.classList.add("gallery__image")

  a.append(image);
  li.append(a);

  return li;
});

gallery.append(...photos);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionData: 'alt',
  captionDelay: 250,
});
