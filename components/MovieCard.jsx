import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const MovieCard = ({ movie, goToMovieDetails }) => {
  const { title, overview, release_date, vote_average, id } = movie;
  return (
    <View>
      <Text>{title}</Text>
      <Text>{release_date}</Text>
      <Text>{vote_average}</Text>
      <Button title="Details..." onPress={() => goToMovieDetails(id)} />
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});
