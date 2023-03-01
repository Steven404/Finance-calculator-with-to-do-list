/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors, spacing } from '../../theme';
import Text from '../text/Text';

interface LayoutPropsType {
  actionButtonOnPress?: () => void;
  children?: JSX.Element[] | JSX.Element;
  fillBackground?: boolean;
  headerSubtitle?: string;
  headerTitle?: string;
  width: number;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'flex-start',
    backgroundColor: colors.darkBlue,
    flex: 0.25,
    justifyContent: 'center',
    paddingHorizontal: spacing.xxxl,
    paddingTop: spacing.xl,
  },
  pageContent: {
    flex: 0.75,
    padding: spacing.xxxxl,
  },
});

const Layout = ({
  actionButtonOnPress,
  children,
  fillBackground = false,
  headerSubtitle,
  headerTitle,
  width,
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

export default Layout;
