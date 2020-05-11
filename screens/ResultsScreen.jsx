import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
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
      : `Results for '${movieName}'`;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.resultMessage}>{resultMessage}</Text>
      {isLoading ? (
        <View style={styles.loadingMessageContainer}>
          <Text style={styles.loadingMessage}>Loading...</Text>
        </View>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: Colours.backgroundColour
  },
  loadingMessageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  loadingMessage: {
    fontSize: 30,
    color: Colours.primaryColour
  },
  resultMessage: {
    textAlign: "center",
    fontSize: 25,
    padding: 5
  }
});

export default ResultsScreen;
