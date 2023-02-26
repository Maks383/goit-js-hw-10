
export function fetchCountries(name) {
  const url = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flag,languages`;
return fetch(url).then((response) => response.json());
}