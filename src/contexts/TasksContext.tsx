import { type ReactNode, createContext, useState } from 'react';

export interface Task {
	id: string;
	description: string;
	isDone: boolean;
}

interface TasksContextData {
	tasks: Task[];
	createTask: (description: string) => void;
	toggleCheckTask: (taskId: string) => void;
	deleteTask: (taskId: string) => void;
}

interface TasksProviderProps {
	children: ReactNode;
}

const TasksContext = createContext<TasksContextData>({} as TasksContextData);

function TasksProvider({ children }: TasksProviderProps) {
	const [tasks, setTasks] = useState<Task[]>([]);

	function createTask(description: string) {
		const newTask: Task = {
			id: crypto.randomUUID(),
			description,
			isDone: false
		};

		setTasks((prev) => [...prev, newTask]);
	}

	function toggleCheckTask(taskId: string) {
		const updatedTasks = tasks.map((task) => {
			if (task.id === taskId) {
				task.isDone = !task.isDone;
			}

			return task;
		});

		setTasks(updatedTasks);
	}

	function deleteTask(taskId: string) {
		const filteredTasks = tasks.filter((tasks) => tasks.id !== taskId);

		setTasks(filteredTasks);
	}

	return <TasksContext.Provider value={{ tasks, createTask, toggleCheckTask, deleteTask }}>{children}</TasksContext.Provider>;
}

export { TasksContext, TasksProvider };
