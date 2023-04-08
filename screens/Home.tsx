import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Modal, StyleSheet, useWindowDimensions, View } from 'react-native';

import Layout from '../components/layout/Layout';
import TaskCard from '../components/taskCard/TaskCard';
import Text from '../components/text/Text';
import TextInput from '../components/textInput/TextInput';
import useUser from '../modules/useUser';
import { spacing } from '../theme';
import { RootStackParamList } from '../types/CommonTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const styles = StyleSheet.create({
  addTaskModalView: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.975)',
    height: '80%',
    padding: spacing.xxl,
    top: '20%',
  },

  tasksWrapper: { flex: 1 },
});

const Home = ({ navigation }: Props) => {
  const { width } = useWindowDimensions();

  const { user, userTasksForToday } = useUser();

  const [isShowTaskModalVisible, setIsShowTaskModalVisible] =
    useState<boolean>(false);

  return (
    <Layout
      width={width}
      headerTitle={`Welcome ${user?.name}`}
      headerSubtitle={`You have ${userTasksForToday?.length} tasks left for today.`}
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
        {userTasksForToday.map((task, index) => (
          <TaskCard
            key={task.id}
            task={task}
            customStyle={index !== 0 ? { marginTop: spacing.md } : {}}
          />
        ))}
      </View>
    </Layout>
  );
};

export default Home;
