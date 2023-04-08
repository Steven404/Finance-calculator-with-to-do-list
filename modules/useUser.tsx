import { useEffect, useState } from 'react';
import uuid from 'react-native-uuid';

import { TaskType } from '../types/TaskTypes';
import { UserType } from '../types/UserTypes';
import {
  clearAll,
  getData,
  getExampleTasks,
  showErrorToast,
  storeObject,
} from './common';

const getUserTasksForToday = (tasks: Array<TaskType>) =>
  tasks.filter(
    (task) =>
      new Date(task.remindAt).toDateString() === new Date().toDateString()
  );

const createUser = async (name: string): Promise<void> => {
  const newUserId = uuid.v4() as string;
  await storeObject('user', {
    id: newUserId,
    name,
    tasks: getExampleTasks(newUserId, 3),
  });
};

const useUser = () => {
  const [user, setUser] = useState<UserType>();
  const [userTasksForToday, setUserTasksForToday] = useState<Array<TaskType>>(
    []
  );

  useEffect(() => {
    const getUser = async () => {
      const fetchedUser = await getData('user');
      if (!fetchedUser) {
        showErrorToast('User not found. Try restarting the application');
        clearAll();
      }
      setUser(fetchedUser);
    };
    getUser();
  }, []);

  useEffect(() => {
    if (user) {
      setUserTasksForToday(getUserTasksForToday(user.tasks));
    }
  }, [user]);

  return { createUser, user, userTasksForToday };
};

export default useUser;
