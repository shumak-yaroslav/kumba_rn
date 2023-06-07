import {useEffect, useState} from 'react';
import {Task} from '../constants/types';
import {
  saveTaskToStore,
  addToTaskQuery,
  addToTaskUpdateQuery,
  cleanEditTaskQuery,
  cleanTaskQuery,
  createTask,
  getTaskQuery,
  getTasks,
  getStoreTasks,
  getTaskUpdateQuery,
  saveTasksToStore,
  updateAddTaskQuery,
  updateTask,
  updateStoreTask,
} from '../services/taskService';
import {addToLocationList, getLocationList} from '../services/locationService';
import {useTaskContext} from './common';

const useTask = () => {
  const {tasks, setTasks} = useTaskContext();
  const [loading, setLoading] = useState(false);
  const pushTasks = async () => {
    const taskQuery = await getTaskQuery();
    let err;
    for (const task of taskQuery) {
      const {title, completed} = task;
      try {
        const createdTask = await createTask({title, completed});
        await addToLocationList({
          id: createdTask.id!,
          title: task.title,
          coordinate: task.coordinate!,
        });
        await saveTaskToStore(createdTask);
      } catch (e) {
        err = e;
      }
    }
    !err && (await cleanTaskQuery());
    const taskEditQuery = await getTaskUpdateQuery();
    for (const task of taskEditQuery) {
      const {id, completed} = task;
      try {
        await updateTask(id!, completed);
        await updateStoreTask(id!, completed);
      } catch (e) {
        err = e;
      }
    }
    try {
      !err && (await cleanEditTaskQuery());
      const updatedTasks = await getTasks();
      await saveTasksToStore(updatedTasks);
    } catch (e) {
      console.log(e);
    }
  };

  const createNewTask = async (task: Task) => {
    setLoading(true);
    try {
      const createdTask = await createTask(task);
      await saveTaskToStore({...createdTask, coordinate: task.coordinate!});
      await addToLocationList({
        id: createdTask.id!,
        title: task.title,
        coordinate: task.coordinate!,
      });
    } catch (e) {
      await addToTaskQuery(task);
    }
    setTasks([...tasks, task]);
    setLoading(false);
  };

  const updateTaskStatus = async (task: Task, completed: boolean) => {
    // setLoading(true);
    if (task.id) {
      await updateRemoteTask(task, completed);
    } else {
      await updateTaskLocally(task, completed);
    }
    // setLoading(false);
  };

  const updateTaskLocally = async (task: Task, completed: boolean) => {
    await updateAddTaskQuery(task);
    const updatedTasks = tasks.map(localTask => {
      if (
        localTask.title === task.title &&
        localTask.coordinate?.longitude === task.coordinate?.longitude &&
        localTask.coordinate?.latitude === task.coordinate?.latitude
      ) {
        return {...localTask, completed};
      }
      return localTask;
    });
    setTasks(updatedTasks);
  };
  const updateRemoteTask = async (task: Task, completed: boolean) => {
    try {
      await updateTask(task.id!, completed);
      await updateStoreTask(task.id!, completed);
    } catch (e) {
      await updateStoreTask(task.id!, completed);
      await addToTaskUpdateQuery({...task, completed});
    }
    const updatedTasks = tasks.map(taskItem => {
      if (taskItem.id === task.id) {
        return {...taskItem, completed};
      }
      return taskItem;
    });
    setTasks(updatedTasks);
  };

  const loadTasks = async () => {
    let updatedTasks: Task[] = [];
    try {
      updatedTasks = await getTasks();
    } catch (e) {
      updatedTasks = await getStoreTasks();
    }
    const locationList = await getLocationList();
    locationList.forEach(location => {
      const taskToUpdate = updatedTasks.find(task => task.id === location.id);
      if (taskToUpdate) {
        taskToUpdate.coordinate = location.coordinate;
      }
    });
    setTasks(updatedTasks);
  };

  useEffect(() => {
    const synchronizeTasks = async () => {
      try {
        await pushTasks();
      } finally {
        await loadTasks();
      }
    };

    synchronizeTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    tasks,
    loading,
    createTask: createNewTask,
    updateTask: updateTaskStatus,
  };
};

export default useTask;
