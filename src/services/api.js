// const keyAPI = '3dd249fbd49ca96ba7400800c6400821'
// example => https://api.themoviedb.org/3/movie/550?api_key=3dd249fbd49ca96ba7400800c6400821
import axios from 'axios';

const api = {
  key: '3dd249fbd49ca96ba7400800c6400821',
  baseUrl: 'https://api.themoviedb.org/3/',
};

export const getPopularFilms = async () => {
  try {
    const responce = await axios.get(
      `${api.baseUrl}trending/movie/day?api_key=${api.key}`
    );
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieDetails = async id => {
  try {
    const responce = await axios.get(
      `${api.baseUrl}movie/${id}?api_key=${api.key}`
    );
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};
