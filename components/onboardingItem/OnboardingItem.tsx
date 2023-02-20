import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import { colors, fontSize, spacing } from "../../theme";
import Icon, { ImageType } from "../image/Icon";
import PersonalCalculator from "../../assets/images/piggy_bank.svg";

export interface OnboardingItemType {
  id: number;
  title: string;
  description: string;
  image?: ImageType;
  width: number;
  height: number;
}

const OnboardingItem = ({
  id,
  title,
  description,
  image,
  width,
  height,
}: OnboardingItemType): JSX.Element => {
  return (
    <View style={[styles.container, { width }, { height }]}>
      <View style={{ height: height * 0.7 }}>
        <PersonalCalculator width={width * 0.8} />
      </View>
      <View style={[styles.textWrapper, { height: height * 0.3 }]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    fontSize: fontSize.md,
    marginTop: spacing.xxl,
    paddingHorizontal: spacing.xxxxl,
    color: colors.disabled,
  },
});

export default OnboardingItem;
