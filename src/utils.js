const _wundergroundURL = 'https://api.wunderground.com/api/';
const _APIKEY = ''; // Get your api key from https://www.wunderground.com/weather/api/
const _baseURL = _wundergroundURL + _APIKEY;

export function weatherApi(features, query) {
  let url = `${_baseURL}/${features}/q/${query}.json?`;
  return fetch(url, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => {
    return json;
  });
}