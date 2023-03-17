import uuid from 'react-native-uuid';

import { TaskType } from '../types/TaskTypes';

export const getExampleTasks = (userId: string): TaskType[] => [
  {
    id: uuid.v1() as string,
    remindAt: new Date().getTime(),
    summary: 'This is an example task (1)',
    title: 'Example task 1',
    userId,
  },
  {
    id: uuid.v1() as string,
    remindAt: new Date().getTime(),
    summary: 'This is an example task (2)',
    title: 'Example task 2',
    userId,
  },
  {
    id: uuid.v1() as string,
    remindAt: new Date().getTime(),
    summary: 'This is an example task (3)',
    title: 'Example task 3',
    userId,
  },
];
