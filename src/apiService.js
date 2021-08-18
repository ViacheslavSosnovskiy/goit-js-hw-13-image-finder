const KEY = '22984759-30de173458e69cd83eb69d4b0';
const BASE_URL = 'https://pixabay.com/api/';

export default class apiServise {
  constructor() {
    this.page = 1;
  }

  fetchArticles() {
    const optionst = {
      headers: {
        autorizations: KEY,
      },
    };
    // const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${}&page=${}&per_page=12&key=${MY_KEY}`;

    fetch(url, options)
      .then(response => response.json())
      .then();
  }
}
