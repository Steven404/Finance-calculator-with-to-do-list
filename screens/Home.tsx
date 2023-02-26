import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import Layout from "../components/layout/Layout";

const Home = () => {
  const { width } = useWindowDimensions();

  return (
    <Layout
      width={width}
      headerTitle="Welcome Alex"
      headerSubtitle={"You have 3 tasks left"}
    >
      <View>
        <Text>Home</Text>
      </View>
    </Layout>
  );
};

export default Home;
