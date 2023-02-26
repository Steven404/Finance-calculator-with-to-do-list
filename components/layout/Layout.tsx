import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, fontSize, spacing } from "../../theme";
import { StatusBar } from "expo-status-bar";
import { primaryTextWhite } from "../../styles/texts";

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
      <View style={styles.header}>
        {headerTitle && (
          <Text style={{ fontSize: fontSize.xxxl, ...primaryTextWhite }}>
            {headerTitle}
          </Text>
        )}
        {headerSubtitle && <Text>{headerSubtitle}</Text>}
      </View>
      {children}
      <StatusBar animated style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: spacing.xxxxl,
    backgroundColor: colors.darkBlue,
  },
});

export default Layout;
