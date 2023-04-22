import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const galleryItemsTemplate = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `
  )
  .join(' ');

gallery.innerHTML = galleryItemsTemplate;

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
});

lightbox.on('show.simplelightbox', function () {
  const caption = this.currentImage.alt;
  const $caption = document.createElement('div');
  $caption.classList.add('sl-caption');
  $caption.innerHTML = caption;
  document.body.appendChild($caption);
});

lightbox.on('close.simplelightbox', function () {
  const $caption = document.querySelector('.sl-caption');
  $caption.remove();
});
