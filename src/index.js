import cards from './templates/cards.hbs';

import NewApiService from './js/apiService.js';
import refs from './js/refs.js';
// ==== pnotify =====
import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const newsApiService = new NewApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.searchMore.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.resetPage();
  newsApiService.fetchPictures().then(appendArticlesMarkup);
}

function onLoadMore() {
  newsApiService.fetchPictures().then(appendArticlesMarkup);
}

function appendArticlesMarkup(articles) {
  refs.galerryList.insertAdjacentHTML('beforeend', cards(articles));
}

// function clearArticlesContainer() {
//   // refs.
// }
