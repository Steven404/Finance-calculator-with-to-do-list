import React, { ReactNode } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import { colors } from '../../theme';

interface CardPropsType extends TouchableOpacityProps {
  backgroundColor?: keyof typeof colors;
  children: ReactNode;
  customStyle?: ViewStyle;
  shadow?: boolean;
}

const style = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  shadow: {
    backgroundColor: 'transparent',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});

const Card = ({
  backgroundColor,
  children,
  customStyle,
  shadow,
  ...restProps
}: CardPropsType) => (
  <TouchableOpacity
    activeOpacity={restProps.onPress ? 0.75 : 1}
    style={[
      backgroundColor && { backgroundColor: colors[backgroundColor] },
      style.container,
      shadow && style.shadow,
      customStyle && customStyle,
    ]}
    {...restProps}
  >
    {children}
  </TouchableOpacity>
);

export default Card;
