import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as routes from '../constants/routes';
import TaskTabs from './bottomTabs';
import CreateTaskScreen from '../containers/createTask';
import {RootStackParamList} from './types';
import kumbaHeader from '../components/kumbaHeader';
import * as Titles from '../constants/titles';

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.TASKS_TABS} component={TaskTabs} />
        <Stack.Screen
          options={{
            headerShown: true,
            header: props => kumbaHeader(props),
            title: Titles.CREATE_TASK,
          }}
          name={routes.CREATE_TASK}
          component={CreateTaskScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
