import axios from 'axios';

const API_KEY = '4a995db88c252a0ea9f14964d1c401bb';
axios.defaults.baseURL = 'https://api.themoviedb.org';
// For HomePage
export async function getTrendingMovies() {
  const response = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
  console.log(response.data.results);
  return response.data.results;
}
// For MoviesPage
export async function getMoviesByQuery(query) {
  const response = await axios.get(
    `/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  );
  console.log(response.data.results);
  return response.data.results;
}

export async function getMovieDetailsById(id) {
  const response = await axios.get(
    `/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
  );
  console.log(response.data);
  return response.data;
}
export async function getMovieCreditsById(id) {
  const response = await axios.get(
    `/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  );
  console.log(response.data);
  return response.data;
}
export async function getMovieReviewsById(id) {
  const response = await axios.get(
    `/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
  console.log(response.data);
  return response.data;
}
// export async function getMovieInfo(id, url) {
//   const response = await axios.get(
//     `/3/movie/${id}/${url}?api_key=${API_KEY}&language=en-US&page=1`,
//   );
//   console.log(response.data);
//   return response.data;
// }
