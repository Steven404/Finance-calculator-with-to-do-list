import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { ComponentProps, ReactNode } from 'react';
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
    height: spacing.xxxl,
    marginLeft: spacing.lg,
    width: 3,
    zIndex: 1,
  },
  leftIcon: {
    alignItems: 'center',
    flexDirection: 'row',
    left: spacing.lg,
    position: 'absolute',
    top: 50,
    zIndex: 1,
  },
  textInput: {
    backgroundColor: colors.white,
    borderColor: colors.darkBlue,
    borderRadius: borderRadius.lg,
    borderWidth: 2,
    height: 55,
    paddingLeft: 65,
  },
});

interface ExtraInputProps extends TextInputProps {
  icon?: ComponentProps<typeof MaterialCommunityIcons>['name'];
  label: ReactNode;
}

const TextInput = ({ icon, label, ...props }: ExtraInputProps) => {
  return (
    <View style={{ width: '100%' }}>
      <View style={styles.leftIcon}>
        <MaterialCommunityIcons name={icon} size={30} color={colors.darkBlue} />
        <View style={styles.borderRightOfImage} />
      </View>
      <Text weight="600" color="darkBlue" marginVertical={spacing.md}>
        {label}
      </Text>
      <RNTextInput
        placeholderTextColor={colors.textGray}
        {...props}
        style={styles.textInput}
      />
    </View>
  );
};

export default TextInput;
