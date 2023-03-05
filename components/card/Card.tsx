import React, { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

interface CardPropsType {
  children: ReactNode;
  customStyle?: ViewStyle;
  onPress?: () => void;
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

const Card = ({ children, customStyle, onPress, shadow }: CardPropsType) => {
  return (
    <TouchableOpacity
      activeOpacity={onPress ? 0.75 : 1}
      onPress={onPress}
      style={[
        style.container,
        shadow && style.shadow,
        customStyle && customStyle,
      ]}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Card;
