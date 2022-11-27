import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPopularFilms } from 'services/api';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getPopularFilms().then(data => setTrendingMovies(data.results));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(({ title, id }) => {
          return (
            <li key={id}>
              {' '}
              <Link to={`movies/${id}`}>{title}</Link>{' '}
            </li>
          );
        })}
      </ul>
    </main>
  );
};
