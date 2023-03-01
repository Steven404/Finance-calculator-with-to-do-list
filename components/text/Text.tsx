import React, { ReactNode } from 'react';
import { Text as RNText, TextStyle } from 'react-native';

import { colors, fontSize } from '../../theme';

interface TextPropsType {
  align?: TextStyle['textAlign'];
  children: ReactNode;
  color?: keyof typeof colors;
  marginHorizontal?: TextStyle['marginHorizontal'];
  marginVertical?: TextStyle['marginVertical'];
  onPress?: () => void;
  size?: keyof typeof fontSize;
  weight?: TextStyle['fontWeight'];
}

const Text = ({
  align = 'left',
  children,
  color = 'textGray',
  marginHorizontal,
  marginVertical,
  onPress,
  size = 'md',
  weight = '400',
}: TextPropsType) => {
  return (
    <RNText
      onPress={onPress}
      style={{
        color: colors[color],
        fontSize: fontSize[size],
        fontWeight: weight,
        marginHorizontal,
        marginVertical,
        textAlign: align,
      }}
    >
      {children}
    </RNText>
  );
};

export default Text;
