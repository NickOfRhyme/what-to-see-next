import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, navigation }) => {
  const goToMovieDetails = (movieId) => {
    navigation.navigate("Movie", { movieId });
  };

  return (
    <View style={styles.scrollView}>
      <ScrollView>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            goToMovieDetails={goToMovieDetails}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: { height: "95%", margin: 5 }
});

export default MovieList;
