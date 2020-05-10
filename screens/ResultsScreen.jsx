import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MovieList from "../components/MovieList";
import * as api from "../api";
import Colours from "../constants/Colours";
import PageTurner from "../components/PageTurner";

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
        .getRecommendedMovies(recommendationMovieId, page)
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

  const changePage = (direction) => {
    setPage(page + direction);
  };

  useEffect(() => fetchMovies(movieName, recommendationMovieId, page), [
    movieName,
    recommendationMovieId,
    page
  ]);

  const resultMessage =
    recommendationMovieId !== undefined
      ? `More movies like '${movieName}'`
      : `Results for ${movieName}`;

  return (
    <View style={styles.container}>
      <Text>{resultMessage}</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <MovieList movies={movies} navigation={navigation} />
          {totalPages > 1 && (
            <PageTurner
              pageTurnFunc={changePage}
              page={page}
              totalPages={totalPages}
            />
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: Colours.backgroundColor
  }
});

export default ResultsScreen;
