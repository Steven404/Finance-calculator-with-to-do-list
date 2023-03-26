import { TaskType } from './TaskTypes';
import { UserType } from './UserTypes';

export interface AllTypesType {
  task?: TaskType;
  user?: UserType;
}

export const AllTypes = {
  task: 'TaskType',
  user: 'UserType',
} as const;

export type RootStackParamList = {
  Home: undefined;
  Onboarding: undefined;
};
