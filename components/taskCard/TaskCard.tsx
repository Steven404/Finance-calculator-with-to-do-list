import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

import { formatDate } from '../../modules/common';
import { borderRadius, colors, spacing } from '../../theme';
import { TaskType } from '../../types/TaskTypes';
import Card from '../card/Card';
import Text from '../text/Text';

interface TaskCardPropsType {
  customStyle?: ViewStyle;
  task: TaskType;
}

const styles = StyleSheet.create({
  taskCardDetailsRow: { flexDirection: 'row', paddingTop: spacing.xs },
  taskCardTitleWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  wrapper: {
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
});

const TaskCard = ({ customStyle, task }: TaskCardPropsType) => {
  return (
    <Card
      customStyle={{
        ...styles.wrapper,
        ...customStyle,
      }}
      backgroundColor="bgWhite"
      key={task.id}
      shadow
    >
      <View style={styles.taskCardTitleWrapper}>
        <Text size="xl" color="textGray" weight="500">
          {task.title}
        </Text>
        <MaterialCommunityIcons
          name="delete"
          size={spacing.xl}
          color={colors.textGray}
        />
      </View>
      <View>
        <View style={styles.taskCardDetailsRow}>
          <Text color="textGrayLight" weight="600" size="sm">
            Summary: &nbsp;
          </Text>
          <Text color="textGrayLight" size="sm">
            {task.summary}
          </Text>
        </View>
        <View style={styles.taskCardDetailsRow}>
          <Text color="textGrayLight" weight="600" size="sm">
            Reminder set at: &nbsp;
          </Text>
          <Text color="textGrayLight" size="sm">
            {formatDate(task.remindAt, true)}
          </Text>
        </View>
        <View style={styles.taskCardDetailsRow}>
          <Text color="textGrayLight" weight="600" size="sm">
            Completed at: &nbsp;
          </Text>
          <Text color="textGrayLight" size="sm">
            {task.completedAt
              ? formatDate(task.completedAt)
              : 'Not completed yet'}
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default TaskCard;
