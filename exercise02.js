const countriesInWorld = (countries) => {
  return countries.length
}

const countryByLanguages = (countries, language) => {
  let countriesLang = []

  countries.forEach(country => {
    let contains = (country.languages.indexOf(language) > -1);
    if (contains) countriesLang.push(country);
  });

  return countriesLang;
}

const officialLanguages = (countries) => {
  countries.forEach(country => {
    country.officialLanguages = country.languages.length;
  });

  return countries;
}

const moreOfficialLanguages = (countries) => {
  let moreLangues = undefined;

  countries.forEach(country => {
    let qtyLanguages = country.languages.length;
    country.totalLanguages = qtyLanguages
    
    if (!moreLangues) {
      moreLangues = country;
    }

    if (qtyLanguages > moreLangues.totalLanguages) {
      moreLangues = country;
    }
  });

  return moreLangues;
}

const commonOfficialLanguage = (countries) => {
  let languages = [];
  
  countries.forEach(country => {
    country.languages.forEach(language => languages.push(language));
  });

  return Object.entries(
    languages.reduce((a, v) => {
      a[v] = a[v] ? a[v] + 1 : 1;
      return a;
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];
}

module.exports = {
  countriesInWorld,
  countryByLanguages,
  officialLanguages,
  moreOfficialLanguages,
  commonOfficialLanguage,
}