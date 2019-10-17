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

  /**
   * Given the name of a country that exists, returns a Promise<string>
   * with the name of the country's capital. Otherwise returns Promise<null>
   */
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

const input = document.getElementById("country-name");
const resultBox = document.getElementById("result");

function triggerSearch(inputEvent) {
  console.log("Triggered Search", inputEvent);
}

input.addEventListener("input", triggerSearch);
