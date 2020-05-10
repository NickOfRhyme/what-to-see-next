import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (text) => {
    setSearchTerm(text);
  };

  return (
    <View>
      <Text>Search screen!</Text>
      <TextInput
        placeholder="Search for a movie"
        value={searchTerm}
        onChangeText={handleInputChange}
      />
      <Button
        title="Search"
        onPress={() =>
          navigation.navigate("Results", { movieName: searchTerm })
        }
      />
    </View>
  );
};

export default SearchScreen;
