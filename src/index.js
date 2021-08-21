import './templates/cards.hbs';

import NewApiService from './js/apiService.js';
import refs from './js/refs.js';

const newsApiService = new NewApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.searchMore.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.resetPage();
  newsApiService.fetchPictures();
}

function onLoadMore() {
  newsApiService.fetchPictures();
}
