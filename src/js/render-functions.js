import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btn = document.querySelector('.button-load-more');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


export function createGallery(images) {
  const markupArray = images.map(image => {
    return `
      <li class="gallery__item">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>
        <div class="info">
  <p class="info-item">
    <span class="info-title">Likes</span>
    <span class="info-value">${image.likes}</span>
  </p>
  <p class="info-item">
    <span class="info-title">Views</span>
    <span class="info-value">${image.views}</span>
  </p>
  <p class="info-item">
    <span class="info-title">Comments</span>
    <span class="info-value">${image.comments}</span>
  </p>
  <p class="info-item">
    <span class="info-title">Downloads</span>
    <span class="info-value">${image.downloads}</span>
  </p>
</div>
      </li>
    `;
  });

  const markup = markupArray.join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('active');
}

export function hideLoader() {
  loader.classList.remove('active');
}

export function hideLoadMoreButton() {
  
  btn.classList.add('is-hidden');
}

export function showLoadMoreButton() {
  btn.classList.remove('is-hidden');
}