import { View, Text, useWindowDimensions } from "react-native";
import React from "react";

const Home = () => {
  const { width } = useWindowDimensions();

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
