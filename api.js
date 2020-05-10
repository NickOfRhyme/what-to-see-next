import axios from "axios";
import Constants from "expo-constants";
import ResultsScreen from "./screens/ResultsScreen";

const API_KEY = Constants.manifest.extra.tmdbKey;

const BASE_URL = "https://api.themoviedb.org/3";

export const getMovies = (movieName, page = 1) => {
  const encodedName = encodeURIComponent(movieName);
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodedName}&page=${page}`
    )
    .then((results) => results.data);
};

export const getMovieById = (movieId) => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    .then((results) => results.data);
};

export const getRecommendedMovies = (movieId) => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`)
    .then((results) => results.data);
};
