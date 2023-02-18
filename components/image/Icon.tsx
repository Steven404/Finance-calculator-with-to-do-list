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
  return (
    <TouchableHighlight onPress={onPress}>
      <Image
        style={{ height: iconSize[size], width: iconSize[size] }}
        source={availableIcons[image]}
      />
    </TouchableHighlight>
  );
};

export default Icon;
