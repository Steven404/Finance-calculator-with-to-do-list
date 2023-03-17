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
    height: '100%',
    justifyContent: 'flex-start',
  },
  actionBarContent: { height: '100%', justifyContent: 'center' },
  actionButtonLine: {
    backgroundColor: colors.textGrayLight,
    border: 5,
    borderRadius: borderRadius.lg,
    height: 2.5,
    width: '90%',
  },
  container: {
    flex: 1,
    height: '100%',
  },
  header: {
    alignItems: 'flex-start',
    backgroundColor: colors.darkBlue,
    flex: 0.2,
    justifyContent: 'flex-start',
    paddingHorizontal: spacing.xxxl,
    paddingTop: spacing.xxxxl,
    position: 'relative',
    top: 0,
  },
  pageContent: {
    paddingHorizontal: spacing.xxxl,
    paddingVertical: spacing.xl,
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
          <Text color="ofWhite" size="xxxl">
            {headerTitle}
          </Text>
        )}
        {headerSubtitle && (
          <Text color="textGrayLight" size="xs" marginVertical="md">
            {headerSubtitle}
          </Text>
        )}
      </View>
      <View
        style={{
          ...styles.pageContent,
          flex: actionButtonOnPress ? 0.65 : 0.75,
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
                color={colors.textGrayLight}
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
