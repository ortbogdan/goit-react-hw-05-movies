import { getTrendingMovies } from '../services/moviesApi';
import { useState, useEffect } from 'react';
import { MoviesList, Container } from '../components';
import { Title } from './Page.styled';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const items = await getTrendingMovies();
        setMovies(items);
      } catch (error) {
        console.log(error);
      }
    }
    fetchItems();
  }, []);

  return (
    <main>
      <Container>
        <Title>Trending Today</Title>
        <MoviesList movies={movies} />
      </Container>
    </main>
  );
};
