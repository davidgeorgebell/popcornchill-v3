export async function getListsData(option) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${option}?api_key=${process.env.MOVIE_KEY}&language=en-GB&page=1&region=GB`
  );
  const data = await res.json();

  return data;
}
