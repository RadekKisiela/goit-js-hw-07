import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const galleryItemsTemplate = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"/>
      </a>
    </li>
  `
  )
  .join(' ');

gallery.addEventListener('click', event => {
  event.preventDefault();

  const { target } = event;
  if (target.nodeName !== 'IMG') {
    return;
  }

  const imageSrc = target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="800" height="600">
`);

  instance.show();
});

gallery.innerHTML = galleryItemsTemplate;
