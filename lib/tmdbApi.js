export async function getListsData(type, option) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${option}?api_key=${process.env.API_KEY}&language=en-GB&page=1&region=GB`
  );
  const data = await res.json();

  return data;
}
