import { Image, TouchableHighlight } from "react-native";
import { iconSize } from "../../theme";

const availableIcons = {
  personalCalculator: require("../../assets/images/personal_calculator.svg"),
  personalFinance: require("../../assets/images/personal_finance.svg"),
  piggyBank: require("../../assets/images/piggy_bank.svg"),
};

export type ImageType = keyof typeof availableIcons;

export interface IconPropsType {
  image: ImageType;
  size: keyof typeof iconSize;
  onPress?: () => void;
}

const Icon = ({ image, size, onPress }: IconPropsType): JSX.Element => {
  return <Image style={{ flex: 0.7 }} source={availableIcons[image]} />;
};

export default Icon;
