import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import Text from "../../components/text/Text";
import { colors, spacing } from "../../theme";

interface LayoutPropsType {
  actionButtonOnPress?: () => void;
  children?: JSX.Element[] | JSX.Element;
  headerTitle?: string;
  headerSubtitle?: string;
  width: number;
  fillBackground?: boolean;
}

const Layout = ({
  actionButtonOnPress,
  children,
  headerTitle,
  headerSubtitle,
  width,
  fillBackground = false,
}: LayoutPropsType) => {
  return (
    <View
      style={[
        styles.container,
        { width },
        fillBackground && { backgroundColor: colors.darkBlue },
      ]}
    >
      <View style={styles.header}>
        {headerTitle && (
          <Text color="white" size="xxxl">
            {headerTitle}
          </Text>
        )}
        {headerSubtitle && (
          <Text size="xs" marginVertical={spacing.md}>
            {headerSubtitle}
          </Text>
        )}
      </View>
      <View style={styles.pageContent}>{children}</View>
      <StatusBar animated style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContent: {
    flex: 0.75,
    padding: spacing.xxxxl,
  },
  header: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: spacing.xl,
    paddingHorizontal: spacing.xxxl,
    backgroundColor: colors.darkBlue,
  },
});

export default Layout;
