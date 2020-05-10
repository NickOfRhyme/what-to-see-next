import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const PageTurner = ({ page, totalPages, pageTurnFunc }) => {
  return (
    <View style={styles.PageTurner}>
      <Button
        title="Previous"
        disabled={page === 1}
        onPress={() => pageTurnFunc(-1)}
      />
      <Text>{`${page} of ${totalPages}`}</Text>
      <Button
        title="Next"
        disabled={page === totalPages}
        onPress={() => pageTurnFunc(+1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  PageTurner: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default PageTurner;
