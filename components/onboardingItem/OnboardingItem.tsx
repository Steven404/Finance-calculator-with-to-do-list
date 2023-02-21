import { StyleSheet, Text, View } from "react-native";
import { colors, fontSize, spacing } from "../../theme";
import PersonalCalculator from "../../assets/images/personal_calculator.svg";
import PiggyBank from "../../assets/images/piggy_bank.svg";
import Icon, { IconType } from "../image/Icon";

export interface OnboardingItemType {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}

interface OnboardingItemPropsType extends OnboardingItemType {
  width: number;
  height: number;
}

const OnboardingItem = ({
  id,
  title,
  description,
  icon,
  width,
  height,
}: OnboardingItemPropsType): JSX.Element => {
  return (
    <View style={[styles.container, { width }]}>
      <View style={{ flex: 0.7, justifyContent: "center" }}>
        <Icon icon={icon} size={width * 0.7} />
      </View>
      <View style={[styles.textWrapper, { flex: 0.3 }]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
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
  title: {
    fontSize: fontSize.xxxl,
    fontWeight: "800",
    color: colors.darkBlue,
  },
  description: {
    textAlign: "center",
    fontSize: fontSize.md,
    marginTop: spacing.xxl,
    paddingHorizontal: spacing.xxxxl,
    color: colors.disabled,
  },
});

export default OnboardingItem;
