import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MovieCard = ({
  movie: { title, overview, release_date, vote_average }
}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{release_date}</Text>
      <Text>{vote_average}</Text>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});
