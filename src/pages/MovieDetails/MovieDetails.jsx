import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetails } from 'services/api';

export const MovieDetails = () => {
  const [movieDetails, setmovieDetails] = useState(null);

  const { movieId } = useParams();

  const getGenres = genres => genres.map(({ name }) => name).join(', ');

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        setmovieDetails(data);
      })
      .catch(console.log);
  }, [movieId]);
  return (
    <div>
      {movieDetails && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
            alt={`${movieDetails.title}`}
          />

          <div>
            <h2>
              {movieDetails.title} (
              {new Date(movieDetails.release_date).getFullYear()})
            </h2>
            <p>User score {Math.floor(movieDetails.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            <p>{getGenres(movieDetails.genres)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// adult
// :
// false

// backdrop_path
// :
// "/o3mothJXDR9vLlZHpwyfFCycCNx.jpg"
// belongs_to_collection
// :
// null
// budget
// :
// 0

// genres
// :
// [{…}, {…}, {…}, {…}]
// homepage
// :
// "https://www.netflix.com/title/81220825"
// id
// :
// 668461
// imdb_id
// :
// "tt13320662"
// original_language
// :
// "en"
// original_title
// :
// "Slumberland"
// overview
// :
// "A young girl discovers a secret map to the dreamworld of Slumberland, and with the help of an eccentric outlaw, she traverses dreams and flees nightmares, with the hope that she will be able to see her late father again."
// popularity
// :
// 1569.265
// poster_path
// :
// "/f18kgonrgr8YvEuvshExS4XBGL8.jpg"

// production_companies
// :
// [{…}, {…}]

// production_countries
// :
// [{…}]
// release_date
// :
// "2022-11-09"
// revenue
// :
// 0
// runtime
// :
// 117

// spoken_languages
// :
// [{…}]
// status
// :
// "Released"
// tagline
// :
// "Every adventure begins with a dream."
// title
// :
// "Slumberland"
// video
// :
// false

// vote_average
// :
// 7.903
// vote_count
// :
// 274
// new entry
// :
