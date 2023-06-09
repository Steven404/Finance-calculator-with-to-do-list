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
  detailsRow: { flexDirection: 'row' },
  detailsWrapper: {
    display: 'flex',
  },
  titleWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',
  },
  wrapper: {
    borderRadius: borderRadius.md,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
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
      <View style={styles.titleWrapper}>
        <Text size="xl" color="textGray" weight="500">
          {task.title}
        </Text>
        <MaterialCommunityIcons
          name="delete"
          size={spacing.xl}
          color={colors.textGray}
        />
      </View>
      <View style={styles.detailsWrapper}>
        <View style={styles.detailsRow}>
          <Text color="textGrayLight" weight="400" size="sm">
            Summary: &nbsp;
          </Text>
          <Text weight="600" color="textGrayLight" size="sm">
            {task.summary}
          </Text>
        </View>
        <View style={styles.detailsRow}>
          <Text color="textGrayLight" size="sm">
            Reminder set at: &nbsp;
          </Text>
          <Text weight="600" color="textGrayLight" size="sm">
            {formatDate(task.remindAt, true)}
          </Text>
        </View>
        <View style={styles.detailsRow}>
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
