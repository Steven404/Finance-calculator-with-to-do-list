import { StyleSheet, View } from "react-native";

import { spacing } from "../../theme";
import Icon, { IconType } from "../image/Icon";
import Text from "../text/Text";

export interface OnboardingItemType {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}

interface OnboardingItemPropsType extends OnboardingItemType {
  width: number;
}

const OnboardingItem = ({
  id,
  title,
  description,
  icon,
  width,
}: OnboardingItemPropsType): JSX.Element => {
  return (
    <View style={[styles.container, { width }]}>
      <View style={{ flex: 0.8, justifyContent: "center", marginTop: 50 }}>
        <Icon icon={icon} size={width * 0.8} />
      </View>
      <View style={[styles.textWrapper, { flex: 0.2 }]}>
        <Text align="center" size="xxl" color="darkBlue" weight="600">
          {title}
        </Text>
        <Text
          marginVertical={spacing.xl}
          marginHorizontal={spacing.xxxxl}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OnboardingItem;
