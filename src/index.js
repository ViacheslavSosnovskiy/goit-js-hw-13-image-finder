import cards from './templates/cards.hbs';
import './css/styles.css';
// == js files ==
import NewApiService from './js/apiService.js';
import refs from './js/refs.js';
// ==== pnotify =====
import { success, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

const newsApiService = new NewApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.searchMore.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  clearArticlesContainer();
  newsApiService.query = e.currentTarget.elements.query.value;

  if (newsApiService.query !== '') {
    success({
      title: 'Success!',
      text: 'That thing that you were trying to do worked.',
    });
  } else {
    error({
      title: 'Oh No!',
      text: 'Something terrible happened.',
    });
  }

  newsApiService.resetPage();
  newsApiService.fetchPictures().then(appendArticlesMarkup);
}

function onLoadMore() {
  newsApiService.fetchPictures().then(hits => {
    appendArticlesMarkup(hits);
    scroll();
  });
}

function scroll() {
  const element = document.getElementById('scroll');
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}

function appendArticlesMarkup(hits) {
  refs.galerryList.insertAdjacentHTML('beforeend', cards(hits));
}

function clearArticlesContainer() {
  refs.galerryList.innerHTML = '';
}
