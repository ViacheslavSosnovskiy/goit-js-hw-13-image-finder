import './templates/cards.hbs';

import NewApiService from './js/apiService.js';
import refs from './js/refs.js';

const newsApiService = new NewApiService();

let searchQuery = '';

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const searchQuery = e.currentTarget.element.query.value;

  newsApiService.fetchPictures(searchQuery);
}

function onLoadMore() {
  newsApiService.fetchPictures(searchQuery);
}
