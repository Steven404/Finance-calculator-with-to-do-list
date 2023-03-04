import { StyleSheet, View } from 'react-native';

import { spacing } from '../../theme';
import Icon, { IconType } from '../image/Icon';
import Text from '../text/Text';

export interface OnboardingItemType {
  description: string;
  icon: IconType;
  id: number;
  title: string;
}

interface OnboardingItemPropsType extends OnboardingItemType {
  width: number;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const OnboardingItem = ({
  description,
  icon,
  id,
  title,
  width,
}: OnboardingItemPropsType): JSX.Element => {
  return (
    <View style={[styles.container, { width }]}>
      <View style={{ flex: 0.8, justifyContent: 'center', marginTop: 50 }}>
        <Icon icon={icon} size={width * 0.8} />
      </View>
      <View style={[styles.textWrapper, { flex: 0.2 }]}>
        <Text align="center" size="xxl" color="darkBlue" weight="600">
          {title}
        </Text>
        <Text
          marginVertical={spacing.lg}
          marginHorizontal={spacing.xxxl}
          align="center"
          size="sm"
          color="disabled"
          weight="400"
        >
          {description}
        </Text>
      </View>
    </View>
  );
};

export default OnboardingItem;
