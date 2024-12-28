import { Task } from '../Task';

import styles from './styles.module.css';

export function TasksList() {
	return (
		<div className={styles['tasks-container']}>
			<header>
				<div>
					<strong>Tarefas criadas</strong>
					<span>5</span>
				</div>

				<div>
					<strong>Concluídas</strong>
					<span>2 de 5</span>
				</div>
			</header>

			<div className={styles.tasks}>
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
			</div>
		</div>
	);
}
