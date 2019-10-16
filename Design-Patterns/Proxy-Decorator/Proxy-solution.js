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

  async findCountryCapital(countryName) {
    const countryNamesJson = await this.fetchCountryNames();
    const countryCapitalsJson = await this.fetchCountryCapitals();

    const code = Object.keys(countryNamesJson).find(
      key => countryNamesJson[key] === countryName
    );

    if (!code) {
      return null;
    }

    return countryCapitalsJson[code];
  }
}

const countryDB = new CountryDB(NAMES_URL, CAPITALS_URL);
countryDB.findCountryCapital("Uruguay").then(capital => {
  const text = JSON.stringify(capital, null, 2);
  document.body.innerText = text;
});
