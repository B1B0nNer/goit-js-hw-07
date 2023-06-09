import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const photos = galleryItems.map(({preview, original, description}) => {

  const lishka = 
  `<li class="gallery__item">
      <a class="galley__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>`
    return lishka;
});

gallery.insertAdjacentHTML('beforeend', photos.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
