import PersonalCalculator from '../../assets/images/personal_calculator.svg';
import PersonalFinance from '../../assets/images/personal_finance.svg';
import PiggyBank from '../../assets/images/piggy_bank.svg';
import Programming from '../../assets/images/programming.svg';
import ReadingTime from '../../assets/images/reading_time.svg';
import TimeManagement from '../../assets/images/time_management.svg';
import Wallet from '../../assets/images/wallet.svg';
import WorkingLate from '../../assets/images/working_late.svg';

const availabeIcons = {
  PersonalCalculator,
  PersonalFinance,
  PiggyBank,
  Programming,
  ReadingTime,
  TimeManagement,
  Wallet,
  WorkingLate,
};

export type IconType = keyof typeof availabeIcons;

export interface IconPropsType {
  icon: IconType;
  onPress?: () => void;
  size: number;
}

const Icon = ({ icon, onPress, size }: IconPropsType): JSX.Element => {
  const I = availabeIcons[icon];
  return <I width={size} height={size} />;
};

export default Icon;
