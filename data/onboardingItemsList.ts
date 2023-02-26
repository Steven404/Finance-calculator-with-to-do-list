import { OnboardingItemType } from "../components/onboardingItem/OnboardingItem";

export const onboardingScreens: Array<OnboardingItemType> = [
  {
    id: 1,
    title: "Manage your work hours",
    description:
      "Keep track of your daily work schedule with the Work/Task organizer",
    icon: "Programming",
  },
  {
    id: 2,
    title: "Organize your time",
    description:
      "Categorize your daily activities, set a time and reminders for them with the Daily activity organizer",
    icon: "TimeManagement",
  },
  {
    id: 3,
    title: "Make up lost work",
    description:
      "The Work/task organizer keeps track of lost work hours and gives you the option to make up later on",
    icon: "WorkingLate",
  },
  {
    id: 4,
    title: "Take breaks",
    description:
      "Remind yourself to take breaks using the break reminder feature on the Work/task organizer",
    icon: "ReadingTime",
  },
];
