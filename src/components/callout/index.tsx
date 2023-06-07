import React from 'react';
import {Marker} from 'react-native-maps';
import styles from './styles';
import {Text, View} from 'react-native';

import {Task} from '../../constants/types';

type CalloutProps = {
  task: Task;
};
const CustomCallout = ({task}: CalloutProps) => {
  const onMarkerPress = () => {};

  return (
    <Marker coordinate={task.coordinate} onPress={onMarkerPress}>
      <View style={styles.container}>
        <View style={styles.bubble}>
          <View>
            <Text style={styles.text}>{task.title}</Text>
          </View>
        </View>
      </View>
      <View style={styles.arrowBorder} />
      <View style={styles.arrow} />
    </Marker>
  );
};

export default CustomCallout;
