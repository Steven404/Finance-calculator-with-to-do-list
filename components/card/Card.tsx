import { View, StyleSheet, ViewStyle, TouchableHighlight } from "react-native";
import React, { ReactNode } from "react";
import { spacing } from "../../theme";

interface CardPropsType {
  children: ReactNode;
  onPress?: () => void;
  shadow?: boolean;
  customStyle?: ViewStyle;
}

const Card = ({ children, onPress, shadow, customStyle }: CardPropsType) => {
  return (
    <TouchableHighlight
      activeOpacity={0.85}
      onPress={onPress}
      style={[shadow && style.shadow]}
    >
      <View style={[style.container, customStyle && customStyle]}>
        {children}
      </View>
    </TouchableHighlight>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 3,
    borderRadius: 10,
    overflow: "hidden",
  },
  shadow: {
    borderRadius: 10,
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
