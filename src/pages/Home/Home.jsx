import { useState, useEffect } from 'react';
import { getPopularFilms } from 'services/api';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  console.log(trendingMovies);

  useEffect(() => {
    getPopularFilms().then(data => setTrendingMovies(data.results));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(({ title, poster_path, id }) => {
          return (
            <li key={id}>
              {' '}
              <a href={poster_path}>{title}</a>{' '}
            </li>
          );
        })}
      </ul>
    </main>
  );
};
