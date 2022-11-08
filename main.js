const paises = require('./src/exercise02')
const visual = require('./src/exercise01')
let countries = [
  {
    country:"US",
    languages: ["en"]
  },
  {
    country:"BE",
    languages: ["nl","fr","de"]
  },
  {
    country:"NL",
    languages: ["nl","fy"]
  },
  {
    country:"DE",
    languages: ["de"]
  },
  {
    country:"ES",
    languages: ["es"]
  }
]

console.log('<======= Exercício 01 =======>' );

visual.vnuts()

console.log('<======= Exercício 02 =======>' );

console.log('Países no Mundo: ', paises.countriesInWorld(countries))
console.log('Línguas Oficiais Sendo deutsch: ', paises.countryByLanguages(countries, 'de'))
console.log('Países Com Maior número de Linguas Oficiais: ', paises.moreOfficialLanguages(countries))
console.log('Língua Oficial mais comum: ', paises.commonOfficialLanguage(countries));
console.log('Contagem das Línguas Oficiais', paises.officialLanguages(countries));