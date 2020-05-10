import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { ListItem } from "react-native-elements";

const MovieCard = ({ movie, goToMovieDetails }) => {
  const { title, release_date, vote_average, id } = movie;
  const year = release_date.split("-")[0];
  return (
    <ListItem
      title={title}
      subtitle={year}
      rightTitle={vote_average ? vote_average : "no ratings"}
      onPress={() => goToMovieDetails(id)}
    ></ListItem>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});
