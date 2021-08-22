const MY_KEY = '22984759-30de173458e69cd83eb69d4b0';
const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

export default class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchPictures() {
    const url = `${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${MY_KEY}`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.incrementPage();

        return data.articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
