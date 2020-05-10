import axios from "axios";
import Constants from "expo-constants";
import ResultsScreen from "./screens/ResultsScreen";

const API_KEY = Constants.manifest.extra.tmdbKey;

const BASE_URL = "https://api.themoviedb.org/3";

export const getFilms = (filmName, page = 1) => {
  const encodedName = encodeURIComponent(filmName);
  console.log(filmName, encodedName);
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodedName}&page=${page}`
    )
    .then((results) => results.data);
};
