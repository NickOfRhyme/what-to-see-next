import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MovieList from "../components/MovieList";
import * as api from "../api";

const ResultsScreen = ({ route }) => {
  const { searchTerm } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const fetchMovies = (movieName, page = 1) => {
    api.getMovies(movieName, page).then(({ page, total_pages, results }) => {
      setMovies(results);
      setIsLoading(false);
    });
  };

  useEffect(() => fetchMovies(searchTerm), []);

  return (
    <View>
      <Text>Results for '{searchTerm}'</Text>
      {isLoading ? <Text>Loading...</Text> : <MovieList movies={movies} />}
    </View>
  );
};

export default ResultsScreen;
