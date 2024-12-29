import type { Task as TaskType } from '@/contexts/TasksContext';
import { useTasks } from '@/hooks/useTasks';
import { CheckCircle, Circle, Trash } from '@phosphor-icons/react';
import { useState } from 'react';

import styles from './styles.module.css';

interface TaskProps extends TaskType {}

export function Task({ id, description, isDone }: TaskProps) {
	const { toggleCheckTask, deleteTask } = useTasks();
	const [isMouseOver, setIsMouseOver] = useState(false);

	function handleCheckTask() {
		toggleCheckTask(id);
	}

	function handleDeleteTask() {
		deleteTask(id);
	}

	function handleMouseOver() {
		setIsMouseOver(true);
	}

	function handleMouseLeave() {
		setIsMouseOver(false);
	}

	return (
		<div className={isDone ? `${styles.task} ${styles['checked-task']}` : styles.task}>
			<button type="button" onClick={handleCheckTask} onMouseOver={handleMouseOver} onFocus={handleMouseOver} onMouseLeave={handleMouseLeave}>
				{isDone ? (
					<CheckCircle size={17} weight="fill" color={isMouseOver ? '#8284fa' : '#5e60ce'} />
				) : isMouseOver ? (
					<Circle size={17} weight="duotone" color="#1e6f9f" />
				) : (
					<Circle size={17} weight="bold" color="#4ea8de" />
				)}
			</button>
			<p>{description}</p>
			<button type="button" title="Excluir" onClick={handleDeleteTask}>
				<Trash size={14} />
			</button>
		</div>
	);
}
