import { galleryItems } from './gallery-items.js';

import * as SimpleLightbox from 'simplelightbox/dist/simple-lightbox.min.js';

const Lightbox = new SimpleLightbox.default('.gallery__item');


const gallery = document.querySelector('.gallery');
const photos = galleryItems.map((photo) => {
  const image = document.createElement('img');
  image.src = photo.preview;
  image.alt = photo.description;
  image.setAttribute('data-source', photo.original);
  image.classList.add('gallery__item');

  return image;
});

gallery.append(...photos);

const lightbox = new Lightbox('.gallery__item');
