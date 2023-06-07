import {useContext} from 'react';
import {TaskContext} from '../providers/taskContext';

export const useTaskContext = () => useContext(TaskContext);
