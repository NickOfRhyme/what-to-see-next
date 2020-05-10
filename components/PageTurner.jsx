import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const PageTurner = (page, total_pages, pageTurnFunc) => {
  return (
    <View>
      <Button title="Previous" onPress={() => pageTurnFunc(-1)} />
      <Text>{`${page} of ${total_pages}`}</Text>
      <Button title="Next" onPress={() => pageTurnFunc(1)} />
    </View>
  );
};

export default PageTurner;
