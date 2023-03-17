import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { ComponentProps, ReactNode, useState } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  View,
} from 'react-native';

import { borderRadius, colors, spacing } from '../../theme';
import Text from '../text/Text';

const styles = StyleSheet.create({
  borderRightOfImage: {
    backgroundColor: colors.darkBlue,
    borderRadius: borderRadius.sm,
    height: spacing.xxl,
    marginLeft: spacing.md,
    width: 3,
    zIndex: 1,
  },
  textInputBorderError: { borderColor: colors.error, borderWidth: 2 },
  textInputBorderFocused: { borderColor: colors.darkBlue, borderWidth: 2 },
  textInputWrapper: {
    alignItems: 'center',
    backgroundColor: colors.ofWhite,
    borderRadius: borderRadius.lg,
    display: 'flex',
    flexDirection: 'row',
    padding: spacing.sm,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: spacing.lg,
  },
});

interface ExtraInputProps extends TextInputProps {
  error?: string;
  icon?: ComponentProps<typeof MaterialCommunityIcons>['name'];
  label: ReactNode;
}

const TextInput = ({ error, icon, label, ...props }: ExtraInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View style={{ ...styles.wrapper, width: '100%' }}>
      <Text weight="600" color="darkBlue" marginVertical="sm">
        {label}
      </Text>
      <View
        style={{
          ...styles.textInputWrapper,
          ...(isFocused && !error && styles.textInputBorderFocused),
          ...(error && styles.textInputBorderError),
        }}
      >
        <MaterialCommunityIcons
          name={icon}
          size={spacing.xxxl}
          color={colors.darkBlue}
        />
        <View
          style={{
            ...styles.borderRightOfImage,
            ...(error && { backgroundColor: colors.error }),
          }}
        />
        <RNTextInput
          onFocus={() => setIsFocused(true)}
          style={{ marginLeft: spacing.md, width: '100%' }}
          {...props}
        />
      </View>
      {error && (
        <Text size="sm" color="error">
          {error}
        </Text>
      )}
    </View>
  );
};

export default TextInput;
