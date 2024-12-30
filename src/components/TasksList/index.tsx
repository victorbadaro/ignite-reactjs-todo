import { useTasks } from '@/hooks/useTasks';
import { EmptyTasksList } from './EmptyTasksList';
import { Task } from './Task';

import styles from './styles.module.css';

export function TasksList() {
	const { tasks } = useTasks();
	const doneTasks = tasks.filter((task) => task.isDone);

	return (
		<div className={styles['tasks-container']}>
			<header>
				<div>
					<strong>Tarefas criadas</strong>
					<span>{tasks.length}</span>
				</div>

				<div>
					<strong>Concluídas</strong>
					<span>
						{doneTasks.length} de {tasks.length}
					</span>
				</div>
			</header>

			{tasks.length === 0 ? (
				<EmptyTasksList />
			) : (
				<div className={styles.tasks}>
					{tasks.map((task) => (
						<Task key={task.id} id={task.id} description={task.description} isDone={task.isDone} />
					))}
				</div>
			)}
		</div>
	);
}
