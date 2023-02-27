import React from "react";
import { Text, useWindowDimensions, View } from "react-native";

import Layout from "../components/layout/Layout";

const Home = () => {
  const { width } = useWindowDimensions();

  return (
    <Layout
      width={width}
      headerTitle="Welcome Alex"
      headerSubtitle="You have 0 tasks left for today."
      fillBackground
    >
      <View style={{ alignItems: "center" }}>
        <Text>Home</Text>
      </View>
    </Layout>
  );
};

export default Home;
