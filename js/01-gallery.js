import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryRef = document.querySelector('.gallery');

function createGallery(galleryItems) {
    return galleryItems.map(item =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img 
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
    </div>`
      ).join('');
  }

  galleryRef.insertAdjacentHTML('beforeend', createGallery(galleryItems));

  galleryRef.addEventListener('click', onClick);

//   document.addEventListener('keydown', onkeyEskPress);

  function imageOpenClose(event) {
    const instance = basicLightbox.create(`
      <img class= "original-img" src = '${event.target.dataset.source}' width = '1280'>`, instanceCloseEsk);
    instance.show();

    // galleryRef.addEventListener("keydown", closeModalEsk);
    // function closeModalEsk (event) {
    //      if (event.code === "Escape") {
    //          instance.close()
    //      }
    // };
    }
  
    const instanceCloseEsk ={
      onShow: (instance) => {
        document.onkeydown = event => {
               if (event.code === 'Escape') instance.close();
        };
      },
    }
  
  function onClick (event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {return};
    imageOpenClose(event)
  }


  