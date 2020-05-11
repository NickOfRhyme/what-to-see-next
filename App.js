import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./screens/SearchScreen";
import ResultsScreen from "./screens/ResultsScreen";
import MovieScreen from "./screens/MovieScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Find a movie" }}
        />
        <Stack.Screen name="Results" component={ResultsScreen} />
        <Stack.Screen
          name="Movie"
          component={MovieScreen}
          options={{ title: "Movie details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
