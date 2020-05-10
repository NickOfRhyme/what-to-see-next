import React from "react";
import { View } from "react-native";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, navigation }) => {
  const goToMovieDetails = (movieId) => {
    navigation.navigate("Movie", { movieId });
  };

  return (
    <View>
      {movies.map((movie) => (
        <MovieCard movie={movie} goToMovieDetails={goToMovieDetails} />
      ))}
    </View>
  );
};

export default MovieList;
