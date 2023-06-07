/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import KumbaView from '../../components/kumbaView';
import useTask from '../../hooks/useTask';
import {Task} from '../../constants/types';
import defaultStyles from '../../constants/styles';
import {disabledColor, activeColor} from '../../constants/colors';
import KumbaCheckBox from '../../components/kumbaCheckBox';
import styles from './styles';

type TaskItemProps = {
  task: Task;
  onCheck: (checked: boolean, task: Task) => void;
  index: number;
};
const TaskItem = ({task, onCheck}: TaskItemProps) => {
  const onClick = () => {
    onCheck(!task.completed, task);
  };

  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        defaultStyles.defaultContainer,
        styles.item,
        {
          borderColor: task.completed ? activeColor : disabledColor,
        },
      ]}>
      <View style={styles.textContainer}>
        <Text style={defaultStyles.text}>{task.title}</Text>
      </View>
      <View style={styles.checkContainer}>
        <KumbaCheckBox isChecked={task.completed} onClick={onClick} />
      </View>
    </TouchableOpacity>
  );
};
function TasksScreen(): JSX.Element {
  const {tasks, updateTask, loading} = useTask();

  const onCheck = (isDone: boolean, task: Task) => {
    updateTask(task, isDone);
  };

  return (
    <KumbaView insideTab={true}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={tasks}
          renderItem={item => (
            <TaskItem
              key={item.index}
              task={item.item}
              onCheck={onCheck}
              index={item.index}
            />
          )}
        />
      )}
    </KumbaView>
  );
}

export default TasksScreen;
