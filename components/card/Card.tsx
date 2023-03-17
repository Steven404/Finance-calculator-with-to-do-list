import React, { ReactNode } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

interface CardPropsType extends TouchableOpacityProps {
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
  children,
  customStyle,
  shadow,
  ...restProps
}: CardPropsType) => (
  <TouchableOpacity
    activeOpacity={restProps.onPress ? 0.75 : 1}
    style={[
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
