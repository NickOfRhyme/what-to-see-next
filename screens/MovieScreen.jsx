import React, { useState, useEffect } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import * as api from "../api";
import Colours from "../constants/Colours";
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
    <View style={styles.background}>
      <SafeAreaView style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingMessageContainer}>
            <Text style={styles.loadingMessage}>Loading...</Text>
          </View>
        ) : (
          <>
            <DetailedMovieCard movie={movie} />
            <Button
              title="More movies like this"
              type="outline"
              containerStyle={styles.button}
              onPress={() =>
                navigation.navigate("Results", {
                  recommendationMovieId: movieId,
                  movieName: movie.title
                })
              }
            />
          </>
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colours.backgroundColour,
    height: "100%"
  },
  container: {
    margin: 25,
    alignItems: "center"
  },
  loadingMessageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  loadingMessage: {
    fontSize: 30,
    color: Colours.primaryColour
  },
  button: {
    margin: 15,
    width: "40%"
  }
});

export default MovieScreen;
