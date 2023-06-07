import React, {useEffect} from 'react';
import RootNavigator from './navigation';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {primaryColor} from './constants/colors';
import TaskContextProvider from './providers/taskContext';

function App(): JSX.Element {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor(primaryColor);
  }, []);

  return (
    <SafeAreaProvider>
      <TaskContextProvider>
        <RootNavigator />
      </TaskContextProvider>
    </SafeAreaProvider>
  );
}

export default App;
