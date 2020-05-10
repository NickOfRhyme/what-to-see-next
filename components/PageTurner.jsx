import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const PageTurner = ({ page, totalPages, pageTurnFunc }) => {
  return (
    <SafeAreaView style={styles.PageTurner}>
      <Button
        title="Previous"
        containerStyle={styles.button}
        disabled={page === 1}
        onPress={() => pageTurnFunc(-1)}
      />
      <Text>{`${page} of ${totalPages}`}</Text>
      <Button
        title="Next"
        containerStyle={styles.button}
        disabled={page === totalPages}
        onPress={() => pageTurnFunc(+1)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  PageTurner: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10
  },
  button: {
    width: 100
  }
});

export default PageTurner;
