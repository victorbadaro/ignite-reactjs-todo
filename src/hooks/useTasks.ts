import { TasksContext } from '@/contexts/TasksContext';
import { useContext } from 'react';

export function useTasks() {
	const context = useContext(TasksContext);

	return context;
}
