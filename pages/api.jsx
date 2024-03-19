export async function fetchDataByCategory(category) {
  const myAPI_KEY = "pub_38839c08c3d829e80b6faa29478d345294798";
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${myAPI_KEY}&country=us&language=en&category=${category}`
  );
  const data = await res.json();
  return data.results;
}
