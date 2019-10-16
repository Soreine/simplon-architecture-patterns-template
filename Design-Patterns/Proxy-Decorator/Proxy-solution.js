const NAMES_URL =
  "https://gist.githubusercontent.com/Soreine/94eb87434049e6185d9953252e9359ff/raw/e2e4eccd4c819cd43535840d6dc3147bb584629a/names.json";
const CAPITALS_URL =
  "https://gist.githubusercontent.com/Soreine/94eb87434049e6185d9953252e9359ff/raw/e2e4eccd4c819cd43535840d6dc3147bb584629a/capital.json";

class CountryDB {
  constructor(countryNamesUrl, countryCapitalsUrl) {
    this.countryNamesUrl = countryNamesUrl;
    this.countryCapitalsUrl = countryCapitalsUrl;
  }

  fetchCountryNames() {
    return fetch(this.countryNamesUrl).then(res => res.json());
  }

  fetchCountryCapitals() {
    return fetch(this.countryCapitalsUrl).then(res => res.json());
  }
}

const countryDB = new CountryDB(NAMES_URL, CAPITALS_URL);
countryDB.fetchCountryCapitals().then(capitals => {
  const text = JSON.stringify(capitals, null, 2);
  document.body.innerText = text;
});
