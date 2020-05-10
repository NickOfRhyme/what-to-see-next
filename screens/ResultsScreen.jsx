import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MovieList from "../components/MovieList";
import * as api from "../api";

const ResultsScreen = ({ route, navigation }) => {
  const { movieName, recommendationMovieId } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const fetchMovies = (movieName, recommendationMovieId, page = 1) => {
    setIsLoading(true);
    if (recommendationMovieId !== undefined) {
      api
        .getRecommendedMovies(recommendationMovieId)
        .then(({ page, total_pages, results }) => {
          setMovies(results);
          setPage(page);
          setTotalPages(total_pages);
          setIsLoading(false);
        });
    } else {
      api.getMovies(movieName, page).then(({ page, total_pages, results }) => {
        setMovies(results);
        setPage(page);
        setTotalPages(total_pages);
        setIsLoading(false);
      });
    }
  };

  useEffect(() => fetchMovies(movieName, recommendationMovieId), [
    movieName,
    recommendationMovieId
  ]);

  const resultMessage =
    recommendationMovieId !== undefined
      ? `More movies like '${movieName}'`
      : `Results for ${movieName}`;

  return (
    <View>
      <Text>{resultMessage}</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <MovieList movies={movies} navigation={navigation} />
      )}
    </View>
  );
};

export default ResultsScreen;
