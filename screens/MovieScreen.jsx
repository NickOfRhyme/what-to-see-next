import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import * as api from "../api";
import DetailedMovieCard from "../components/DetailedMovieCard";

const MovieScreen = ({ route, navigation }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovieDetailsById = (movieId) => {
    api.getMovieById(movieId).then((result) => {
      setMovie(result);
      setIsLoading(false);
    });
  };

  useEffect(() => fetchMovieDetailsById(movieId), []);

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <DetailedMovieCard movie={movie} />
      )}
    </View>
  );
};

export default MovieScreen;
