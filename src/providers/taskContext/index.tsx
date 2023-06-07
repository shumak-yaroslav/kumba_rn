import React, {createContext, useState} from 'react';
import {Task} from '../../constants/types';

export const TaskContext = createContext<{
  tasks: Task[];
  setTasks: (updatedTasks: Task[]) => void;
}>({
  tasks: [],
  setTasks: () => {},
});

type ProviderProps = {
  children?: React.ReactNode;
};

const TaskContextProvider = ({children}: ProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <TaskContext.Provider value={{tasks, setTasks}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
