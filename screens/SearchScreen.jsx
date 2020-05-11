import React, { useState } from "react";
import { Input, Button } from "react-native-elements";
import Colours from "../constants/Colours";
import { View, StyleSheet, Text } from "react-native";

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (text) => {
    setSearchTerm(text);
  };

  const goToResults = () => {
    navigation.navigate("Results", { movieName: searchTerm });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.searchText}>What to see next?</Text>
      <Input
        inputStyle={styles.textInput}
        containerStyle={styles.textInputContainer}
        placeholder="Search for a movie that you like"
        value={searchTerm}
        onChangeText={handleInputChange}
        onSubmitEditing={goToResults}
      />
      <View style={styles.button}>
        <Button
          title="Search"
          type="outline"
          disabled={searchTerm.length === 0}
          onPress={goToResults}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: Colours.backgroundColour,
    justifyContent: "center",
    alignItems: "center"
  },
  searchText: {
    color: Colours.primaryColour,
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic"
  },
  textInput: {
    color: Colours.primaryColour
  },
  textInputContainer: {
    width: "75%",
    margin: 15
  },
  button: {
    width: "50%",
    margin: 15
  }
});

export default SearchScreen;
