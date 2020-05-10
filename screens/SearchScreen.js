import React from "react";
import { View, Text, Button } from "react-native";

const SearchScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Search screen!</Text>
      <Button title="Search" onPress={() => navigation.navigate("Results")} />
    </View>
  );
};

export default SearchScreen;
