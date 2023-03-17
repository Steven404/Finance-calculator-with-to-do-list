import { TaskType } from './TaskTypes';

export interface UserType {
  id: string;
  name: string;
  tasks: TaskType[];
}
