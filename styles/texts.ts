import { TextStyle } from "react-native";
import { colors } from "../theme";

export const boldText: TextStyle = {
  fontWeight: "800",
};

export const primaryText: TextStyle = {
  fontWeight: "600",
};

export const secondaryText: TextStyle = {
  fontWeight: "400",
  color: colors.disabled,
};

export const primaryTextWhite: TextStyle = {
  ...primaryText,
  color: colors.white,
};

export const primaryTextDarkBlue: TextStyle = {
  ...primaryText,
  color: colors.darkBlue,
};

export const boldTextDarkBlue: TextStyle = {
  ...boldText,
  color: colors.darkBlue,
};
