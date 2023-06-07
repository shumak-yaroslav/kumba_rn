import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import * as routes from '../../constants/routes';
import TasksScreen from '../../containers/tasks';
import MapScreen from '../../containers/map';
import KumbaHeader from '../../components/kumbaHeader';
import KumbaTabBar from '../../components/tabBar';

const Tab = createBottomTabNavigator();

function TaskTabs() {
  return (
    <Tab.Navigator
      backBehavior={'none'}
      tabBar={props => <KumbaTabBar {...props} />}
      screenOptions={{
        headerShown: true,
        header: props => <KumbaHeader {...props} />,
      }}>
      <Tab.Screen name={routes.TASKS} component={TasksScreen} />
      <Tab.Screen name={routes.MAP} component={MapScreen} />
    </Tab.Navigator>
  );
}

export default TaskTabs;
