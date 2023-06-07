import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOCATIONS_STORE_NAME} from '../constants';
import {TaskLocation} from '../constants/types';

export const getLocationList = async () => {
  const storedTasksString = await AsyncStorage.getItem(LOCATIONS_STORE_NAME);
  return (
    (storedTasksString && (JSON.parse(storedTasksString) as TaskLocation[])) ||
    []
  );
};

export const addToLocationList = async (askLocation: TaskLocation) => {
  const storedTasksString = await AsyncStorage.getItem(LOCATIONS_STORE_NAME);
  if (storedTasksString) {
    const query = JSON.parse(storedTasksString) as TaskLocation[];
    query.push(askLocation);
    await AsyncStorage.setItem(LOCATIONS_STORE_NAME, JSON.stringify(query));
  } else {
    await AsyncStorage.setItem(
      LOCATIONS_STORE_NAME,
      JSON.stringify([askLocation]),
    );
  }
};
export const cleanLocationList = async () => {
  await AsyncStorage.removeItem(LOCATIONS_STORE_NAME);
};
