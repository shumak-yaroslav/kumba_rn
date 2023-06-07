import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import KumbaView from '../../components/kumbaView';
import {RootStackParamList} from '../../navigation/types';
import * as routes from '../../constants/routes';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';
import defaultStyles from '../../constants/styles';
import Button, {ButtonType} from '../../components/button';
import useTask from '../../hooks/useTask';

type Props = NativeStackScreenProps<
  RootStackParamList,
  typeof routes.CREATE_TASK
>;
function CreateTaskScreen({route, navigation}: Props): JSX.Element {
  const {latitude, longitude} = route.params;
  const [text, onChangeText] = useState('');
  const {createTask} = useTask();

  const onCancel = () => {
    navigation.goBack();
  };

  const onCreate = async () => {
    await createTask({
      title: text,
      completed: false,
      coordinate: {latitude, longitude},
    });
    navigation.navigate(routes.TASKS);
  };

  return (
    <KumbaView>
      <View style={styles.container}>
        <Text style={defaultStyles.inputTitle}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button text={'Cancel'} onPress={onCancel} />
        <View style={{width: 4}} />
        <Button
          text={'Create'}
          onPress={onCreate}
          buttonType={ButtonType.filled}
        />
      </View>
    </KumbaView>
  );
}

export default CreateTaskScreen;
