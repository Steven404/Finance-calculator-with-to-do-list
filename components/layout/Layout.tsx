/* eslint-disable react/style-prop-object */
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { borderRadius, colors, spacing } from '../../theme';
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
  actionBar: {
    alignItems: 'center',
    bottom: 0,
    flex: 0.15,
    position: 'relative',
  },
  actionBarContent: { height: '100%', justifyContent: 'center' },
  actionButtonLine: {
    backgroundColor: colors.textGray,
    border: 5,
    borderRadius: borderRadius.lg,
    height: 5,
    width: '95%',
  },
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'flex-start',
    backgroundColor: colors.darkBlue,
    flex: 0.25,
    justifyContent: 'flex-start',
    paddingHorizontal: spacing.xxxl,
    paddingTop: spacing.xxxxl,
    position: 'relative',
    top: 0,
  },
  pageContent: {
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
      <View
        style={{
          ...styles.pageContent,
          flex: actionButtonOnPress ? 0.6 : 0.75,
        }}
      >
        {children}
      </View>
      {actionButtonOnPress && (
        <View style={styles.actionBar}>
          <View style={styles.actionButtonLine} />
          <View style={styles.actionBarContent}>
            <TouchableOpacity activeOpacity={0.6} onPress={actionButtonOnPress}>
              <MaterialCommunityIcons
                name="plus-circle-outline"
                size={spacing.xxxxl}
                color={colors.textGray}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
      <StatusBar animated style="light" />
    </View>
  );
};

export default Layout;
