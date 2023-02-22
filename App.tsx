import { StatusBar } from "expo-status-bar";
import { StyleSheet, useWindowDimensions, View } from "react-native";

import Onboarding from "./screens/Onboarding";

export default function App() {
  const { height, width } = useWindowDimensions();
  return (
    <View style={[styles.container]}>
      <Onboarding />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
