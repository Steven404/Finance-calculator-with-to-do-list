import { View, StyleSheet, ViewStyle, TouchableHighlight } from "react-native";
import React, { ReactNode } from "react";

interface CardPropsType {
  children: ReactNode;
  onPress?: () => void;
  shadow?: boolean;
  customStyle?: ViewStyle;
}

const Card = ({ children, onPress, shadow, customStyle }: CardPropsType) => {
  return (
    <TouchableHighlight
      activeOpacity={onPress ? 0.75 : 1}
      onPress={onPress}
      underlayColor={
        customStyle?.backgroundColor ? customStyle.backgroundColor : "white"
      }
      style={[
        style.container,
        shadow && style.shadow,
        customStyle && customStyle,
      ]}
    >
      {children}
    </TouchableHighlight>
  );
};

const style = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  shadow: {
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
  },
});

export default Card;
