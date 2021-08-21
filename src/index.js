import './templates/cards.hbs';

import NewApiService from './js/apiService.js';
import refs from './js/refs.js';

const newsApiService = new NewApiService();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.fetchPictures();
}

function onLoadMore() {
  newsApiService.fetchPictures();
}
