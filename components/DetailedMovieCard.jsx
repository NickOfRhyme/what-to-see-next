import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card, Rating } from "react-native-elements";

const DetailedMovieCard = ({ movie }) => {
  const {
    title,
    overview,
    release_date,
    vote_average,
    tagline,
    backdrop_path
  } = movie;

  const year = release_date.split("-")[0];

  return (
    <Card
      title={`${title} (${year})`}
      image={{
        uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`
      }}
      imageStyle={styles.image}
      featuredTitle={tagline && `'${tagline}'`}
      featuredTitleStyle={styles.tagline}
    >
      <Rating
        type={"star"}
        ratingCount={10}
        startingValue={vote_average}
        style={styles.rating}
        readonly
      />
      <Text style={styles.overview}>{overview}</Text>
    </Card>
  );
};

export default DetailedMovieCard;

const styles = StyleSheet.create({
  image: {
    height: 400
  },
  tagline: {
    fontStyle: "italic"
  },
  rating: {
    margin: 10
  },
  overview: {
    fontSize: 18,
    margin: 15
  }
});
