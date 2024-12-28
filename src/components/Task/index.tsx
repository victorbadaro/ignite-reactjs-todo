import type { Task as TaskType } from '@/contexts/TasksContext';
import { useTasks } from '@/hooks/useTasks';
import { CheckCircle, Circle, Trash } from '@phosphor-icons/react';

import styles from './styles.module.css';

interface TaskProps extends TaskType {}

export function Task({ id, description, isDone }: TaskProps) {
	const { toggleCheckTask, deleteTask } = useTasks();

	function handleCheckTask() {
		toggleCheckTask(id);
	}

	function handleDeleteTask() {
		deleteTask(id);
	}

	return (
		<div className={styles.task}>
			<button type="button" onClick={handleCheckTask}>
				{isDone ? <CheckCircle size={17} weight="fill" color="#5e60ce" /> : <Circle size={17} weight="bold" color="#4ea8de" />}
			</button>
			<p>{description}</p>
			<button type="button" onClick={handleDeleteTask}>
				<Trash size={14} />
			</button>
		</div>
	);
}
