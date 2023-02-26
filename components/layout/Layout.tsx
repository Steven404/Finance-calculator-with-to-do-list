import { View, Text } from "react-native";
import React from "react";

interface LayoutPropsType {
  actionButtonOnPress?: () => void;
  headerTitle?: string;
  headerSubtitle?: string;
  width: number;
}

const Layout = ({
  actionButtonOnPress,
  headerTitle,
  headerSubtitle,
  width,
}: LayoutPropsType) => {
  return (
    <View>
      <Text>Layout</Text>
    </View>
  );
};

export default Layout;
