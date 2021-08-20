const KEY = '22984759-30de173458e69cd83eb69d4b0';
const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

export default class NewApiService {
  constructor() {
    this.page = 1;
  }

  fetchPictures() {
    const optionst = {
      headers: {
        autorizations: KEY,
      },
    };
    const url = `${BASE_URL}&q=${searchQuery}&page=${this.page}&per_page=12&key=${MY_KEY}`;

    fetch(url, options)
      .then(response => response.json())
      .then(console.log);
  }
}
