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

class CountryDBLogger {
  constructor(countryDB) {
    this.countryDB = countryDB;
  }

  findCountryCapital(countryName) {
    // 1. Logger l'appel
    console.log(`Called findCountryCapital(${countryName})`);
    // 2. transmettre l'appel de findCountryCapital
    return this.countryDB.findCountryCapital(countryName);
  }
}

class CountryDBCache {
  constructor(countryDB) {
    this.countryDB = countryDB;
    this.cache = new Cache();
  }

  async findCountryCapital(countryName) {
    if (this.cache.has(countryName)) {
      return this.cache.get(countryName);
    }

    const result = await this.countryDB.findCountryCapital(countryName);
    this.cache.save(countryName, result);
    return result;
  }
}

class Cache {
  constructor() {
    // key => value
    // countryName => capitalName
    // string => (string | null)
    // On utilise un objet {}
    this.object = {};
  }

  save(key, value) {
    this.object[key] = value;
  }

  get(key) {
    return this.object[key];
  }

  has(key) {
    // eslint-disable-next-line no-prototype-builtins
    return this.object.hasOwnProperty(key);
    // return Object.prototype.hasOwnProperty.call(this.object, key)
  }
}

const input = document.getElementById("country-search");
const resultBox = document.getElementById("search-result");

const countryDB = new CountryDB(NAMES_URL, CAPITALS_URL);
const loggedCountryDB = new CountryDBLogger(countryDB);
const cachedCountryDB = new CountryDBCache(loggedCountryDB);

async function triggerSearch(inputEvent) {
  const countryName = inputEvent.target.value;
  const capitalResult = await cachedCountryDB.findCountryCapital(countryName);
  displayResult(capitalResult);
}

function displayResult(maybeCapital) {
  if (maybeCapital == null) {
    resultBox.innerText = "No country found";
  } else {
    resultBox.innerText = `The capital is: ${maybeCapital}`;
  }
}

input.addEventListener("input", triggerSearch);
