const BASE_URL = 'https://dummyjson.com/';

export default async function doGetRequest(endpoint) {
  const data = await fetch(BASE_URL + endpoint);
  const res = await data.json();
  return res;
}
