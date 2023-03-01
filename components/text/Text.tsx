import React, { ReactNode } from "react";
import { Text as RNText, TextStyle } from "react-native";

import { colors, fontSize } from "../../theme";

interface TextPropsType {
  align?: TextStyle["textAlign"];
  children: ReactNode;
  color?: keyof typeof colors;
  marginHorizontal?: TextStyle["marginHorizontal"];
  marginVertical?: TextStyle["marginVertical"];
  size?: keyof typeof fontSize;
  weight?: TextStyle["fontWeight"];
  onPress?: () => void;
}

const Text = ({
  align = "left",
  children,
  color = "textGray",
  marginHorizontal,
  marginVertical,
  size = "md",
  weight = "400",
  onPress,
}: TextPropsType) => {
  return (
    <RNText
      onPress={onPress}
      style={{
        textAlign: align,
        color: colors[color],
        marginHorizontal: marginHorizontal,
        marginVertical: marginVertical,
        fontSize: fontSize[size],
        fontWeight: weight,
      }}
    >
      {children}
    </RNText>
  );
};

export default Text;
