import PersonalCalculator from "../../assets/images/personal_calculator.svg";
import PersonalFinance from "../../assets/images/personal_finance.svg";
import PiggyBank from "../../assets/images/piggy_bank.svg";
import TimeManagement from "../../assets/images/time_management.svg";
import Wallet from "../../assets/images/wallet.svg";
import WorkingLate from "../../assets/images/working_late.svg";
import Programming from "../../assets/images/programming.svg";
import ReadingTime from "../../assets/images/reading_time.svg";

const availabeIcons = {
  PersonalCalculator,
  PersonalFinance,
  PiggyBank,
  TimeManagement,
  Wallet,
  WorkingLate,
  Programming,
  ReadingTime,
};

export type IconType = keyof typeof availabeIcons;

export interface IconPropsType {
  icon: IconType;
  size: number;
  onPress?: () => void;
}

const Icon = ({ icon, size, onPress }: IconPropsType): JSX.Element => {
  const I = availabeIcons[icon];
  return <I width={size} height={size} />;
};

export default Icon;
