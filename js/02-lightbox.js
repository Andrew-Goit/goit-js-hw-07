import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

function createGallery(galleryItems) {
    return galleryItems.map(item =>
    `<li>
        <a class="gallery__item" 
            href="${item.original}">
            <img class="gallery__image" 
            src="${item.preview}" 
            alt="${item.description}" />
        </a>
    </li>`
      ).join('');
  }

  galleryRef.insertAdjacentHTML('beforeend', createGallery(galleryItems));

  new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
  });