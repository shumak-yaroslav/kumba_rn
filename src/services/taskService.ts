import {fetchTasks} from './api';
import {
  DELETE_METHOD,
  GET_METHOD,
  PATCH_METHOD,
  POST_METHOD,
  QUERY_EDIT_STORE_NAME,
  QUERY_STORE_NAME,
  STORE_NAME,
} from '../constants';
import {Task} from '../constants/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getTasks = async (): Promise<Task[]> => {
  return await fetchTasks('', GET_METHOD);
};
const createTask = async ({title, completed}: Task) => {
  return await fetchTasks('', POST_METHOD, {
    title,
    completed,
  });
};

const updateTask = async (taskId: number, completed: boolean) => {
  return await fetchTasks(`${taskId}`, PATCH_METHOD, {
    completed,
  });
};

const deleteTask = async (taskId: number) => {
  return await fetchTasks(`${taskId}`, DELETE_METHOD);
};

export const saveTasksToStore = async (tasks: Task[]) => {
  await AsyncStorage.setItem(STORE_NAME, JSON.stringify(tasks));
};
export const saveTaskToStore = async (task: Task) => {
  const storedTasksString = await AsyncStorage.getItem(STORE_NAME);
  if (storedTasksString) {
    const query = JSON.parse(storedTasksString) as Task[];
    query.push(task);
    await AsyncStorage.setItem(STORE_NAME, JSON.stringify(query));
  } else {
    await AsyncStorage.setItem(STORE_NAME, JSON.stringify([task]));
  }
};

export const updateStoreTask = async (id: number, completed: boolean) => {
  const storedTasksString = await AsyncStorage.getItem(STORE_NAME);
  if (storedTasksString) {
    const localTasks = JSON.parse(storedTasksString) as Task[];
    const updatedTasks = localTasks.map(localTask => {
      if (localTask.id === id) {
        return {...localTask, completed};
      }
      return localTask;
    });
    await AsyncStorage.setItem(STORE_NAME, JSON.stringify(updatedTasks));
  }
};
export const getStoreTasks = async () => {
  const storedTasksString = await AsyncStorage.getItem(STORE_NAME);
  return (storedTasksString && (JSON.parse(storedTasksString) as Task[])) || [];
};

export const cleanStore = async () => {
  await AsyncStorage.clear();
};

export const getTaskQuery = async () => {
  const storedTasksString = await AsyncStorage.getItem(QUERY_STORE_NAME);
  return (storedTasksString && (JSON.parse(storedTasksString) as Task[])) || [];
};

export const addToTaskQuery = async (task: Task) => {
  const storedTasksString = await AsyncStorage.getItem(QUERY_STORE_NAME);
  if (storedTasksString) {
    const query = JSON.parse(storedTasksString) as Task[];
    query.push(task);
    await AsyncStorage.setItem(QUERY_STORE_NAME, JSON.stringify(query));
  } else {
    await AsyncStorage.setItem(QUERY_STORE_NAME, JSON.stringify([task]));
  }
};

export const updateAddTaskQuery = async (task: Task) => {
  const storedTasksString = await AsyncStorage.getItem(QUERY_STORE_NAME);
  if (storedTasksString) {
    const localTasks = JSON.parse(storedTasksString) as Task[];
    const updatedTasks = localTasks.map(localTask => {
      if (
        localTask.title === task.title &&
        localTask.coordinate?.longitude === task.coordinate?.longitude &&
        localTask.coordinate?.latitude === task.coordinate?.latitude
      ) {
        return {...localTask, ...task};
      }
      return localTask;
    });
    await AsyncStorage.setItem(QUERY_STORE_NAME, JSON.stringify(updatedTasks));
  }
};

export const getTaskUpdateQuery = async () => {
  const storedTasksString = await AsyncStorage.getItem(QUERY_EDIT_STORE_NAME);
  return (storedTasksString && (JSON.parse(storedTasksString) as Task[])) || [];
};

export const addToTaskUpdateQuery = async (task: Task) => {
  const storedTasksString = await AsyncStorage.getItem(QUERY_EDIT_STORE_NAME);
  if (storedTasksString) {
    const query = JSON.parse(storedTasksString) as Task[];
    query.push(task);
    await AsyncStorage.setItem(QUERY_EDIT_STORE_NAME, JSON.stringify(query));
  } else {
    await AsyncStorage.setItem(QUERY_EDIT_STORE_NAME, JSON.stringify([task]));
  }
};
export const cleanTaskQuery = async () => {
  await AsyncStorage.removeItem(QUERY_STORE_NAME);
};
export const cleanEditTaskQuery = async () => {
  await AsyncStorage.removeItem(QUERY_EDIT_STORE_NAME);
};

export {getTasks, createTask, updateTask, deleteTask};
