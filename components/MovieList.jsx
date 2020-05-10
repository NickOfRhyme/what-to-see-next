import React from "react";
import { View } from "react-native";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  console.log("movies: ", movies);
  return (
    <View>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </View>
  );
};

export default MovieList;
