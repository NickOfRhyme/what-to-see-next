import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DetailedMovieCard = ({ movie }) => {
  const {
    title,
    overview,
    release_date,
    vote_average,
    tagline,
    runtime,
    backdrop_path,
    poster_path,
    id
  } = movie;
  return (
    <View>
      <Text>{title}</Text>
      <Text>{release_date}</Text>
      <Text>{vote_average}</Text>
      <Text>'{tagline}'</Text>
      <Text>{overview}</Text>
    </View>
  );
};

export default DetailedMovieCard;

const styles = StyleSheet.create({});
