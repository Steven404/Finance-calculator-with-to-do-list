import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface LayoutPropsType {
  actionButtonOnPress?: () => void;
  children?: JSX.Element[] | JSX.Element;
  headerTitle?: string;
  headerSubtitle?: string;
  width: number;
}

const Layout = ({
  actionButtonOnPress,
  children,
  headerTitle,
  headerSubtitle,
  width,
}: LayoutPropsType) => {
  return (
    <View style={[styles.container, { width }]}>
      <Text>Layout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Layout;
