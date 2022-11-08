
const {
  countriesInWorld,
  commonOfficialLanguage,
  officialLanguages,
  countryByLanguages,
  moreOfficialLanguages,
} = require('../src/exercise02');

const dataMock = [
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

describe('Suíte de Testes Exercício 2', () => {
  it('deve retornar quantidade de países no mundo', () => {
    const mock = dataMock;
    expect(countriesInWorld(mock)).toBe(5);
  });

  it('deve retornar os países e as línguas', () => {
    const mock = dataMock;

    expect(countryByLanguages(mock, 'de')).toStrictEqual([
      { country: "BE", languages: ["nl", "fr", "de"]}, {country: "DE", languages: ["de"] },
    ]);
    expect(countryByLanguages(mock, 'en')).toStrictEqual([
      { country: 'US', languages: [ 'en' ] },
    ]);
    expect(countryByLanguages(mock, 'nl')).toStrictEqual([
      { country: 'BE', languages: [ 'nl', 'fr', 'de' ] },
      { country: 'NL', languages: [ 'nl', 'fy' ] },
    ]);
  });

  it('deve retornar os países e as quantia de línguas oficiais ', () => {
    const mock = dataMock;
    expect(officialLanguages(mock)).toStrictEqual(
      [
        { country: 'US', languages: [ 'en' ], officialLanguages: 1 },
        {
          country: 'BE',
          languages: [ 'nl', 'fr', 'de' ],
          officialLanguages: 3
        },
        {
          country: 'NL',
          languages: [ 'nl', 'fy' ],
          officialLanguages: 2
        },
        { country: 'DE', languages: [ 'de' ], officialLanguages: 1 },
        { country: 'ES', languages: [ 'es' ], officialLanguages: 1 }
      ]
    );
  });

  it('deve retornar o país com mais linguas oficiais', () => {
    const mock = dataMock;
    expect(moreOfficialLanguages(mock)).toStrictEqual({
      country: 'BE',
      languages: [ 'nl', 'fr', 'de' ],
      officialLanguages: 3,
      totalLanguages: 3
    });
  });

  it('deve retornar a lingua oficial mais comum', () => {
    const mock = dataMock;
    expect(commonOfficialLanguage(mock)).toStrictEqual('de');
  });
  
});