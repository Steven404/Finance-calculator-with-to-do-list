import React from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';

import { colors, fontSize, spacing } from '../../theme';

interface TextPropsType extends TextProps {
  align?: TextStyle['textAlign'];
  color?: keyof typeof colors;
  marginHorizontal?: keyof typeof spacing;
  marginVertical?: keyof typeof spacing;
  size?: keyof typeof fontSize;
  weight?: TextStyle['fontWeight'];
}

const Text = ({
  align = 'left',
  children = 'Hello world',
  color = 'textGray',
  marginHorizontal,
  marginVertical,
  size = 'md',
  weight = '400',
  ...restProps
}: TextPropsType) => {
  return (
    <RNText
      style={{
        color: colors[color],
        fontSize: fontSize[size],
        fontWeight: weight,
        ...(marginHorizontal && {
          marginHorizontal: spacing[marginHorizontal],
        }),
        ...(marginVertical && {
          marginVertical: spacing[marginVertical],
        }),
        textAlign: align,
      }}
      {...restProps}
    >
      {children}
    </RNText>
  );
};

export default Text;
