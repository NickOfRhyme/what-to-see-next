import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import * as api from "../api";

const ResultsScreen = ({ route }) => {
  const { searchTerm } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const fetchFilms = (filmName, page = 1) => {
    api.getFilms(filmName, page).then(console.dir);
  };

  useEffect(() => fetchFilms(searchTerm), []);

  return (
    <View>
      <Text>Results for '{searchTerm}'</Text>
    </View>
  );
};

export default ResultsScreen;
