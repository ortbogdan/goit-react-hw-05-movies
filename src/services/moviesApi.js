import axios from 'axios';
const API_KEY = '4a995db88c252a0ea9f14964d1c401bb';
axios.defaults.baseURL = 'https://api.themoviedb.org';
// For HomePage
export async function getTrendingMovies() {
  const response = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
}
// For MoviesPage
export async function getMoviesByQuery(query) {
  const response = await axios.get(
    `/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  );
  return response.data.results;
}
// For MovieDetailsPage
export async function getMovieDetailsById(id) {
  const response = await axios.get(
    `/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits,reviews`,
  );
  return response.data;
}
