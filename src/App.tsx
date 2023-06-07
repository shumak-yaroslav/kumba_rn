import React, {useEffect, useState} from 'react';
import RootNavigator from './navigation';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {primaryColor} from './constants/colors';
import {Task} from './constants/types';
import {TaskContext} from './hooks/useTask';

function App(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor(primaryColor);
  }, []);

  return (
    <SafeAreaProvider>
      <TaskContext.Provider value={{tasks, setTasks}}>
        <RootNavigator />
      </TaskContext.Provider>
    </SafeAreaProvider>
  );
}

export default App;
