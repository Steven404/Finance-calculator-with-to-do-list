import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, useWindowDimensions, View } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

import Card from '../components/card/Card';
import Layout from '../components/layout/Layout';
import Text from '../components/text/Text';
import TextInput from '../components/textInput/TextInput';
import { getData } from '../modules/common';
import { spacing } from '../theme';
import { RootStackParamList } from '../types/CommonTypes';
import { TaskType } from '../types/TaskTypes';
import { UserType } from '../types/UserTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const styles = StyleSheet.create({
  addTaskModalView: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: '80%',
    padding: spacing.xxl,
    top: '20%',
  },
  taskCard: {
    padding: spacing.md,
  },
  tasksWrapper: { flex: 1 },
});

const getUserTasksForToday = (tasks: Array<TaskType>) =>
  tasks.filter(
    (task) =>
      new Date(task.remindAt).toDateString() === new Date().toDateString()
  );

const Home = ({ navigation }: Props) => {
  const { width } = useWindowDimensions();
  const [user, setUser] = useState<UserType>();
  const [tasksForToday, setTasksForToday] = useState<Array<TaskType>>([]);

  const [isShowTaskModalVisible, setIsShowTaskModalVisible] =
    useState<boolean>(false);

  useEffect(() => {
    const getUser = async () => {
      const fetchedUser = await getData('user');
      if (!fetchedUser) {
        Toast.show({ text1: 'Error', text2: 'No user found', type: 'error' });
        navigation.push('Onboarding');
      }
      setUser(fetchedUser);
    };
    getUser();
  }, []);

  useEffect(() => {
    if (user) {
      setTasksForToday(getUserTasksForToday(user.tasks));
    }
  }, [user]);

  return (
    <Layout
      width={width}
      headerTitle={`Welcome ${user?.name}`}
      headerSubtitle={`You have ${tasksForToday} tasks left for today.`}
      fillBackground
      actionButtonOnPress={() => setIsShowTaskModalVisible(true)}
    >
      <Modal
        visible={isShowTaskModalVisible}
        animationType="slide"
        onRequestClose={() => setIsShowTaskModalVisible(false)}
        transparent
      >
        <View style={styles.addTaskModalView}>
          <Text weight="600" size="xxxl" color="darkBlue">
            New Task
          </Text>
          <TextInput
            label="Title"
            icon="account"
            placeholder="John"
            cursorColor="#000000"
            keyboardType="name-phone-pad"
          />
        </View>
      </Modal>
      <View style={styles.tasksWrapper}>
        {tasksForToday.map((task, index) => (
          <Card
            customStyle={
              (styles.taskCard,
              index !== 0 ? { marginTop: spacing.md } : undefined)
            }
            backgroundColor="bgWhite"
            key={task.id}
          >
            <Text>{task.title}</Text>
          </Card>
        ))}
      </View>
    </Layout>
  );
};

export default Home;
