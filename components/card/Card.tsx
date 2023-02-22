import { View, Text } from "react-native";
import React, { ReactNode } from "react";

interface CardPropsType {
  children: ReactNode;
  onPress?: () => void;
  shadow?: boolean;
}

const Card = ({ children, onPress, shadow }: CardPropsType) => {
  return (
    <View
      style={[
        shadow && {
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.17,
          shadowRadius: 2.54,
          elevation: 3,
        },
      ]}
    >
      {children}
    </View>
  );
};

export default Card;
