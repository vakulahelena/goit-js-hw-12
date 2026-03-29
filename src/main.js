import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery, ITEMS_PER_PAGE } from './js/pixabay-api.js';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.button-load-more');

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;

form.addEventListener('submit', async event => {
  event.preventDefault();

  const input = form.querySelector('input[name="search-text"]');
  currentQuery = input.value.trim();

  if (!currentQuery) {
    iziToast.warning({
      message: 'Please enter a search term!',
    });
    return;
  }
    currentPage = 1;
    clearGallery();
    hideLoadMoreButton();
    showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    totalHits = data.totalHits;    
    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

      createGallery(data.hits);
      if (totalHits > ITEMS_PER_PAGE) {
          showLoadMoreButton();
      } else {
          iziToast.info({
              message: "We're sorry, but you've reached the end of search results.",
          });
      }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later!',
    });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
    currentPage += 1;

    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(currentQuery, currentPage);

        createGallery(data.hits);
        const totalPages = Math.ceil(totalHits / ITEMS_PER_PAGE);
        if (currentPage < totalPages) {
            showLoadMoreButton();
        } else {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
            });
        }
        const card = document.querySelector('.gallery__item');

        if (card) {
            const cardHeigh = card.getBoundingClientRect().height;

            window.scrollBy({
                top: cardHeigh * 2,
                behavior: 'smooth',
            });
        }
    } catch (error) {
        iziToast.error({
            message: 'Something went wrong. Please try again later!',
        });
        showLoadMoreButton();
    } finally {
        hideLoader();
    }
});